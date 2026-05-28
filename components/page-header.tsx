import { SectionWrapper } from "@/components/section-wrapper";
import { InViewReveal } from "@/components/in-view-reveal";

type PageHeaderProps = {
  title: string;
  intro: string;
};

export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <SectionWrapper className="!pt-2 !pb-2 sm:!pt-3 sm:!pb-3 lg:!pt-4 lg:!pb-4">
      <InViewReveal>
        <header className="surface-panel relative overflow-hidden p-0">
          <div className="h-1.5 w-full bg-gradient-to-r from-brand-500 via-brand-700 to-accent-blue" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(16,52,79,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,52,79,0.045)_1px,transparent_1px)] [background-size:44px_44px]"
          />
          <div className="relative p-6 sm:p-8">
            <h1 className="text-3xl font-semibold tracking-tight text-accent-deep sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">{intro}</p>
          </div>
        </header>
      </InViewReveal>
    </SectionWrapper>
  );
}
