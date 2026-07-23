import { Resend } from "resend";

const TO_EMAIL = "sakibbashar3@gmail.com";

function row(label, value) {
  return `<tr><td style="padding:4px 12px 4px 0;color:#64748b;white-space:nowrap;vertical-align:top;"><b>${label}</b></td><td style="padding:4px 0;">${value || "—"}</td></tr>`;
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot — bots tend to fill every field, real visitors never see this one
  if (data.botcheck) {
    return Response.json({ success: true });
  }

  if (!data.email || !data.firstName || !data.message) {
    return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }

  const subject = `Enquiry: ${data.inquiryType || "General"} — ${data.division || "SecurityLink"}`;

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#0f172a;max-width:600px;">
      <h2 style="margin:0 0 16px;">New enquiry from the SecurityLink website</h2>

      <h3 style="margin:20px 0 8px;">Contact Information</h3>
      <table>
        ${row("Name", `${data.firstName} ${data.lastName}`)}
        ${row("Email", data.email)}
        ${row("Phone", data.phone)}
        ${row("Company", data.company)}
        ${row("Designation", data.designation)}
      </table>

      <h3 style="margin:20px 0 8px;">Inquiry Details</h3>
      <table>
        ${row("Division", data.division)}
        ${row("Type", data.inquiryType)}
      </table>

      <h3 style="margin:20px 0 8px;">Site Information</h3>
      <table>
        ${row("Premises Type", data.premisesType)}
        ${row("Address", data.premisesAddress)}
        ${row("City", data.premisesCity)}
        ${row("Estimated Guards", data.guardCount)}
      </table>

      <h3 style="margin:20px 0 8px;">Current Setup</h3>
      <table>
        ${row("Current Security", data.currentSecurity)}
        ${row("Specific Concerns", data.specificConcerns)}
      </table>

      <h3 style="margin:20px 0 8px;">Budget &amp; Timeline</h3>
      <table>
        ${row("Budget Range", data.budgetRange)}
        ${row("Timeline", data.timeline)}
      </table>

      <h3 style="margin:20px 0 8px;">Preferences</h3>
      <table>
        ${row("Preferred Contact", data.contactPreference)}
        ${row("Best Time to Call", data.bestTimeToCall)}
        ${row("Referral Source", data.referralSource)}
      </table>

      <h3 style="margin:20px 0 8px;">Message</h3>
      <p style="white-space:pre-wrap;">${data.message}</p>
    </div>
  `;

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { success: false, error: "Email service not configured (missing RESEND_API_KEY)" },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      // TODO: once you verify securitylinkbd.com in Resend, switch this to
      // something like "SecurityLink Website <enquiries@securitylinkbd.com>"
      from: "SecurityLink Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: data.email,
      subject,
      html,
    });

    if (error) {
      return Response.json({ success: false, error: error.message }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}