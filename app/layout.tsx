import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Aegis Communication | Capital Markets Communications",
    template: "%s | Aegis Communication"
  },
  description:
    "Strategic communications support in Malaysia across IPO communications, investor relations, public relations, media engagement, and corporate events.",
  applicationName: "Aegis Communication"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body className="antialiased">
        <a href="#main-content" className="sr-only-focusable">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
