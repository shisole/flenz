import Categories from "@/components/landing/Categories";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import SocialProof from "@/components/landing/SocialProof";
import Waitlist from "@/components/landing/Waitlist";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Categories />
      <SocialProof />
      <Waitlist />
    </>
  );
}
