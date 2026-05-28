import { ServiceDetailPage } from "@/components/service-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Media Relations",
  description:
    "Media relations support to help listed issuers and corporate organisations in Malaysia engage journalists effectively and maintain message consistency.",
  path: "/services/media-relations"
});

export default function MediaRelationsPage() {
  return (
    <ServiceDetailPage
      title="Media Relations"
      intro="A structured media relations approach that strengthens communication consistency while supporting timely and informed journalist engagement."
      process={[
        "Map priority media outlets and define engagement strategy.",
        "Prepare press materials and approved spokesperson messaging.",
        "Manage interview coordination and communication follow-up.",
        "Track coverage outcomes and identify recurring narrative themes."
      ]}
      capabilityGroups={[
        {
          title: "Media Engagement",
          items: [
            "Media engagement and relationship development",
            "Media interviews and media briefings",
            "Press conferences",
            "Media familiarisation tours and networking sessions"
          ]
        },
        {
          title: "Media Support",
          items: [
            "Media monitoring and perception tracking",
            "Media training for spokespeople",
            "Copywriting for media materials",
            "Translation and interpretation support where appropriate"
          ]
        }
      ]}
    />
  );
}
