export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="w-full min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#748D92] to-[#008080] text-white py-12 px-6"
    >
      <div className="flex-grow flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h5 className="text-3xl font-bold text-[#008080]">Sylvia</h5>
            <div className="w-16 h-1 bg-[#008080] rounded-full my-3"></div>
            <p className="text-sm opacity-90 leading-relaxed">
              Versatile Virtual Assistant with 10+ years in admin, HR support,
              recruitment, scheduling, customer service, and digital content.
              Proficient in Google Workspace, Canva, and social media. Delivers
              reliable support, streamlined workflows, and clear communication
              for both remote and in-office teams.
            </p>
          </div>

          <div>
            <h5 className="text-2xl font-semibold text-[#008080]">Services</h5>
            <div className="w-12 h-1 bg-[#008080] rounded-full my-3"></div>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-white hover:underline transition">
                  Virtual Assistant
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition">
                  NGO & Community Advocacy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition">
                  Human Resource
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition">
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="text-2xl font-semibold text-[#008080]">Useful Links</h5>
            <div className="w-12 h-1 bg-[#008080] rounded-full my-3"></div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/sylvia-mutinda"
                  target="_blank"
                  className="hover:text-white hover:underline transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://folll.io/Sylvia"
                  target="_blank"
                  className="hover:text-white hover:underline transition"
                >
                  Follio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white hover:underline transition"
                >
                  Help?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 pt-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Sylvia. All Rights Reserved.
      </div>
    </footer>
  );
}
