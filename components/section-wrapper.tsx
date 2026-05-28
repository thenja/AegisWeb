import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 ${className}`}>
      <div className="mx-auto w-full max-w-layout">{children}</div>
    </section>
  );
}
