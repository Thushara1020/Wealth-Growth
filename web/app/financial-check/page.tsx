import { HeartPulse } from "lucide-react";
import { DiscoveryScreens } from "../web/components/discovery-screens";
import { FinancialHealthScore } from "../web/components/financial-health-score";
import { PageHero } from "../web/components/page-hero";

export default function FinancialCheckPage() {
  return (
    <main className="overflow-hidden bg-[#0c0e1a] text-white">
      <PageHero eyebrow="Know where you stand" title="Your Financial Check" description="Measure your financial health, understand your money personality, and set goals that reflect the life you want." icon={HeartPulse} />
      <FinancialHealthScore />
      <DiscoveryScreens />
    </main>
  );
}
