import Link from "next/link";
import { services } from "../componets/data/service";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className=" text-base min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-12 bg-gradient-to-br from-[#748D92] to-[#008080] text-white"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          My Services
        </h1>
        <div className="w-20 h-1 bg-[#CC5500] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto mb-16 bg-white/5 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 [text-align-last:left] md:text-left space-y-6">
            <p className="text-lg leading-relaxed">
              With a Bachelor’s degree in Business Information Management and advanced training in Virtual Assistance and AI Career Essentials, I bring a unique balance of traditional office expertise and modern digital skills. Leveraging over a decade of professional experience, I deliver tailored support that streamlines operations, enhances customer experience, and helps businesses and organizations thrive in today’s digital landscape.
            </p>
          </div>

          <div className="hidden md:block w-px bg-white/20"></div>

          <div className="flex-1 text-sm opacity-90">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white text-lg">🛠️</span>
              <p className="font-semibold text-[#008080]">Tools & Apps I Use:</p>
            </div>
            <div className="text-white/90 leading-relaxed">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 list-none list-inside">
                <li className="text-[#fff]">Microsoft 365</li>
                <li className="text-[#fff]">Google Analytics</li>
                <li className="text-[#fff]">Google Meet</li>
                <li className="text-[#fff]">Google Workspace</li>
                <li className="text-[#fff]">Airtable</li>
                <li className="text-[#fff]">Asana</li>
                <li className="text-[#fff]">Wixsite</li>
                <li className="text-[#fff]">Canva</li>
                <li className="text-[#fff]">Slack</li>
                <li className="text-[#fff]">Click-Up</li>
                <li className="text-[#fff]">Notion</li>
                <li className="text-[#fff]">Convert Kit</li>
                <li className="text-[#fff]">Trello</li>
                <li className="text-[#fff]">Mailchimp</li>
                <li className="text-[#fff]">Online survey tools</li>
                {/* <li className="text-[#008080]">Pika</li>
                <li className="text-[#008080]">Gemini</li>
                <li className="text-[#008080]">Zoom</li>
                <li className="text-[#008080]">DALL-E</li>
                <li className="text-[#008080]">Calendly</li>
                <li className="text-[#008080]">Miro</li> */}
              </ul>
            </div>



          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {services.map((service) => (
          <div
            key={service.id}
            className="space-y-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[black] mt-2 ">
                {service.title}
              </h3>
              <p className="text-lg leading-relaxed mt-2 line-clamp-3">{service.text}</p>
            </div>

            <Link
              href={`/service/${service.id}`}
              className="mt-4 px-4 py-2 bg-[#CD7F32] hover:bg-[#CC5500] backdrop-blur-md text-white rounded-lg border border-white/25 shadow-md transition duration-300 w-fit"
            >
              Learn more <span>→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
