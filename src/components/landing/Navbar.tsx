"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" className="font-heading text-2xl font-bold text-white">
          Flenz
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            How It Works
          </a>
          <a href="#categories" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            Categories
          </a>
          <a
            href="#waitlist"
            className="rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
          >
            Join Waitlist
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/5 transition-all duration-200 md:hidden",
          mobileOpen ? "max-h-60" : "max-h-0 border-t-0",
        )}
      >
        <div className="flex flex-col gap-4 px-4 py-4">
          <a href="#how-it-works" className="text-sm font-medium text-gray-400" onClick={() => setMobileOpen(false)}>
            How It Works
          </a>
          <a href="#categories" className="text-sm font-medium text-gray-400" onClick={() => setMobileOpen(false)}>
            Categories
          </a>
          <a
            href="#waitlist"
            className="rounded-xl bg-primary-500 px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
