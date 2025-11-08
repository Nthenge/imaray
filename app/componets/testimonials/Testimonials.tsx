import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "I’ve had the pleasure of working with Sylvia on various projects in our construction company, and she’s been a key support across multiple areas. Her communication is clear, her work is consistently organized, and she handles every task with professionalism and reliability. Whether it’s admin support, research, or coordination, Sylvia delivers with excellence. I highly recommend her for any team that values efficiency and trustworthiness.",
      name: "Duncan Samaita",
      role: "Director, Five by Five Construction Company",
      img: "/images/testimonials/client-1.jpg",
    },
    {
      text: "Their financial insights helped us streamline operations and make informed strat Sylvia was a pleasure to work with — professional, efficient, and insightful. She delivered a well-researched, practical guide tailored to my needs as a busy professional. Her ability to simplify information into clear, actionable tips was exactly what I needed. I highly recommend her to anyone in need of research, writing, or organizational supportegic decisions. Highly recommended!",
      name: "Joyce Ruguru",
      role: "Co-founder, Joyce Muriithi Consulting",
      img: "/images/testimonials/client-2.jpg",
    },
    {
      text: "They brought our brand vision to life, and Sylvia has been instrumental in strengthening DEFRASA’s operations and digital presence. Her dedication and versatility have supported everything from website design and CRM setup to budgeting, administrative coordination, and outreach. She brings a rare mix of creativity, structure, and heart to every task. Her contributions have made a lasting impact on our mission to support individuals and families recovering from alcohol and substance abuseo life with creativity and precision. I couldn’t be more thrilled with the results.",
      name: "Dylan Leina",
      role: "Chairperson DEFRASA",
      img: "/images/testimonials/client-3.jpg",
    },
    {
      text: "From day one, their dedication and excellence were evident. I truly value their partnership and support.",
      name: "Johnson Anim",
      role: "C.E.O & Founder",
      img: "/images/testimonials/client-4.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className=" text-base min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-12 bg-gradient-to-br from-[#748D92] to-[#008080] text-white"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Testimonials
        </h1>
        <div className="w-20 h-1 bg-[#CC5500] mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-lg opacity-90 text-black">
          What my clients are saying...
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
          >
            <p className="text-base leading-relaxed italic mb-4 line-clamp-3">
              “{t.text}”
            </p>
            <div className="text-[#008080] text-lg mb-3">⭐⭐⭐⭐⭐</div>

            <div className="flex items-center gap-4 mt-4">
              <Image
                src={t.img}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full border border-white/30 shadow-sm object-cover"
              />
              <div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-sm opacity-80">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
