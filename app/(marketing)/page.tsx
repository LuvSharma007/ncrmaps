import ContactCTASection from "@/components/ContactCTASection";
import EarlyBirdStatsSection from "@/components/EarlyBirdStatsSection";
import EndToEndSolutions from "@/components/EndToEndSolutions";
import FAQSection from "@/components/FAQSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LayoutMapsSection from "@/components/LayoutMapsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <EarlyBirdStatsSection/>
    <EndToEndSolutions/>
    <FeaturedProjects/>
    <LayoutMapsSection/>
    <WhyChooseUs/>
    <ContactCTASection/>
    <FAQSection/>
    <Footer/>
    </>
  );
}
