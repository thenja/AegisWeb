import { CtaBanner } from "@/components/cta-banner";
import { InViewReveal } from "@/components/in-view-reveal";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Aegis",
  description:
    "Learn about Aegis Communication, a Malaysia-based consultancy focused on investor relations, IPO communications, and corporate reputation support.",
  path: "/about-aegis"
});

const positioningPoints = [
  "Capital market communication advisory",
  "Investor, media and stakeholder alignment",
  "Governance-aware communication execution"
];

const values = [
  { title: "Clarity", line: "We simplify complex matters without losing precision." },
  { title: "Accountability", line: "Clear ownership, timelines, and reporting standards." },
  { title: "Stewardship", line: "We protect long-term trust with disciplined communication." },
  { title: "Collaboration", line: "We work closely with management, finance, and legal teams." }
];

export default function AboutAegisPage() {
  return (
    <>
      <PageHeader
        title="About Aegis"
        intro="Aegis Communication advises organisations operating in regulated and reputation-sensitive market environments."
      />

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="firm-overview" className="grid gap-4 lg:grid-cols-2">
            <article className="surface-panel p-6">
              <h2 id="firm-overview" className="text-2xl font-semibold text-accent-deep">
                Firm Overview
              </h2>
              <p className="mt-3 text-sm text-slate-700 sm:text-base">
                We support listed issuers, IPO candidates, and management teams that require communication clarity for
                investors, financial media, and stakeholder audiences in corporate Malaysia.
              </p>
            </article>
            <article className="surface-panel p-6">
              <h2 className="text-2xl font-semibold text-accent-deep">Positioning</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {positioningPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 rounded-md bg-slate-50 px-3 py-2">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-500 to-accent-blue" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="leadership-heading" className="surface-panel p-6">
            <h2 id="leadership-heading" className="text-2xl font-semibold text-accent-deep">
              Led by Capital Market Communications Experience
            </h2>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
              <li className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">Founded and directed by Jason Fong.</li>
              <li className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">Experience across IR, PR, crisis, events, and corporate communications.</li>
              <li className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">Advisory exposure across listed-company and IPO communication contexts.</li>
              <li className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">Practical counsel balancing governance, timing, and market sensitivity.</li>
            </ul>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="approach-heading" className="surface-panel bg-brand-50/45 p-6">
            <h2 id="approach-heading" className="text-2xl font-semibold text-accent-deep">
              Our Approach
            </h2>
            <ol className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2 xl:grid-cols-3">
              <li className="rounded-lg border border-slate-200 bg-white p-4">1. Understand strategy priorities and market context.</li>
              <li className="rounded-lg border border-slate-200 bg-white p-4">2. Develop a clear investment and communication message.</li>
              <li className="rounded-lg border border-slate-200 bg-white p-4">3. Prepare market-facing investor relations materials.</li>
              <li className="rounded-lg border border-slate-200 bg-white p-4">4. Engage investors, analysts, media, and stakeholders.</li>
              <li className="rounded-lg border border-slate-200 bg-white p-4">5. Monitor response and market perception signals.</li>
              <li className="rounded-lg border border-slate-200 bg-white p-4">6. Refine communication strategy over time.</li>
            </ol>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="values-heading">
            <h2 id="values-heading" className="text-2xl font-semibold text-accent-deep">
              Values
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              {values.map((value) => (
                <article key={value.title} className="surface-panel p-4">
                  <h3 className="font-semibold font-[var(--font-body)] text-accent-deep">{value.title}</h3>
                  <p className="mt-1.5">{value.line}</p>
                </article>
              ))}
            </div>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <CtaBanner
        title="Need communications support for your next market milestone?"
        description="Speak with us about current priorities and the practical support your team requires."
        ctaLabel="Get In Touch"
        ctaHref="/contact"
        sectionClassName="!pt-2 !pb-5 sm:!pt-3 sm:!pb-6 lg:!pt-4 lg:!pb-7"
        variant="premium"
      />
    </>
  );
}
