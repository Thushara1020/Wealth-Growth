"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type OnboardingState = {
  personality: string | null;
  selectedGoals: string[];
  customGoals: string[];
  selectPersonality: (personality: string) => void;
  toggleGoal: (goal: string) => void;
  addCustomGoal: (goal: string) => void;
};

const OnboardingContext = createContext<OnboardingState | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [personality, setPersonality] = useState<string | null>(null);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [customGoals, setCustomGoals] = useState<string[]>([]);

  const value = useMemo<OnboardingState>(() => ({
    personality,
    selectedGoals,
    customGoals,
    selectPersonality: setPersonality,
    toggleGoal: (goal) => setSelectedGoals((current) =>
      current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]
    ),
    addCustomGoal: (goal) => {
      const cleanGoal = goal.trim();
      if (!cleanGoal) return;
      setCustomGoals((current) => current.includes(cleanGoal) ? current : [...current, cleanGoal]);
      setSelectedGoals((current) => current.includes(cleanGoal) ? current : [...current, cleanGoal]);
    },
  }), [personality, selectedGoals, customGoals]);

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error("useOnboarding must be used inside OnboardingProvider");
  return context;
}
