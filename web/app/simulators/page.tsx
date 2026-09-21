import { SlidersHorizontal } from "lucide-react";
import { PageHero } from "../web/components/page-hero";
import { ScenarioSimulators } from "../web/components/scenario-simulators";

export default function SimulatorsPage() {
  return (
    <main className="overflow-hidden bg-[#0c0e1a] text-white">
      <PageHero eyebrow="Explore your choices" title="Financial Simulators" description="Test saving changes and major life events before they happen, so you can make decisions with more confidence." icon={SlidersHorizontal} />
      <ScenarioSimulators />
    </main>
  );
}
