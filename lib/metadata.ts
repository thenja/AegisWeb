import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: MetadataInput): Metadata {
  const url = `${siteConfig.domain}${path}`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: `${siteConfig.domain}/aegis-logo.png`,
          width: 1365,
          height: 541,
          alt: "Aegis Communication logo"
        }
      ]
    },
    alternates: {
      canonical: url
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
