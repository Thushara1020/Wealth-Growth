import { MessagesSquare } from "lucide-react";
import { AdvisorConnect } from "../web/components/advisor-connect";
import { PageHero } from "../web/components/page-hero";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#0c0e1a] text-white">
      <PageHero eyebrow="Talk to a real person" title="Connect With an Advisor" description="Ask a question, request a personal review, or book a conversation about the next step in your financial journey." icon={MessagesSquare} />
      <AdvisorConnect />
    </main>
  );
}
