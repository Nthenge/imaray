"use client";
import { useState } from "react";
import Navbar from "@/app/navigation/Navbar";
import HomeSection from "./componets/home/HomeSection";
import ServicesSection from "./service/Services";
import TestimonialsSection from "./componets/testimonials/Testimonials";
import FaqSection from "./componets/faq/Faq";
import ContactSection from "./componets/contact/Contact";
import FooterSection from "./componets/footer/Footer";
import WorkSection from "./work/worksectin";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (  
    <div className="relative">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`transition-transform duration-300 ease-in-out relative z-20 ${
          isOpen
            ? "translate-x-2/3 scale-[0.98] shadow-[rgba(0,0,0,0.5)_-10px_0_30px]"
            : "translate-x-0 scale-100 shadow-none"
        }`}
      >
        <HomeSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}
