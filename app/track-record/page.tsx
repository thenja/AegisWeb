import { InViewReveal } from "@/components/in-view-reveal";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Track Record",
  description:
    "Summary of sectors served and communications mandate types delivered by Aegis Communication for corporate and listed-market contexts in Malaysia.",
  path: "/track-record"
});

export default function TrackRecordPage() {
  return (
    <>
      <PageHeader
        title="Track Record"
        intro="A structured summary of mandate types and sector exposure across Aegis communication assignments."
      />

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="mandates-heading" className="surface-panel bg-brand-50/45 p-5 sm:p-6 lg:p-8">
            <h2 id="mandates-heading" className="text-2xl font-semibold text-accent-deep">
              Mandate Types
            </h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2 lg:grid-cols-3">
              <li className="rounded-lg border border-slate-200 bg-white p-4">IPO Campaigns</li>
              <li className="rounded-lg border border-slate-200 bg-white p-4">Investor Relations / Public Relations</li>
              <li className="rounded-lg border border-slate-200 bg-white p-4">RTO / Corporate Exercises</li>
              <li className="rounded-lg border border-slate-200 bg-white p-4">Corporate Events</li>
              <li className="rounded-lg border border-slate-200 bg-white p-4">Crisis / Special Situation Communications</li>
            </ul>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="sectors-heading">
            <h2 id="sectors-heading" className="text-2xl font-semibold text-accent-deep">
              Sector Experience
            </h2>
            <div className="mt-5 grid gap-4 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="surface-panel p-5">Oil &amp; Gas</div>
              <div className="surface-panel p-5">Construction</div>
              <div className="surface-panel p-5">Property</div>
              <div className="surface-panel p-5">Building Materials</div>
              <div className="surface-panel p-5">Retail</div>
              <div className="surface-panel p-5">Consumer Products</div>
              <div className="surface-panel p-5">Trading</div>
              <div className="surface-panel p-5">Services</div>
              <div className="surface-panel p-5">Mining</div>
              <div className="surface-panel p-5">Technology</div>
              <div className="surface-panel p-5">Healthcare</div>
              <div className="surface-panel p-5">Transportation</div>
            </div>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="selected-experience-heading" className="surface-panel p-5 sm:p-6 lg:p-8">
            <h2 id="selected-experience-heading" className="text-2xl font-semibold text-accent-deep">
              Selected Experience
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              References subject to management approval and confidentiality considerations.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Market capitalisation figures and client-specific campaign metrics are not published on this website and
              require verification before external disclosure.
            </p>
          </section>
        </InViewReveal>
      </SectionWrapper>
    </>
  );
}
