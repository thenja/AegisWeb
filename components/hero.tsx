import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";

type HeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  highlights?: string[];
  backgroundTextureSrc?: string;
  visualSrc?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({
  title,
  description,
  eyebrow,
  highlights,
  backgroundTextureSrc,
  visualSrc,
  primaryCta,
  secondaryCta
}: HeroProps) {
  return (
    <SectionWrapper className="!pt-2 !pb-2 sm:!pt-3 sm:!pb-3 lg:!pt-4 lg:!pb-4">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-panel sm:p-6 lg:p-8">
        {backgroundTextureSrc ? (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-30">
            <Image src={backgroundTextureSrc} alt="" fill sizes="(max-width: 1280px) 100vw, 1200px" quality={72} className="object-cover" priority />
          </div>
        ) : null}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(16,52,79,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,52,79,0.045)_1px,transparent_1px)] [background-size:44px_44px]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rotate-[18deg] rounded-[2.4rem] bg-gradient-to-br from-brand-300/45 to-accent-blue/40" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-16 top-14 h-48 w-48 [clip-path:polygon(50%_0,0_100%,100%_100%)] bg-gradient-to-t from-brand-300/30 to-accent-blue/35"
        />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-r from-brand-500/14 via-accent-blue/10 to-transparent" />

        <div className="relative z-10 grid gap-2 lg:grid-cols-[1fr_0.48fr] lg:items-stretch">
          <div>
            {eyebrow ? (
              <p className="motion-enter mb-1 text-[10px] font-semibold uppercase tracking-[0.11em] text-brand-700 sm:text-sm">{eyebrow}</p>
            ) : null}
            <h1 className="motion-enter motion-delay-1 max-w-3xl text-[1.95rem] font-semibold leading-[1.06] tracking-tight text-accent-deep sm:text-[2.75rem] lg:text-5xl">{title}</h1>
            <p className="motion-enter motion-delay-2 mt-2 max-w-2xl text-[1rem] leading-relaxed text-slate-700 sm:text-[1.06rem] lg:text-lg">{description}</p>
            {(primaryCta || secondaryCta) && (
              <div className="motion-enter motion-delay-3 mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:flex sm:flex-wrap sm:gap-3">
                {primaryCta ? (
                  <Link href={primaryCta.href} className="btn-primary w-full text-center sm:w-auto">
                    {primaryCta.label}
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link href={secondaryCta.href} className="btn-secondary w-full text-center sm:w-auto">
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            )}
            {highlights?.length ? (
              <div className="mt-2.5 sm:hidden">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.09em] text-brand-700">Strategic Focus</p>
                <ul className="grid gap-1 text-[0.88rem] leading-snug text-slate-700">
                  {highlights.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-1.5 rounded-md bg-slate-50/85 px-2.5 py-1.5">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-500/90 to-accent-blue/90" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <aside aria-label="Key advisory strengths" className="motion-enter motion-delay-2 relative hidden min-h-[220px] overflow-hidden rounded-2xl border border-brand-100 bg-white/88 sm:block sm:min-h-[280px]">
            {visualSrc ? (
              <div aria-hidden="true" className="hero-visual-drift pointer-events-none absolute inset-0 opacity-[0.68]">
                <Image
                  src={visualSrc}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  quality={72}
                  className="object-cover object-center"
                />
              </div>
            ) : null}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/84 via-white/58 to-white/24" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 [clip-path:polygon(100%_0,0_100%,100%_100%)] bg-gradient-to-tr from-brand-500/45 to-accent-blue/50"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-r from-brand-300/20 via-accent-blue/16 to-transparent"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 [background:linear-gradient(130deg,transparent_0%,transparent_62%,rgba(29,150,180,0.14)_78%,rgba(30,115,190,0.24)_100%)]" />

            {highlights?.length ? (
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/45 bg-white/52 px-4 py-3 backdrop-blur-[2px] sm:bottom-5 sm:left-5 sm:right-5 sm:px-5">
                <ul className="space-y-1.5">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-500/90 to-accent-blue/90" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </SectionWrapper>
  );
}
