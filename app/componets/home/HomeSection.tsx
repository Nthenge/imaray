import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#748D92] to-[#D3D9D4] text-white px-6 md:px-12"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* INTRO CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight pt-20 md:pt-0">
            <span className="block">I&apos;m Sylvia</span>
            <span className="block text-lg md:text-xl font-light mt-2">
              Trained Virtual Assistant | HR & Admin Support | AI & Tech-Savvy | Remote Ready
            </span>
          </h1>
          
          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://folll.io/Sylvia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#EFA48B] hover:bg-[#e78a6d] rounded-lg font-medium text-white transition duration-300"
            >
              Documentation <span className="ml-2">📄</span>
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg font-medium text-white transition duration-300"
            >
              Get in Touch <span className="ml-2">→</span>
            </Link>
          </div>

          {/* TOOLS & APPS LIST */}
          <div className="mt-6 text-sm opacity-90">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#EFA48B]">🛠️</span>
              <p className="font-semibold text-[#EFA48B]">Tools & Apps I Use:</p>
            </div>
            
            {/* Tools in two lines */}
            <p className="leading-relaxed">
              Airtable • Asana • Wixsite • Canva • Slack • Click-Up • Notion
            </p>
            <p className="leading-relaxed">
              Convert Kit • Trello • Mailchimp • Online survey tools 
            </p>
            <p className="leading-relaxed">
              Google Analytics • Google Meet • Google Workspace • Salesforce
            </p>
          </div>

          <Link
              href="https://beingsylvia.my.canva.site/onlineportfolio-sylviamwelu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#EFA48B] hover:bg-[#e78a6d] rounded-lg font-medium text-white transition duration-300"
            >
              🌐 Web Development
            </Link>
        </div>

        {/* IMAGE / VIDEO CONTENT */}
        <div className="relative flex justify-center">
          <Image
            src="/images/arts/intro-section-illustration.png"
            alt="video illustration"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default HomeSection;
