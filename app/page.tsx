import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import GradientButton from "@/components/ui/GradientButton";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB]">
      <Navbar />

      <Hero />

      <div className="flex justify-center pb-20">
        <GradientButton>
          Get Started
        </GradientButton>
      </div>
    </main>
  );
}
