import { ServiceDetailPage } from "@/components/service-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Investor Relations",
  description:
    "Investor relations advisory for listed issuers in Malaysia, including market updates, management messaging, and shareholder engagement workflows.",
  path: "/services/investor-relations"
});

export default function InvestorRelationsPage() {
  return (
    <ServiceDetailPage
      title="Investor Relations"
      intro="Investor communication support for listed issuers and pre-listing companies that require consistency across disclosure and engagement channels."
      process={[
        "Review current investor communication cadence and reporting obligations.",
        "Define key message priorities for results, strategy, and market developments.",
        "Plan structured engagement across institutional and retail audiences.",
        "Track response themes and advise on communication adjustments."
      ]}
      capabilityGroups={[
        {
          title: "Engagement Activities",
          items: [
            "Investor briefings",
            "Group and one-to-one meetings with fund managers and analysts",
            "Investor roadshows",
            "Fund manager and analyst familiarisation tours",
            "Investor networking sessions",
            "Investor appreciation nights"
          ]
        },
        {
          title: "IR Materials and Communication Assets",
          items: ["Investor updates", "IR presentation slides", "Corporate fact sheets", "IR website support"]
        }
      ]}
    />
  );
}
