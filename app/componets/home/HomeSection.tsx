import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="text-base min-h-screen flex items-center justify-center bg-gradient-to-br from-[#748D92] to-[#D3D9D4] text-white px-6 md:px-12"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        <div className="space-y-6 leading-1.7">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight pt-35 md:pt-0">
            <span className="block">I&apos;m Sylvia Mwelu</span>
            <span className="block text-lg md:text-xl font-light mt-2 text-gray-900 text-justify [text-align-last:left]">
              I am an Hr & Administration specialist and Certified Virtual Assistant dedicated to helping businesses streamline processes and boost productivity.
            </span>
          </h1>

          <div className="flex flex-wrap gap-4">
            <p className="text-justify [text-align-last:left]">
              I am a results-driven HR and Administrative Specialist with over 10 years of experience in executive support, virtual assistance, and program coordination. I have worked with NGO&apos;s, entrepreneurs, and businesses to streamline workflows, manage data, and support leadership, enabling them to operate efficiently and focus on growth and impact.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://folll.io/Sylvia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#008080] hover:bg-[#124E66] rounded-lg font-medium text-white transition duration-300"
            >
              <span className="ml-2">📄</span> View my resume
            </Link>
            
            <Link
              href="#contact"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg font-medium text-[#008080] transition duration-300"
            >
              Get in Touch <span className="ml-2">→</span>
            </Link>
          </div>
            
        </div>

        <div className="relative flex justify-center">
          <Image
            src="/images/arts/sylvia.jpg"
            alt="video illustration"
            width={350}
            height={350}
            quality={100}
            priority
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default HomeSection;
