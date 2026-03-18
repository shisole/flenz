import { cn } from "@/lib/utils";

const categories = [
  { name: "Food", emoji: "\ud83c\udf5c", popular: true },
  { name: "Fitness", emoji: "\ud83d\udcaa", popular: true },
  { name: "Beauty", emoji: "\ud83d\udc84", popular: true },
  { name: "Travel", emoji: "\u2708\ufe0f", popular: false },
  { name: "Tech", emoji: "\ud83d\udcf1", popular: false },
  { name: "Lifestyle", emoji: "\u2728", popular: true },
  { name: "Fashion", emoji: "\ud83d\udc57", popular: false },
  { name: "Gaming", emoji: "\ud83c\udfae", popular: false },
  { name: "Parenting", emoji: "\ud83d\udc76", popular: false },
  { name: "Pets", emoji: "\ud83d\udc36", popular: false },
];

export default function Categories() {
  return (
    <section id="categories" className="border-t border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">Browse by Category</h2>
          <p className="mt-3 text-gray-500">Find creators in the niche that fits your brand.</p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={cn(
                "relative flex items-center gap-2.5 rounded-2xl border px-6 py-3.5 transition-all",
                cat.popular
                  ? "border-primary-500/30 bg-primary-500/10 hover:border-primary-500/50 hover:bg-primary-500/15"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10",
              )}
            >
              {cat.popular && (
                <span className="absolute -right-1 -top-1 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
                </span>
              )}
              <span className="text-2xl" role="img" aria-label={cat.name}>
                {cat.emoji}
              </span>
              <span className={cn("text-sm font-semibold", cat.popular ? "text-white" : "text-gray-300")}>
                {cat.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-600">
          <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-primary-500" />
          Trending categories
        </p>
      </div>
    </section>
  );
}
