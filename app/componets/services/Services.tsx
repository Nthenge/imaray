export default function ServicesSection() {
  const services = [
    {
      icon: "📩",
      title: "Administrative Support",
      text: "I help entrepreneurs, businesses, and NGOs stay organized by managing schedules, documents, and workflows—freeing up valuable time to focus on core priorities. I ensure smooth communication and collaboration by handling client follow-ups, professional correspondence, and stakeholder coordination that keeps teams aligned and productive",
    },
    {
      icon: "💻",
      title: "Research and Reporting",
      text: "I deliver clear, concise research and reporting that turns complex data into actionable insights—helping entrepreneurs, businesses, and NGOs make informed decisions with confidence",
    },
    {
      icon: "👥",
      title: "Human Resource Support",
      text: "I support organizations in managing their people through employee records, onboarding, recruitment assistance, and HR documentation that fosters compliance, engagement, and growth",
    },
    {
      icon: "📊",
      title: "Project & Task Management",
      text: "I provide structure and clarity to projects and data through organized tracking, accurate reporting, and workflow management that drive efficiency and informed decision-making",
    },
    {
      icon: "📊",
      title: "Light Marketing & Social Support",
      text: "I provide basic marketing and social media support—from scheduling posts to creating branded visuals and newsletters—so you can maintain a consistent online presence and engage your audience without the stress of daily content management.",
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-12 bg-gradient-to-br from-[#748D92] to-[#D3D9D4] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          My Services
        </h1>
        <div className="w-20 h-1 bg-[#008080] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Intro + Tools in two columns */}
      <div className="max-w-5xl mx-auto mb-16 bg-white/5 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-8">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Intro - right */}
          <div className="flex-1 [text-align-last:left] md:text-left space-y-6">
            <p className="text-lg leading-relaxed">
              With a Bachelor’s degree in Business Information Management and advanced training in Virtual Assistance and AI Career Essentials, I bring a unique balance of traditional office expertise and modern digital skills. Leveraging over a decade of professional experience, I deliver tailored support that streamlines operations, enhances customer experience, and helps businesses and organizations thrive in today’s digital landscape.
            </p>
          </div>

          {/* Divider (only visible on md+) */}
          <div className="hidden md:block w-px bg-white/20"></div>

          {/* Tools - left */}
          <div className="flex-1 text-sm opacity-90">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white text-lg">🛠️</span>
              <p className="font-semibold text-[#008080]">Tools & Apps I Use:</p>
            </div>
            <div className="space-y-2 text-white/90 leading-relaxed">
              <p>Microsoft 365 • Google Analytics • Google Meet • Google Workspace</p>
              <p>Airtable • Asana • Wixsite • Canva • Slack • Click-Up • Notion</p>
              <p>Convert Kit • Trello • Mailchimp • Online survey tools • Pika</p>
              <p>Gemini • Zoom • DALL-E • Pika • Canva • Calendly • Miro</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="space-y-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#008080] mt-2">
                {service.title}
              </h3>
              <p className="text-lg leading-relaxed mt-2">{service.text}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white rounded-lg border border-white/25 shadow-md transition duration-300 w-fit">
              Learn more <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
