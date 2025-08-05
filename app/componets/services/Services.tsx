import Image from "next/image";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-12  bg-[var(--background-gradient)] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          My Services
        </h1>
        <div className="w-20 h-1 bg-[#EFA48B] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 bg-white/5 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-8">
        <p className="text-lg leading-relaxed">
          My services range from virtual and administrative assistance to
          creative and strategic support for individuals, entrepreneurs, and
          businesses. I specialize in streamlining workflows, managing projects,
          and handling day-to-day operations with precision and care.
        </p>
      </div>

      {/* Services */}
      <div className="space-y-20 max-w-6xl mx-auto">
        {[
          {
            icon: "📩",
            title: "Virtual Assistance",
            text: "Remote support for tasks including scheduling, email management, and customer service — helping clients stay productive.",
            img: "/images/services/service-1.png",
          },
          {
            icon: "💻",
            title: "NGO & Community Advocacy",
            text: "As the founder of an NGO, I empower communities through advocacy, outreach, and sustainable initiatives.",
            img: "/images/services/service-2.png",
            reverse: true,
          },
          {
            icon: "☁️",
            title: "Human Resource",
            text: "Support with recruitment, onboarding, employee records, and HR functions for a smooth workplace.",
            img: "/images/services/service-3.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              service.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className="space-y-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-8">
              <div className="text-3xl">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#EFA48B]">
                {service.title}
              </h3>
              <p className="text-lg leading-relaxed">{service.text}</p>
              <button className="px-6 py-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white rounded-lg border border-white/25 shadow-md transition duration-300">
                Learn more <span>→</span>
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-md border border-white/20 bg-white/5 backdrop-blur-md">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
