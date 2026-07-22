"use client";

import { useState } from "react";
import { Send, ChevronDown, User, Building2, MapPin, ClipboardList, DollarSign, Settings } from "lucide-react";

const DIVISIONS = [
  "Manned Guarding Division",
  "Risk Advisory",
  "Security Technology",
  "Logistics Services",
  "General Enquiry",
];

const INQUIRY_TYPES = [
  "New Contract",
  "Contract Renewal",
  "One-Time Service",
  "Site Assessment",
  "Partnership / Collaboration",
  "Career / Recruitment",
  "Media / Press",
  "Other",
];

const PREMISES_TYPES = [
  "Corporate Office",
  "Industrial / Factory",
  "Warehouse / Logistics Hub",
  "Residential Complex",
  "Shopping Mall / Retail",
  "Hospital / Healthcare",
  "Educational Institution",
  "Government / Embassy",
  "Hotel / Hospitality",
  "Construction Site",
  "Other",
];

const GUARD_COUNTS = [
  "Not sure yet",
  "1 - 10",
  "11 - 50",
  "51 - 100",
  "101 - 250",
  "250+",
];

const BUDGET_RANGES = [
  "Not decided yet",
  "Under BDT 50,000 / month",
  "BDT 50,000 - 1,50,000 / month",
  "BDT 1,50,000 - 5,00,000 / month",
  "Above BDT 5,00,000 / month",
  "Prefer to discuss",
];

const TIMELINES = [
  "Immediately (within 1 week)",
  "Within 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "Just exploring options",
];

