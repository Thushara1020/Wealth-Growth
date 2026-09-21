import { GraduationCap } from "lucide-react";
import { LearningHub } from "../web/components/learning-hub";
import { PageHero } from "../web/components/page-hero";

export default function LearnPage() {
  return (
    <main className="overflow-hidden bg-[#0c0e1a] text-white">
      <PageHero eyebrow="Grow your knowledge" title="Learning Hub" description="Practical guidance to help you understand money, investing, protection, and the choices behind long-term wealth." icon={GraduationCap} />
      <LearningHub />
    </main>
  );
}
