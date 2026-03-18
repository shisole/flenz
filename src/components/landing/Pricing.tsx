import { cn } from "@/lib/utils";

interface PlanProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

function PlanCard({ name, price, period, description, features, highlighted }: PlanProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border p-6 sm:p-8",
        highlighted
          ? "border-primary-500/30 bg-primary-500/10 shadow-lg shadow-primary-500/5"
          : "border-white/10 bg-white/5",
      )}
    >
      {highlighted && (
        <span className="mb-4 w-fit rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h4 className="font-heading text-lg font-bold text-white">{name}</h4>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-heading text-3xl font-extrabold text-white">{price}</span>
        {period && <span className="text-sm text-gray-500">{period}</span>}
      </div>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-400">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

const influencerPlans: PlanProps[] = [
  {
    name: "Free",
    price: "\u20b10",
    description: "Get started and build your profile.",
    features: [
      "Up to 5 portfolio items",
      "Standard search visibility",
      "Basic profile analytics",
      "Category listing",
    ],
  },
  {
    name: "Pro",
    price: "\u20b1299",
    period: "/mo",
    description: "Stand out and get more brand deals.",
    features: [
      "Unlimited portfolio items",
      "Priority search visibility",
      "Pro badge on profile",
      "Detailed analytics (clicks, saves)",
      "Featured in category pages",
    ],
    highlighted: true,
  },
];

const businessPlans: PlanProps[] = [
  {
    name: "Free",
    price: "\u20b10",
    description: "Explore the marketplace.",
    features: [
      "Browse all influencers",
      "View 3 portfolios per month",
      "See category and location",
      "Basic search filters",
    ],
  },
  {
    name: "Starter",
    price: "\u20b1499",
    period: "/mo",
    description: "For small businesses getting started.",
    features: [
      "15 profile unlocks per month",
      "Full portfolio access",
      "Contact info and rates",
      "Save up to 10 favorites",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "\u20b11,499",
    period: "/mo",
    description: "For agencies and growing brands.",
    features: [
      "Unlimited profile unlocks",
      "Full portfolio access",
      "Contact info and rates",
      "Unlimited favorites",
      "Advanced search filters",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-gray-500">Plans for creators and businesses of every size.</p>
        </div>

        {/* Influencer Plans */}
        <div className="mt-16">
          <h3 className="mb-6 text-center font-heading text-xl font-bold text-secondary-400">For Influencers</h3>
          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            {influencerPlans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>

        {/* Business Plans */}
        <div className="mt-16">
          <h3 className="mb-6 text-center font-heading text-xl font-bold text-primary-400">For Businesses</h3>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {businessPlans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>

        {/* Pay per unlock */}
        <div className="mt-12 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4">
            <span className="font-heading text-lg font-bold text-white">Pay-per-unlock</span>
            <span className="text-2xl font-extrabold text-primary-400">{"\u20b1"}299</span>
            <span className="text-sm text-gray-500">per profile &middot; no subscription needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
