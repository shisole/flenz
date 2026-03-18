"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const influencers = [
  {
    name: "Maria Santos",
    category: "Food",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=face",
  },
  {
    name: "Jake Rivera",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
  },
  {
    name: "Anya Cruz",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face",
  },
  {
    name: "Marco Tan",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop&crop=face",
  },
  {
    name: "Bea Lopez",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
  },
  {
    name: "Carlos Reyes",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face",
  },
  {
    name: "Sofia Lim",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face",
  },
];

const TOTAL = influencers.length;

function getCardStyle(position: number) {
  const absPos = Math.abs(position);

  if (absPos === 0) {
    return { zIndex: 10, x: 0, scale: 1, opacity: 1, blur: 0 };
  }
  if (absPos === 1) {
    return { zIndex: 8, x: position * 220, scale: 0.85, opacity: 0.6, blur: 2 };
  }
  if (absPos === 2) {
    return { zIndex: 6, x: position * 380, scale: 0.7, opacity: 0.3, blur: 4 };
  }
  return { zIndex: 1, x: position * 500, scale: 0.6, opacity: 0, blur: 8 };
}

function getRelativePosition(index: number, active: number) {
  let diff = index - active;
  if (diff > TOTAL / 2) diff -= TOTAL;
  if (diff < -TOTAL / 2) diff += TOTAL;
  return diff;
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((current) => (current + 1) % TOTAL);
    }, 3000);
  }, []);

  const next = useCallback(() => {
    setActive((current) => (current + 1) % TOTAL);
    startInterval();
  }, [startInterval]);

  const prev = useCallback(() => {
    setActive((current) => (current - 1 + TOTAL) % TOTAL);
    startInterval();
  }, [startInterval]);

  useEffect(() => {
    if (!paused) {
      startInterval();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, startInterval]);

  function handleCtaClick(role: "business" | "influencer") {
    window.dispatchEvent(new CustomEvent("flenz:select-role", { detail: role }));
  }

  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
      {/* Gradient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-primary-500/8 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">
          The Philippines&apos; Influencer Marketplace
        </p>
        <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Find the Right{" "}
          <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Influencer
          </span>{" "}
          for Your Brand
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
          Browse creator portfolios by category and location. Connect with local influencers who fit your brand.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative mt-16 flex h-[420px] items-center justify-center sm:h-[480px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {influencers.map((influencer, index) => {
          const position = getRelativePosition(index, active);
          const style = getCardStyle(position);

          return (
            <div
              key={influencer.name}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                zIndex: style.zIndex,
                transform: `translateX(${style.x}px) scale(${style.scale})`,
                opacity: style.opacity,
                filter: `blur(${style.blur}px)`,
              }}
            >
              <div
                className={cn(
                  "relative h-[360px] w-[240px] overflow-hidden rounded-3xl border shadow-2xl sm:h-[420px] sm:w-[280px]",
                  position === 0
                    ? "border-white/20 shadow-primary-500/20"
                    : "border-white/10 shadow-black/30",
                )}
              >
                <Image
                  src={influencer.image}
                  alt={influencer.name}
                  fill
                  className="object-cover"
                  sizes="280px"
                  priority={Math.abs(position) <= 1}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-heading text-base font-bold text-white sm:text-lg">{influencer.name}</p>
                  <p className="text-xs text-gray-300 sm:text-sm">{influencer.category}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Nav arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition-colors hover:bg-white/10 sm:left-8"
          aria-label="Previous"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition-colors hover:bg-white/10 sm:right-8"
          aria-label="Next"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* CTAs */}
      <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#waitlist"
          onClick={() => handleCtaClick("business")}
          className="w-full rounded-xl bg-primary-500 px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-primary-500/20 transition-all hover:bg-primary-400 hover:shadow-xl sm:w-auto"
        >
          I&apos;m a Business
        </a>
        <a
          href="#waitlist"
          onClick={() => handleCtaClick("influencer")}
          className="w-full rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
        >
          I&apos;m an Influencer
        </a>
      </div>
    </section>
  );
}
