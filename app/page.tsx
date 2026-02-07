import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Steps } from "@/components/steps";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <Steps />
    </main>
  );
}
