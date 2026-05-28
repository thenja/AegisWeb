import { CtaBanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { InViewReveal } from "@/components/in-view-reveal";
import { SectionWrapper } from "@/components/section-wrapper";
import { ServiceCard } from "@/components/service-card";
import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

const homeServices = [
  {
    title: "IPO Communications",
    summary: "Prospectus launches, investor materials, media coordination and listing visibility.",
    href: "/services/ipo-communications"
  },
  {
    title: "Investor Relations",
    summary: "Results communication, analyst engagement and investor-facing materials.",
    href: "/services/investor-relations"
  },
  {
    title: "Public Relations",
    summary: "Corporate positioning, press releases, media strategy and reputation management.",
    href: "/services/public-relations"
  },
  {
    title: "Media Relations",
    summary: "Journalist coordination, interview preparation and message consistency.",
    href: "/services/media-relations"
  },
  {
    title: "Corporate Events & Launches",
    summary: "Prospectus launches, listing ceremonies, briefings, AGMs, EGMs and stakeholder events.",
    href: "/services/corporate-events-launches"
  }
];

const glanceItems = [
  "IPO and listed-company communication support",
  "Investor, analyst and media engagement",
  "Board and management briefing preparation",
  "Capital market event execution",
  "Crisis and special situation advisory"
];

const whyItems = [
  { title: "Market-aware messaging", line: "Positioned for investors, analysts, media and stakeholders." },
  { title: "Boardroom-ready materials", line: "Structured outputs for management and governance use." },
  { title: "Investor and media engagement", line: "Planned touchpoints with communication discipline." },
  { title: "Practical execution support", line: "From strategy framing to delivery management." }
];

const trackCards = [
  "IPO Campaigns & Prospectus Launches",
  "Investor Relations & Analyst Engagement",
  "Public Relations & Media Management",
  "Corporate Exercises & Special Situations",
  "Capital Market Events & Listing Ceremonies",
  "Sector Experience Across Corporate Malaysia"
];

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Aegis Communication provides strategic investor relations, public relations, IPO communications, and media relations support for Malaysian listed issuers and IPO candidates.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <InViewReveal>
        <Hero
          eyebrow="Capital Markets Communications"
          title="Where Capital Markets Meet Communications Excellence"
          description="Strategic IR, PR and IPO communications support for Malaysian listed issuers and IPO candidates."
          highlights={[
            "Disclosure-aware communication support",
            "Board and management advisory",
            "Integrated IR, PR, media and events"
          ]}
          backgroundTextureSrc="/aegis-hero-image-2.png"
          visualSrc="/aegis-hero-image-3.png"
          primaryCta={{ label: "Speak to Aegis", href: "/contact" }}
          secondaryCta={{ label: "Explore Services", href: "/services" }}
        />
      </InViewReveal>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal delayMs={40}>
          <section aria-labelledby="credibility-heading" className="surface-panel overflow-hidden p-0">
          <div className="h-1 w-full bg-gradient-to-r from-brand-500 via-brand-700 to-accent-blue" aria-hidden="true" />
          <div className="p-4 sm:p-5">
            <h2 id="credibility-heading" className="text-[1.68rem] font-semibold text-accent-deep sm:text-[1.9rem]">
              Capabilities at a Glance
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-5">
              {glanceItems.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="mr-2 inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-500 to-accent-blue align-middle" />
                  <span className="align-middle">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal delayMs={40}>
          <section aria-labelledby="services-heading" className="relative overflow-hidden rounded-3xl p-4 sm:p-5">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.16]">
            <Image src="/aegis-hero-image-1.png" alt="" fill sizes="100vw" quality={68} className="object-cover object-center" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/92 via-white/95 to-white/98" />
          <div className="relative z-10 mb-3 flex items-center justify-between gap-4">
            <h2 id="services-heading" className="text-[1.68rem] font-semibold text-accent-deep sm:text-[1.9rem]">
              Services
            </h2>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue">
              View all services
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M4 10H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M10.5 5.5L15 10L10.5 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="relative z-10 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} title={service.title} summary={service.summary} href={service.href} />
            ))}
          </div>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal delayMs={40}>
          <section
            aria-labelledby="why-aegis-heading"
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-50/55 via-white to-white p-5 shadow-panel sm:p-6"
          >
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-0 h-24 w-24 rotate-45 rounded-lg border border-brand-200/80 bg-brand-100/50" />
          <div className="relative z-10 grid gap-4 lg:grid-cols-[0.44fr_1fr] lg:gap-5">
            <div>
              <h2 id="why-aegis-heading" className="text-[1.68rem] font-semibold text-accent-deep sm:text-[1.9rem]">
                Why Aegis
              </h2>
              <p className="mt-3 text-sm text-slate-700 sm:text-base">
                Capital market communications require more than visibility. They require accuracy, timing and trust.
              </p>
            </div>
            <div className="grid gap-2.5 md:grid-cols-2">
              {whyItems.map((item, index) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-white/96 px-3.5 py-3">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-blue px-1 text-[11px] font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold font-[var(--font-body)] text-accent-deep">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-700">{item.line}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <SectionWrapper className="!py-2 sm:!py-3 lg:!py-4">
        <InViewReveal delayMs={40}>
          <section aria-labelledby="track-heading" className="surface-panel relative overflow-hidden p-5 sm:p-6">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.14]">
            <Image src="/aegis-hero-image-2.png" alt="" fill sizes="100vw" quality={66} className="object-cover object-right-bottom" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/86" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(45deg,rgba(32,143,134,0.08)_1px,transparent_1px)] [background-size:16px_16px]"
          />
          <h2 id="track-heading" className="relative z-10 text-[1.68rem] font-semibold text-accent-deep sm:text-[1.9rem]">
            Mandate Experience
          </h2>
          <p className="relative z-10 mt-3 max-w-3xl text-sm text-slate-700 sm:text-base">
            Experience across IPO campaigns, investor relations programmes, corporate exercises, media engagement and
            capital market events.
          </p>
          <div className="relative z-10 mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            {trackCards.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white/95 px-4 py-3.5 font-medium">
                <div className="mb-2 h-1.5 w-8 rounded-full bg-gradient-to-r from-brand-500 to-accent-blue" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="relative z-10 mt-4 text-xs text-slate-600">
            Selected mandate details may be shared subject to management approval.
          </p>
          </section>
        </InViewReveal>
      </SectionWrapper>

      <InViewReveal delayMs={20}>
        <CtaBanner
          title="Preparing for an IPO, results announcement or market-facing communication?"
          description="Speak with Aegis on investor relations, media engagement and corporate communication priorities."
          ctaLabel="Speak to Aegis"
          ctaHref="/contact"
          sectionClassName="!pt-2 !pb-5 sm:!pt-3 sm:!pb-6 lg:!pt-4 lg:!pb-7"
          variant="premium"
        />
      </InViewReveal>
    </>
  );
}
