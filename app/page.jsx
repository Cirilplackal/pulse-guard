import { ContactUs } from "./components/ContactUs";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { FeatureAndPricing,  } from "./components/FeatureAndPricing";
import { JoinNow } from "./components/JoinNow";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <FeatureAndPricing />
      <Testimonials />
      <ContactUs />
      <JoinNow />
      <Footer />
    </div>
  );
}
