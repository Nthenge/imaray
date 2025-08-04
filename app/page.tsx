import Navbar from "@/app/navigation/Navbar";
import HomeSection from "./componets/home/HomeSection";
import ServicesSection from "./componets/services/Services";
import TestimonialsSection from "./componets/testimonials/Testimonials";
import FaqSection from "./componets/faq/Faq";
import ContactSection from "./componets/contact/Contact";
import FooterSection from "./componets/footer/Footer";
import WorkSection from "./work/worksectin";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <FooterSection/>
    </main>
  );
}
