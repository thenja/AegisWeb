import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";

type CtaBannerProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  sectionClassName?: string;
  variant?: "default" | "premium";
};

export function CtaBanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  sectionClassName = "",
  variant = "default"
}: CtaBannerProps) {
  if (variant === "premium") {
    return (
      <SectionWrapper className={sectionClassName}>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-panel sm:px-8 sm:py-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-brand-50/45 to-blue-50/55" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-[45%] [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)] bg-gradient-to-b from-brand-100/45 via-brand-200/28 to-accent-blue/24"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-r from-brand-500/14 via-accent-blue/14 to-transparent"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(100deg,rgba(16,52,79,0.045)_1px,transparent_1px)] [background-size:32px_32px]" />

          <div className="relative z-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-[1.65rem] font-semibold text-accent-deep sm:text-3xl">{title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">{description}</p>
            </div>
            <Link href={ctaHref} className="btn-primary w-full sm:w-auto">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className={sectionClassName}>
      <div className="surface-panel p-6 sm:p-10">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-[1.65rem] font-semibold text-accent-deep sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">{description}</p>
          </div>
          <Link href={ctaHref} className="btn-primary w-full sm:w-auto">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
