const stats = [
  { value: "500+", label: "Influencers" },
  { value: "10+", label: "Categories" },
  { value: "25+", label: "Cities" },
  { value: "Free", label: "To Get Started" },
];

export default function SocialProof() {
  return (
    <section className="border-t border-white/5 px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
