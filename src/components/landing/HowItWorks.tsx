const businessSteps = [
  { step: "1", title: "Browse", description: "Search influencers by category, location, and follower count." },
  { step: "2", title: "Unlock", description: "View full portfolios, rates, and contact info." },
  { step: "3", title: "Connect", description: "Reach out directly and discuss your campaign." },
  { step: "4", title: "Collab", description: "Work together and grow your brand locally." },
];

const influencerSteps = [
  { step: "1", title: "Sign Up", description: "Create your free profile in minutes." },
  { step: "2", title: "Build Portfolio", description: "Upload your best content, set your rates." },
  { step: "3", title: "Get Discovered", description: "Businesses find you through search and categories." },
  { step: "4", title: "Earn", description: "Land brand deals and grow your career." },
];

function Arrow() {
  return (
    <div className="hidden items-center sm:flex">
      <svg className="h-4 w-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-500/30 bg-primary-500/10 text-sm font-bold text-primary-400">
        {step}
      </div>
      <h4 className="mt-4 font-heading text-base font-bold text-white sm:text-lg">{title}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{description}</p>
    </div>
  );
}

function StepTrack({
  title,
  titleColor,
  steps,
}: {
  title: string;
  titleColor: string;
  steps: typeof businessSteps;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h3 className={`mb-8 text-center font-heading text-xl font-bold ${titleColor}`}>{title}</h3>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-0">
        {steps.map((s, i) => (
          <div key={s.step} className="flex items-start gap-0 sm:flex-1">
            <div className="flex-1">
              <StepCard {...s} />
            </div>
            {i < steps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">How It Works</h2>
          <p className="mt-3 text-gray-500">Simple for both sides of the marketplace.</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <StepTrack title="For Businesses" titleColor="text-primary-400" steps={businessSteps} />
          <StepTrack title="For Influencers" titleColor="text-secondary-400" steps={influencerSteps} />
        </div>
      </div>
    </section>
  );
}
