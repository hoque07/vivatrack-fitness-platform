export type V3PricingPlan = {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  bestFor: string;
  cta: string;
  badge?: string;
  contactOnly?: boolean;
  features: string[];
  limits: string[];
};

export const v3PricingPlans: V3PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    billing: "Free forever",
    description: "Basic fitness tracking for new users.",
    bestFor: "Beginners who want to explore VivaTrack.",
    cta: "Start Free",
    features: [
      "Basic workout program preview",
      "Community access demo",
      "Simple progress overview",
      "Starter dashboard view"
    ],
    limits: [
      "Limited program access",
      "No advanced analytics",
      "No coach support"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9",
    billing: "per month",
    description: "Advanced tracking, programs, and analytics.",
    bestFor: "Active users who want a complete fitness platform.",
    cta: "Choose Pro",
    badge: "Most Popular",
    features: [
      "Unlimited workout program access",
      "Advanced progress analytics",
      "Program selection and tracking",
      "Premium community features",
      "Goal-based dashboard"
    ],
    limits: [
      "Demo checkout only in V3",
      "No real payment processing yet"
    ]
  },
  {
    id: "coach",
    name: "Coach",
    price: "$29",
    billing: "per month",
    description: "Personalized support and guided fitness planning.",
    bestFor: "Users who want premium coaching support.",
    cta: "Contact Coach",
    badge: "Premium",
    contactOnly: true,
    features: [
      "Everything in Pro",
      "Personalized training plan",
      "Weekly progress review",
      "Coach support request",
      "Priority assistance"
    ],
    limits: [
      "Coach contact is a demo flow",
      "Payment integration can be added later"
    ]
  }
];

export function getPlanById(id: string | undefined | null) {
  return v3PricingPlans.find((plan) => plan.id === id);
}