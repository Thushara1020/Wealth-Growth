import { Route } from "lucide-react";
import { PageHero } from "../web/components/page-hero";
import { ProposalReport } from "../web/components/proposal-report";
import { WealthAnalytics } from "../web/components/wealth-analytics";
import { WealthProjections } from "../web/components/wealth-projections";

export default function WealthPlanPage() {
  return (
    <main className="overflow-hidden bg-[#0c0e1a] text-white">
      <PageHero eyebrow="See the road ahead" title="Build Your Wealth Plan" description="Project your future, review your strategy, and turn the numbers into a practical personal proposal." icon={Route} />
      <WealthProjections />
      <WealthAnalytics />
      <ProposalReport />
    </main>
  );
}
