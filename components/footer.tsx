import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-slate-200 bg-white text-slate-800">
      <div className="h-1 w-full bg-gradient-to-r from-brand-500 via-brand-700 to-accent-blue" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-layout gap-10 px-6 py-12 sm:px-8 lg:grid-cols-3 lg:px-10">
        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="text-lg font-semibold">
            Contact
          </h2>
          <p className="mt-4 text-sm font-semibold text-accent-deep">AEGIS COMMUNICATION SDN BHD</p>
          <address className="mt-2 not-italic text-sm leading-relaxed text-slate-700">
            {siteConfig.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-2 text-sm text-slate-700">
            <a href={`mailto:${siteConfig.email}`} className="underline-offset-4 hover:underline">
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-700">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="underline-offset-4 hover:underline">
              {siteConfig.phone}
            </a>
          </p>
        </section>
        <section aria-labelledby="footer-links">
          <h2 id="footer-links" className="text-lg font-semibold">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about-aegis" className="underline-offset-4 hover:underline">
                About Aegis
              </Link>
            </li>
            <li>
              <Link href="/services" className="underline-offset-4 hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/track-record" className="underline-offset-4 hover:underline">
                Track Record
              </Link>
            </li>
            <li>
              <Link href="/contact" className="underline-offset-4 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </section>
        <section aria-labelledby="footer-note">
          <h2 id="footer-note" className="text-lg font-semibold">
            AEGIS COMMUNICATION SDN BHD
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            Communications counsel for listed issuers and growth companies across investor relations, public relations,
            media engagement, and corporate events.
          </p>
        </section>
      </div>
      <div className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-600 sm:px-8 lg:px-10">
        <p>? {year} AEGIS COMMUNICATION SDN BHD. All rights reserved.</p>
      </div>
    </footer>
  );
}
