import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../componets/data/work";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="min-h-screen py-20 px-6 md:px-12 bg-[var(--background-gradient)] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#EFA48B]">
            My Work
          </h1>
          <div className="w-20 h-1 bg-[#EFA48B] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20 hover:scale-105 transition-transform duration-300"
              style={{maxWidth: "100%"}}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg shadow-md mb-4 object-cover h-60 w-full max-w-full"
              />
              <h3 className="text-2xl font-semibold text-[#EFA48B] mb-3 group-hover:text-[#ef8f6f] transition">
                {project.title}
              </h3>
              <p className="text-sm opacity-90">{project.descriptions}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
