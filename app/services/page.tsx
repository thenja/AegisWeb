import { InViewReveal } from "@/components/in-view-reveal";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { ServiceCard } from "@/components/service-card";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Overview of Aegis Communication services for listed companies and IPO candidates in Malaysia, including IR, PR, media relations, and corporate events.",
  path: "/services"
});

const serviceLenses = [
  "IPO Communication Advisory",
  "Investor and Analyst Engagement",
  "Corporate and Media Positioning",
  "Capital Market Event Execution"
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        intro="Integrated communication services for IPO candidates, listed issuers, and management teams."
      />

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="service-lens-heading" className="surface-panel p-6">
            <h2 id="service-lens-heading" className="text-2xl font-semibold text-accent-deep">
              Service Lenses
            </h2>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2 xl:grid-cols-4">
              {serviceLenses.map((lens) => (
                <li key={lens} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                  {lens}
                </li>
              ))}
            </ul>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="all-services-heading">
            <div className="mb-3 flex items-end justify-between gap-3">
              <h2 id="all-services-heading" className="section-heading">
                Core Service Areas
              </h2>
              <p className="text-xs uppercase tracking-[0.08em] text-slate-600">Click any card for detail</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} title={service.title} summary={service.summary} href={service.link} />
              ))}
            </div>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="support-capabilities-heading" className="surface-panel bg-brand-50/45 p-6">
            <h2 id="support-capabilities-heading" className="text-2xl font-semibold text-accent-deep">
              Supporting Capabilities
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <article className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold font-[var(--font-body)] text-accent-deep">Crisis &amp; Special Situation Communications</h3>
                <p className="mt-1.5 text-sm text-slate-700">
                  Communication support for sensitive developments and stakeholder confidence management.
                </p>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold font-[var(--font-body)] text-accent-deep">Digital &amp; Creative Communications Support</h3>
                <p className="mt-1.5 text-sm text-slate-700">
                  Supporting execution aligned with investor, media, and corporate communication objectives.
                </p>
              </article>
            </div>
          </section>
        </InViewReveal>
      </SectionWrapper>
    </>
  );
}
