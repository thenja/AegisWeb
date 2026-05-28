"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-aegis" },
  { label: "Services", href: "/services" },
  { label: "Track Record", href: "/track-record" },
  { label: "Contact", href: "/contact" }
];

const serviceNavigation = [
  { label: "IPO Communications", href: "/services/ipo-communications" },
  { label: "Investor Relations", href: "/services/investor-relations" },
  { label: "Public Relations", href: "/services/public-relations" },
  { label: "Media Relations", href: "/services/media-relations" },
  { label: "Corporate Events & Launches", href: "/services/corporate-events-launches" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setDesktopServicesOpen(false);
        setMobileServicesOpen(false);
      }
    }

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-layout items-center justify-between px-4 py-1.5 sm:px-8 sm:py-2 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Aegis Communication home">
          <Image
            src="/aegis-logo.png"
            alt="Aegis Communication logo"
            width={168}
            height={64}
            sizes="(max-width: 640px) 108px, 168px"
            className="w-[108px] sm:w-[140px] lg:w-[168px]"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {mainNavigation.map((item) => {
            if (item.label !== "Services") {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition hover:text-accent-blue ${
                    active
                      ? "text-accent-blue after:block after:h-0.5 after:w-full after:bg-accent-blue after:content-['']"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const servicesActive = pathname.startsWith("/services");
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={item.href}
                    aria-current={servicesActive ? "page" : undefined}
                    className={`text-sm font-medium transition hover:text-accent-blue ${
                      servicesActive
                        ? "text-accent-blue after:block after:h-0.5 after:w-full after:bg-accent-blue after:content-['']"
                        : "text-slate-700"
                    }`}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    className="rounded px-1 text-slate-700"
                    aria-expanded={desktopServicesOpen}
                    aria-controls="desktop-services-menu"
                    aria-label="Toggle services menu"
                    onClick={() => setDesktopServicesOpen((prev) => !prev)}
                    onFocus={() => setDesktopServicesOpen(true)}
                  >
                    <svg viewBox="0 0 20 20" className={`h-4 w-4 transition ${desktopServicesOpen ? "rotate-180" : ""}`} fill="none" aria-hidden="true">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                {desktopServicesOpen ? (
                  <div className="absolute left-0 top-full z-50 w-64 pt-2">
                    <ul
                      id="desktop-services-menu"
                      className="dropdown-enter rounded-xl border border-slate-200 bg-white p-2 shadow-panel"
                    >
                      {serviceNavigation.map((serviceItem) => {
                        const active = pathname === serviceItem.href;
                        return (
                          <li key={serviceItem.href}>
                            <Link
                              href={serviceItem.href}
                              aria-current={active ? "page" : undefined}
                              className={`block rounded-md px-3 py-2 text-sm ${
                                active ? "bg-brand-50 font-semibold text-accent-blue" : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              {serviceItem.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
        <button
          type="button"
          className="rounded-md border border-slate-300 p-2.5 text-slate-800 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span aria-hidden="true" className="block h-0.5 w-5 bg-current" />
          <span aria-hidden="true" className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span aria-hidden="true" className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-menu"
          className="max-h-[74vh] overflow-y-auto border-t border-slate-200 bg-white px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-2">
            {mainNavigation.map((item) => {
              if (item.label === "Services") {
                const servicesActive = pathname.startsWith("/services");
                return (
                  <li key={item.href} className="rounded-md border border-slate-200">
                    <div className="flex items-center justify-between px-2 py-1.5">
                      <Link
                        href={item.href}
                        aria-current={servicesActive ? "page" : undefined}
                        className={`block rounded-md px-2 py-1.5 text-sm ${
                          servicesActive ? "font-semibold text-accent-blue" : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        className="rounded px-2 py-1 text-sm text-slate-700"
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-menu"
                        aria-label="Toggle service links"
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className={`h-4 w-4 transition ${mobileServicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    {mobileServicesOpen ? (
                      <ul id="mobile-services-menu" className="space-y-1 border-t border-slate-200 px-3 py-2">
                        {serviceNavigation.map((serviceItem) => {
                          const active = pathname === serviceItem.href;
                          return (
                            <li key={serviceItem.href}>
                              <Link
                                href={serviceItem.href}
                                aria-current={active ? "page" : undefined}
                                className={`block rounded-md px-2 py-1.5 text-sm ${
                                  active ? "bg-brand-50 font-semibold text-accent-blue" : "text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                {serviceItem.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              }

              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-2 py-2.5 text-sm ${
                      active ? "bg-brand-50 font-semibold text-accent-blue" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
