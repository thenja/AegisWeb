import { ServiceDetailPage } from "@/components/service-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "IPO Communications",
  description:
    "IPO communications advisory for Malaysian listing candidates, from equity narrative preparation through roadshow communication and post-listing continuity.",
  path: "/services/ipo-communications"
});

export default function IpoCommunicationsPage() {
  return (
    <ServiceDetailPage
      title="IPO Communications"
      intro="Support for companies preparing to list, with focus on communication readiness, stakeholder confidence, and process discipline through key listing milestones."
      process={[
        "Assess listing timeline, communication priorities, and approval pathways.",
        "Develop core narrative, management talking points, and briefing materials.",
        "Coordinate communication outputs around prospectus and roadshow phases, with disclosure discipline.",
        "Support post-listing communication continuity for investors and media."
      ]}
      capabilities={[
        "Listing storyline and equity narrative structuring",
        "Management briefing packs and Q&A support",
        "Roadshow communication planning",
        "Communication support for listing milestones and public updates"
      ]}
    />
  );
}
