import Image from "next/image";
import Link from "next/link";
import { projects } from "../../componets/data/work";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#748D92] to-[#D3D9D4]">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#748D92] to-[#D3D9D4] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back button */}
        <Link href="/#work" className="text-[#EFA48B] hover:underline">
          ← Back to Work
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-[#EFA48B]">{project.title}</h1>

        {/* Image */}
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="rounded-lg shadow-lg object-cover"
        />

        {/* Descriptions */}
        <p className="text-lg opacity-90 whitespace-pre-line">
          {project.descriptions}
        </p>

        {/* External Link (if available) */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#EFA48B] text-[#171717] rounded-lg font-semibold hover:bg-[#ef8f6f] transition"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
