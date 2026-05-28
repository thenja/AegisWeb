export type Service = {
  slug: string;
  title: string;
  summary: string;
  link: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "ipo-communications",
    title: "IPO Communications",
    summary:
      "Structured communications support from pre-listing preparation through post-listing engagement.",
    link: "/services/ipo-communications",
    capabilities: [
      "IPO narrative development and message architecture",
      "Prospectus support and disclosure-aligned communications",
      "Roadshow and analyst briefing preparation",
      "Post-listing communication plans and investor calendar management"
    ]
  },
  {
    slug: "investor-relations",
    title: "Investor Relations",
    summary: "Market-facing communication programmes for listed issuers and pre-listing companies.",
    link: "/services/investor-relations",
    capabilities: [
      "Quarterly result communication workflows",
      "Management Q&A support and key message guidance",
      "Institutional and retail investor engagement planning",
      "Monitoring market sentiment and feedback themes"
    ]
  },
  {
    slug: "public-relations",
    title: "Public Relations",
    summary: "Reputation management and corporate communication for business milestones and issues.",
    link: "/services/public-relations",
    capabilities: [
      "Corporate announcement support",
      "Issue and risk communication planning",
      "Spokesperson preparation and media-ready narratives",
      "Integrated communication calendars across channels"
    ]
  },
  {
    slug: "media-relations",
    title: "Media Relations",
    summary: "Disciplined media engagement to support visibility and message consistency.",
    link: "/services/media-relations",
    capabilities: [
      "Media list strategy and journalist outreach",
      "Press release drafting and distribution support",
      "Interview briefing and follow-up management",
      "Media monitoring and reporting"
    ]
  },
  {
    slug: "corporate-events-launches",
    title: "Corporate Events & Launches",
    summary: "End-to-end communication support for launches, investor days, and stakeholder events.",
    link: "/services/corporate-events-launches",
    capabilities: [
      "Event message framework and communication sequencing",
      "Programme design for investor and media sessions",
      "On-site communication support",
      "Post-event reporting and message continuity plans"
    ]
  }
];
