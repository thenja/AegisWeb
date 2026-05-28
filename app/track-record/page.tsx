import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { InViewReveal } from "@/components/in-view-reveal";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { buildMetadata } from "@/lib/metadata";

const mandateTypes = [
  {
    title: "IPO Campaigns",
    points: ["Prospectus communication support", "Listing milestone communications", "Investor and media readiness"]
  },
  {
    title: "Investor Relations / Public Relations",
    points: ["Results and update communications", "Analyst and media engagement", "Reputation message consistency"]
  },
  {
    title: "RTO / Corporate Exercises",
    points: ["Corporate exercise narratives", "Stakeholder briefing support", "Communication governance"]
  },
  {
    title: "Corporate Events",
    points: ["Capital market event management", "Stakeholder session planning", "Message and protocol coordination"]
  },
  {
    title: "Crisis / Special Situations",
    points: ["Sensitive issue response support", "Management communications guidance", "Market confidence preservation"]
  }
];

const sectorClusters = [
  {
    title: "Industrial & Infrastructure",
    sectors: ["Oil & Gas", "Construction", "Property", "Building Materials"]
  },
  {
    title: "Consumer & Commercial",
    sectors: ["Retail", "Consumer Products", "Trading", "Services"]
  },
  {
    title: "Growth & Essential Services",
    sectors: ["Mining", "Technology", "Healthcare", "Transportation"]
  }
];

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
        intro="Mandate exposure across IPO communications, investor relations, public relations, media engagement, and market-sensitive corporate situations."
      />

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="mandates-heading" className="surface-panel relative overflow-hidden p-5 sm:p-6 lg:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.14]">
              <Image src="/aegis-hero-image-1.png" alt="" fill sizes="100vw" quality={68} className="object-cover object-right-bottom" />
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/88" />

            <div className="relative z-10">
              <h2 id="mandates-heading" className="text-2xl font-semibold text-accent-deep">
                Mandate Experience
              </h2>
              <p className="mt-2 text-sm text-slate-700 sm:text-base">
                Experience across IPO campaigns, investor relations programmes, corporate exercises, media engagement,
                and capital market events.
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {mandateTypes.map((mandate) => (
                  <article key={mandate.title} className="rounded-lg border border-slate-200 bg-white/95 px-4 py-3.5">
                    <div className="mb-2 h-1.5 w-8 rounded-full bg-gradient-to-r from-brand-500 to-accent-blue" />
                    <h3 className="text-[0.98rem] font-semibold font-[var(--font-body)] text-accent-deep">{mandate.title}</h3>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                      {mandate.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-500 to-accent-blue" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="sectors-heading" className="surface-panel bg-brand-50/45 p-5 sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 id="sectors-heading" className="text-2xl font-semibold text-accent-deep">
                Sector Experience
              </h2>
              <p className="text-xs uppercase tracking-[0.08em] text-slate-600">Swipe on mobile</p>
            </div>

            <div className="-mx-1 mt-4 overflow-x-auto px-1 pb-2 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
              <div className="flex min-w-max gap-3 md:min-w-0 md:grid md:grid-cols-3 md:gap-4">
                {sectorClusters.map((cluster) => (
                  <article
                    key={cluster.title}
                    className="w-[252px] snap-start rounded-lg border border-slate-200 bg-white p-4 md:w-auto"
                  >
                    <h3 className="text-sm font-semibold font-[var(--font-body)] text-accent-deep">{cluster.title}</h3>
                    <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                      {cluster.sectors.map((sector) => (
                        <li key={sector} className="rounded-md bg-slate-50 px-2.5 py-1.5">
                          {sector}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal>
          <section aria-labelledby="compliance-note-heading" className="surface-panel p-5 sm:p-6 lg:p-8">
            <h2 id="compliance-note-heading" className="text-2xl font-semibold text-accent-deep">
              Disclosure and Reference Policy
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-500 to-accent-blue" />
                <span>References subject to management approval and confidentiality considerations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-500 to-accent-blue" />
                <span>Client names, logos, and market capitalisation figures are not published on this website.</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-700">
              For mandate discussions, please <Link href="/contact" className="font-semibold text-accent-blue underline-offset-4 hover:underline">contact Aegis</Link> for an appropriate briefing format.
            </p>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <CtaBanner
        title="Need a mandate briefing relevant to your current transaction or communication cycle?"
        description="Share your context and timeline, and we can advise on the most relevant communication workstream."
        ctaLabel="Speak to Aegis"
        ctaHref="/contact"
        sectionClassName="!pt-2 !pb-5 sm:!pt-3 sm:!pb-6 lg:!pt-4 lg:!pb-7"
        variant="premium"
      />
    </>
  );
}
