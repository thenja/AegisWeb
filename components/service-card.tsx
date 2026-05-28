import Link from "next/link";

type ServiceCardProps = {
  title: string;
  summary: string;
  href: string;
};

export function ServiceCard({ title, summary, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block h-full min-h-[168px] overflow-hidden rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-panel transition duration-200 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md focus-visible:outline-none sm:px-5 sm:py-3.5"
      aria-label={`Explore service: ${title}`}
    >
      <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-400 to-accent-blue" />
      <span
        aria-hidden="true"
        className="absolute right-0 top-0 h-10 w-10 [clip-path:polygon(100%_0,0_0,100%_100%)] bg-gradient-to-bl from-brand-200/55 to-transparent"
      />
      <h3 className="pr-8 text-[15px] font-semibold font-[var(--font-body)] text-accent-deep sm:text-base">{title}</h3>
      <p className="mt-1.5 pr-8 text-sm leading-relaxed text-slate-700">{summary}</p>
      <span
        aria-hidden="true"
        className="absolute bottom-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-accent-blue opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100"
      >
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M10.5 5.5L15 10L10.5 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
