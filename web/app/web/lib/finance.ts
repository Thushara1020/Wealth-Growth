export type ProjectionPoint = {
  year: number;
  value: number;
  contributions: number;
};

export function futureValue(
  payment: number,
  annualRate: number,
  compoundsPerYear: number,
  years: number,
  presentValue: number,
) {
  if (annualRate === 0) {
    return payment * compoundsPerYear * years + presentValue;
  }

  const periodicRate = annualRate / compoundsPerYear;
  const growthFactor = (1 + periodicRate) ** (compoundsPerYear * years);
  return (
    payment * ((growthFactor - 1) / periodicRate) +
    presentValue * growthFactor
  );
}

export function buildProjection(
  payment: number,
  annualRatePercent: number,
  years: number,
  presentValue: number,
): ProjectionPoint[] {
  const rate = annualRatePercent / 100;
  return Array.from({ length: years + 1 }, (_, year) => ({
    year,
    value: Math.round(futureValue(payment, rate, 12, year, presentValue)),
    contributions: Math.round(presentValue + payment * 12 * year),
  }));
}

export function formatRupees(value: number) {
  return "Rs. " + Math.round(value).toLocaleString("en-LK");
}
