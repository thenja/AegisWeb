import { ServiceDetailPage } from "@/components/service-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Corporate Events & Launches",
  description:
    "Corporate event and launch communication support in Malaysia, from planning to live execution and post-event reporting.",
  path: "/services/corporate-events-launches"
});

export default function CorporateEventsLaunchesPage() {
  return (
    <ServiceDetailPage
      title="Corporate Events & Launches"
      intro="Communication support for launches, investor sessions, and corporate events where timing, stakeholder management, and message discipline matter."
      process={[
        "Define event purpose, audience profile, and key communication outcomes.",
        "Develop integrated event communication timelines and supporting assets.",
        "Coordinate live-day communication workflows with relevant teams.",
        "Provide post-event communication wrap-up and continuity planning."
      ]}
      capabilityGroups={[
        {
          title: "Capital Market Event Formats",
          items: [
            "Underwriting agreement signing ceremonies",
            "Prospectus launches",
            "Listing ceremonies",
            "Annual General Meetings",
            "Extraordinary General Meetings"
          ]
        },
        {
          title: "Corporate and Stakeholder Events",
          items: [
            "Product launches and product briefings",
            "Signing ceremonies",
            "Fund manager and investor networking sessions",
            "Appreciation dinners",
            "Familiarisation trips"
          ]
        }
      ]}
    />
  );
}