const CONTACT_PREFERENCES = [
  "Phone Call",
  "Email",
  "WhatsApp",
  "In-Person Meeting",
  "No Preference",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    division: DIVISIONS[0],
    inquiryType: INQUIRY_TYPES[0],
    premisesType: PREMISES_TYPES[0],
    premisesAddress: "",
    premisesCity: "",
    guardCount: GUARD_COUNTS[0],
    currentSecurity: "",
    specificConcerns: "",
    budgetRange: BUDGET_RANGES[0],
    timeline: TIMELINES[0],
    contactPreference: CONTACT_PREFERENCES[0],
    bestTimeToCall: "",
    message: "",
    referralSource: "",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Enquiry: ${form.inquiryType} — ${form.division}`;
    const body = [
      "=== CONTACT INFORMATION ===",
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Company: ${form.company}`,
      `Designation: ${form.designation}`,
      "",
      "=== INQUIRY DETAILS ===",
      `Division: ${form.division}`,
      `Type: ${form.inquiryType}`,
      "",
      "=== SITE INFORMATION ===",
      `Premises Type: ${form.premisesType}`,
      `Address: ${form.premisesAddress}`,
      `City: ${form.premisesCity}`,
      `Estimated Guards: ${form.guardCount}`,
      "",
      "=== CURRENT SETUP ===",
      `Current Security: ${form.currentSecurity || "N/A"}`,
      `Specific Concerns: ${form.specificConcerns || "N/A"}`,
      "",
      "=== BUDGET & TIMELINE ===",
      `Budget Range: ${form.budgetRange}`,
      `Timeline: ${form.timeline}`,
      "",
      "=== PREFERENCES ===",
      `Preferred Contact: ${form.contactPreference}`,
      `Best Time to Call: ${form.bestTimeToCall || "N/A"}`,
      `Referral Source: ${form.referralSource || "N/A"}`,
      "",
      "=== MESSAGE ===",
      form.message,
    ].join("\n");
    window.location.href = `mailto:info@securitylink-bd.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass =
    "w-full bg-surface-container-low/50 border border-surface-border focus:border-cobalt-electric focus:bg-surface-container-low outline-none px-5 py-3.5 text-on-surface font-body-lg placeholder:text-on-surface-variant/40 transition-all duration-200 text-base";

  const selectClass = `${fieldClass} appearance-none cursor-pointer`;

  const Select = ({ label, id, value, onChange, options }) => (
    <div>
      <label htmlFor={id} className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">
        {label}
      </label>
      <div className="relative">
        <select id={id} value={value} onChange={onChange} className={selectClass}>
          {options.map((t) => (
            <option key={t} value={t} className="bg-surface-container-low text-on-surface">{t}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant pointer-events-none" />
      </div>
    </div>
  );

  const FormPanel = ({ icon: Icon, number, title, subtitle, children }) => (
    <div className="relative border border-surface-border hover:border-cobalt-electric/30 bg-surface-container-low/20 p-7 md:p-10 transition-colors duration-300 group">
      {/* Corner brackets */}
      <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cobalt-electric/40" />
      <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cobalt-electric/40" />
      <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cobalt-electric/40" />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cobalt-electric/40" />

      {/* Panel header */}
      <div className="flex items-center gap-4 mb-8 pb-5 border-b border-surface-border/60">
        <div className="w-12 h-12 border border-cobalt-electric/30 bg-cobalt-electric/10 flex items-center justify-center shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
          <Icon className="w-6 h-6 text-cobalt-electric" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="font-mono-data text-[11px] text-cobalt-electric/60 uppercase tracking-widest">{number}</span>
            <h3 className="font-headline-md text-lg md:text-xl text-on-surface uppercase tracking-wide">{title}</h3>
          </div>
          {subtitle && <p className="font-body-sm text-sm text-on-surface-variant mt-1.5">{subtitle}</p>}
        </div>
      </div>

      {children}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Panel 1: Contact Information */}
      <FormPanel icon={User} number="01" title="Contact Information" subtitle="Who should we reach out to?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">First Name *</label>
            <input id="firstName" type="text" required value={form.firstName} onChange={update("firstName")} placeholder="First name" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="lastName" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Last Name *</label>
            <input id="lastName" type="text" required value={form.lastName} onChange={update("lastName")} placeholder="Last name" className={fieldClass} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div>
            <label htmlFor="email" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Email Address *</label>
            <input id="email" type="email" required value={form.email} onChange={update("email")} placeholder="you@company.com" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="phone" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Phone Number *</label>
            <input id="phone" type="tel" required value={form.phone} onChange={update("phone")} placeholder="+880 ..." className={fieldClass} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div>
            <label htmlFor="company" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Company / Organisation</label>
            <input id="company" type="text" value={form.company} onChange={update("company")} placeholder="Company name" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="designation" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Your Designation</label>
            <input id="designation" type="text" value={form.designation} onChange={update("designation")} placeholder="e.g. Facility Manager" className={fieldClass} />
          </div>
        </div>
      </FormPanel>

      {/* Panel 2: Inquiry Details */}
      <FormPanel icon={ClipboardList} number="02" title="Inquiry Details" subtitle="What brings you to SecurityLink?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Select label="Division of Interest" id="division" value={form.division} onChange={update("division")} options={DIVISIONS} />
          <Select label="Type of Inquiry" id="inquiryType" value={form.inquiryType} onChange={update("inquiryType")} options={INQUIRY_TYPES} />
        </div>
      </FormPanel>

      {/* Panel 3: Site Information */}
      <FormPanel icon={MapPin} number="03" title="Site Information" subtitle="Tell us about the premises you need secured.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Select label="Premises Type" id="premisesType" value={form.premisesType} onChange={update("premisesType")} options={PREMISES_TYPES} />
          <Select label="Estimated Guard Count" id="guardCount" value={form.guardCount} onChange={update("guardCount")} options={GUARD_COUNTS} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div>
            <label htmlFor="premisesAddress" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Site Address</label>
            <input id="premisesAddress" type="text" value={form.premisesAddress} onChange={update("premisesAddress")} placeholder="Full address of the site" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="premisesCity" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">City / District</label>
            <input id="premisesCity" type="text" value={form.premisesCity} onChange={update("premisesCity")} placeholder="e.g. Dhaka, Chittagong" className={fieldClass} />
          </div>
        </div>
      </FormPanel>

      {/* Panel 4: Current Setup & Concerns */}
      <FormPanel icon={Settings} number="04" title="Current Setup & Concerns" subtitle="Help us understand your existing security posture.">
        <div>
          <label htmlFor="currentSecurity" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Current Security Arrangement</label>
          <textarea id="currentSecurity" rows={3} value={form.currentSecurity} onChange={update("currentSecurity")} placeholder="Describe your current security setup — guards, technology, any existing provider, etc." className={`${fieldClass} resize-none`} />
        </div>
        <div className="mt-5">
          <label htmlFor="specificConcerns" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Specific Concerns or Requirements</label>
          <textarea id="specificConcerns" rows={3} value={form.specificConcerns} onChange={update("specificConcerns")} placeholder="What keeps you up at night? Theft, access control, crowd management, fire safety — tell us everything." className={`${fieldClass} resize-none`} />
        </div>
      </FormPanel>

      {/* Panel 5: Budget & Timeline */}
      <FormPanel icon={DollarSign} number="05" title="Budget & Timeline" subtitle="So we can prepare the right proposal.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Select label="Monthly Budget Range" id="budgetRange" value={form.budgetRange} onChange={update("budgetRange")} options={BUDGET_RANGES} />
          <Select label="When Do You Need This?" id="timeline" value={form.timeline} onChange={update("timeline")} options={TIMELINES} />
        </div>
      </FormPanel>

      {/* Panel 6: Preferences & Additional */}
      <FormPanel icon={Building2} number="06" title="Preferences & Additional Details" subtitle="How should we follow up?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Select label="Preferred Contact Method" id="contactPreference" value={form.contactPreference} onChange={update("contactPreference")} options={CONTACT_PREFERENCES} />
          <div>
            <label htmlFor="bestTimeToCall" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Best Time to Call</label>
            <input id="bestTimeToCall" type="text" value={form.bestTimeToCall} onChange={update("bestTimeToCall")} placeholder="e.g. Weekdays 10am - 5pm" className={fieldClass} />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="referralSource" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">How Did You Hear About Us?</label>
          <input id="referralSource" type="text" value={form.referralSource} onChange={update("referralSource")} placeholder="Google, referral, event, etc." className={fieldClass} />
        </div>
        <div className="mt-5">
          <label htmlFor="message" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2.5">Anything Else We Should Know? *</label>
          <textarea id="message" required rows={5} value={form.message} onChange={update("message")} placeholder="Additional context, special instructions, or anything that helps us prepare better for you." className={`${fieldClass} resize-none`} />
        </div>
      </FormPanel>

      {/* Submit */}
      <div className="relative border border-cobalt-electric/30 bg-surface-container-low/20 p-7 md:p-10">
        <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cobalt-electric/40" />
        <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cobalt-electric/40" />
        <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cobalt-electric/40" />
        <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cobalt-electric/40" />

        <div className="flex flex-col sm:flex-row gap-4">
          <button type="submit" className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cobalt-electric to-blue-600 text-white px-12 py-4.5 font-bold text-base uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(37,99,235,0.35)]">
            <Send className="w-5 h-5" />
            Submit Enquiry
          </button>
        </div>

        <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed mt-5">
          By submitting this form, you agree to be contacted by SecurityLink regarding your enquiry.
          We typically respond within 24 hours during business days.
        </p>
      </div>
    </form>
  );
}
