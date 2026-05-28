import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 ${className}`}>
      <div className="mx-auto w-full max-w-layout">{children}</div>
    </section>
  );
}
