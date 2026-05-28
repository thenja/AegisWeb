import { CtaBanner } from "@/components/cta-banner";
import { InViewReveal } from "@/components/in-view-reveal";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";

type ServiceDetailPageProps = {
  title: string;
  intro: string;
  process: string[];
  capabilities?: string[];
  capabilityGroups?: { title: string; items: string[] }[];
};

export function ServiceDetailPage({ title, intro, process, capabilities, capabilityGroups }: ServiceDetailPageProps) {
  const groups = capabilityGroups?.length
    ? capabilityGroups
    : [
        {
          title: "Core Capabilities",
          items: capabilities ?? []
        }
      ];

  return (
    <>
      <PageHeader title={title} intro={intro} />

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="process-heading" className="grid gap-5 lg:grid-cols-2">
            <article className="surface-panel p-6">
              <h2 id="process-heading" className="text-2xl font-semibold text-accent-deep">
                How We Work
              </h2>
              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                {process.map((item, index) => (
                  <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-blue text-[11px] font-semibold text-white">
                        {index + 1}
                      </span>
                      <p>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-panel p-6">
              <h2 className="text-2xl font-semibold text-accent-deep">What We Deliver</h2>
              <div className="mt-4 space-y-4">
                {groups.map((group) => (
                  <section key={group.title} aria-label={group.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-sm font-semibold font-[var(--font-body)] uppercase tracking-[0.06em] text-accent-deep">
                      {group.title}
                    </h3>
                    <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 rounded-md bg-white px-2.5 py-2">
                          <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-500 to-accent-blue" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="format-heading" className="surface-panel bg-brand-50/45 p-6">
            <h2 id="format-heading" className="text-2xl font-semibold text-accent-deep">
              Engagement Format
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-3">
              <article className="rounded-lg border border-slate-200 bg-white px-4 py-3">
                <h3 className="font-semibold font-[var(--font-body)] text-accent-deep">Standalone Mandate</h3>
                <p className="mt-1.5">Defined scope for a specific milestone or event.</p>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white px-4 py-3">
                <h3 className="font-semibold font-[var(--font-body)] text-accent-deep">Programme Support</h3>
                <p className="mt-1.5">Ongoing support across calendar-based communication activities.</p>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white px-4 py-3">
                <h3 className="font-semibold font-[var(--font-body)] text-accent-deep">Leadership Advisory</h3>
                <p className="mt-1.5">Direct counsel for management briefings and stakeholder messaging.</p>
              </article>
            </div>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <CtaBanner
        title="Need support for this service area?"
        description="Share your timeline and communication priorities, and we can outline a practical engagement scope."
        ctaLabel="Request A Discussion"
        ctaHref="/contact"
        sectionClassName="!pt-2 !pb-5 sm:!pt-3 sm:!pb-6 lg:!pt-4 lg:!pb-7"
        variant="premium"
      />
    </>
  );
}
