"use client";

import ContactForm from "./ContactForm";

export default function EnquiryFormPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 bg-background">
      <div className="max-w-auto mx-auto px-6 lg:px-24">
        <div className="mb-10">
          <span className="font-mono-data text-sm text-cobalt-electric uppercase tracking-[0.2em]">
            Enquiry Form
          </span>
          <h1 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-3 leading-tight">
            Tell Us What You Need Secured
          </h1>
          <p className="font-body-md text-sm lg:text-lg text-on-surface-variant mt-4 leading-relaxed ">
            Fill out the form below with as much detail as you can. The more we know upfront, the faster
            we can prepare a proposal tailored to your site, your team, and your budget. Our team will review your submission and get back to you within 1-2 business days.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
