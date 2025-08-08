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
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight pt-35 md:pt-0">
            <span className="block">I&apos;m Sylvia</span>
            <span className="block text-lg md:text-xl font-light mt-2">
              I am an Hr & Administration specialist. <br/>
              Multi-skilled Virtual Assistant & Customer Relations Specialist. <br/>
              I'm passionate about streamlining Processes & Productivity.
            </span>
          </h1>

          {/* TOOLS & APPS LIST */}
          <div className="mt-6 text-sm opacity-90">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white">🛠️</span>
              <p className="font-semibold text-[#008080]">Tools & Apps I Use:</p>
            </div>
            
            {/* Tools in two lines */}
            <p className="leading-relaxed">
              Microsoft 365 • Google Analytics • Google Meet • Google Workspace 
            </p>
            <p className="leading-relaxed">
              Airtable • Asana • Wixsite • Canva • Slack • Click-Up • Notion
            </p>
            <p className="leading-relaxed">
              Convert Kit • Trello • Mailchimp • Online survey tools • Pika
            </p>
            <p className="leading-relaxed">
              Gemini • Zoom • DALL-E • Pika • Canva • Calendly • Miro
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://folll.io/Sylvia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#008080] hover:bg-[#124E66] rounded-lg font-medium text-white transition duration-300"
            >
              <span className="ml-2">📄</span> Documentation 
            </Link>

            <Link
              href="https://beingsylvia.my.canva.site/onlineportfolio-sylviamwelu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#008080] hover:bg-[#124E66] rounded-lg font-medium text-white transition duration-300"
            >
              🌐 Web Dev
            </Link>
            
          </div>
            <Link
              href="#contact"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg font-medium text-[#008080] transition duration-300"
            >
              Get in Touch <span className="ml-2">→</span>
            </Link>
        </div>

        {/* IMAGE / VIDEO CONTENT */}
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
