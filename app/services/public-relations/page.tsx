import { ServiceDetailPage } from "@/components/service-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Public Relations",
  description:
    "Public relations support for corporate Malaysia, covering reputation stewardship, issue preparedness, and clear stakeholder communication.",
  path: "/services/public-relations"
});

export default function PublicRelationsPage() {
  return (
    <ServiceDetailPage
      title="Public Relations"
      intro="Public relations services that support reputation management, communication readiness, and structured public engagement."
      process={[
        "Define communication objectives and identify relevant stakeholder groups.",
        "Develop message hierarchy for announcements and ongoing narratives.",
        "Coordinate campaign outputs across owned and earned channels.",
        "Review media and stakeholder response to guide next communication steps."
      ]}
      capabilityGroups={[
        {
          title: "Strategic Advisory",
          items: [
            "Strategic communications consultancy",
            "IPO communications campaign support",
            "Issue and reputation communication planning",
            "Corporate communication copywriting"
          ]
        },
        {
          title: "Public Communications Execution",
          items: [
            "Press conferences and media briefings",
            "Media interviews and spokesperson preparation",
            "Media training support",
            "Translation and interpretation support where required"
          ]
        }
      ]}
    />
  );
}
