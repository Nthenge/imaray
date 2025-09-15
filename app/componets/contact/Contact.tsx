"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const res = await fetch('/.netlify/functions/sendForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Server Response:", data);

    setStatus("Sent ✅");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  } catch (err) {
    console.error("Form submission error:", err);
    setStatus("Not Sent ❌");
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="text-base md:text-xl min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-[#748D92] to-[#D3D9D4] text-white overflow-hidden w-full"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center overflow-hidden">
        
        <div className="space-y-6 mt-25">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Let&apos;s Connect
          </h1>
          <div className="w-20 h-1 bg-[#008080] rounded-full"></div>
          <p className="opacity-90 leading-relaxed">
            I&apos;d love to hear about your goals, ideas, or vision — let’s turn
            great conversations into meaningful results.
          </p>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg space-y-4">
            <h4 className="text-xl font-semibold">Excellence You Can Rely On</h4>
            <p className="opacity-85">
              Have a goal? I have the tools and experience to help you reach it.
              Let&apos;s connect and turn your ideas into impact.
            </p>
            <h3 className="text-lg font-medium mt-4">What will be the next step?</h3>
            <ul className="list-disc list-inside space-y-1 text-sm opacity-90">
              <li>We&apos;ll prepare the proposal.</li>
              <li>We&apos;ll discuss it together.</li>
              <li>Let&apos;s start the discussion.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-8" >
          <h6 className="mb-6 text-lg font-medium text-[#008080]">
            Be as detailed as you can
          </h6>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-2 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-[#EFA48B] transition"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-2 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-[#EFA48B] transition"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-[#EFA48B] transition"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#EFA48B] transition"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[#008080] hover:bg-[#124E66] rounded-lg text-white font-medium shadow-lg transition-transform transform hover:scale-[1.02] resize-none"
            >
              {status || "Submit 📩"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
