import { ContactForm } from "@/components/contact-form";
import { InViewReveal } from "@/components/in-view-reveal";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Aegis Communication in Kuala Lumpur for investor relations, IPO communications, media relations, public relations, and corporate event support.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="Share your communication priorities and timeline. We will respond with an appropriate next step."
      />
      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]" aria-labelledby="contact-form-heading">
            <div>
              <h2 id="contact-form-heading" className="mb-4 text-2xl font-semibold text-accent-deep sm:text-3xl">
                Send an Enquiry
              </h2>
              <ContactForm />
            </div>
            <aside className="space-y-5" aria-label="Contact details">
              <div className="surface-panel p-6">
                <h2 className="text-xl font-semibold text-accent-deep">Office</h2>
                <p className="mt-3 text-sm font-semibold text-accent-deep">{siteConfig.legalName}</p>
                <address className="mt-2 not-italic text-sm text-slate-700">
                  {siteConfig.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="mt-2 text-sm text-slate-700">
                  Email:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-accent-blue underline-offset-4 hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Phone:{" "}
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-accent-blue underline-offset-4 hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
              <div className="surface-panel overflow-hidden p-0">
                <h2 className="px-6 pt-6 text-xl font-semibold text-accent-deep">Location Map</h2>
                <p className="px-6 pt-2 text-sm text-slate-700">Google Maps embed placeholder for Union Tower, Taman Desa.</p>
                <div className="mt-4 h-72 w-full bg-slate-100">
                  <iframe
                    title="Union Tower, Taman Desa map placeholder"
                    src="https://maps.google.com/maps?q=Union%20Tower%2C%20Taman%20Desa%2C%20Kuala%20Lumpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </aside>
          </section>
        </InViewReveal>
      </SectionWrapper>
    </>
  );
}
