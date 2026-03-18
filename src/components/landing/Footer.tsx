export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="/" className="font-heading text-xl font-bold text-white">
            Flenz
          </a>
          <p className="max-w-md text-sm leading-relaxed text-gray-500">
            The Philippines&apos; influencer marketplace. Connecting brands with local creators.
          </p>
          <a
            href="#waitlist"
            className="rounded-xl bg-white/5 px-6 py-2.5 text-sm font-semibold text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Join the Waitlist
          </a>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-gray-700">&copy; {new Date().getFullYear()} Flenz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
