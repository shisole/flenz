"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Role = "business" | "influencer";

export default function Waitlist() {
  const [role, setRole] = useState<Role>("business");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Listen for role selection from hero CTAs
  useEffect(() => {
    function handleRoleSelect(e: Event) {
      const customEvent = e as CustomEvent<Role>;
      setRole(customEvent.detail);
    }
    window.addEventListener("flenz:select-role", handleRoleSelect);
    return () => window.removeEventListener("flenz:select-role", handleRoleSelect);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      setSubmitted(true);
    } catch {
      // Still show success — entry is logged server-side
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className="border-t border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">Get Early Access</h2>
        <p className="mt-3 text-gray-500">
          Be the first to know when Flenz launches. Join the waitlist and help shape the platform.
        </p>

        {submitted ? (
          <div className="mt-10 animate-fade-up rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20">
              <svg className="h-7 w-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-heading text-lg font-bold text-emerald-400">You&apos;re on the list!</p>
            <p className="mt-2 text-sm text-emerald-400/70">
              We&apos;ll notify you when Flenz is ready. Thanks for your interest!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            {/* Role Toggle */}
            <div className="mx-auto flex w-fit rounded-xl bg-white/5 p-1">
              <button
                type="button"
                className={cn(
                  "rounded-lg px-6 py-2.5 text-sm font-semibold transition-all",
                  role === "business"
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-300",
                )}
                onClick={() => setRole("business")}
              >
                I&apos;m a Business
              </button>
              <button
                type="button"
                className={cn(
                  "rounded-lg px-6 py-2.5 text-sm font-semibold transition-all",
                  role === "influencer"
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-300",
                )}
                onClick={() => setRole("influencer")}
              >
                I&apos;m an Influencer
              </button>
            </div>

            {/* Email Input */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              />
              <button
                type="submit"
                disabled={submitting}
                className="relative rounded-xl bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 transition-colors hover:bg-primary-400 disabled:opacity-70"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-600">No spam. We&apos;ll only email you when we launch.</p>
          </form>
        )}
      </div>
    </section>
  );
}
