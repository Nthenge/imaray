import { projects } from "../../componets/data/work";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}
  
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

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
        <Link
          href="/#services"
          className="inline-flex items-center px-4 py-2 bg-[#008080] text-white rounded-lg hover:bg-[#006666] transition-colors"
        >
          ← BACK
        </Link>

        <h1 className="text-4xl font-bold text-[#008080]">{project.title}</h1>

        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="rounded-lg shadow-lg object-cover"
        />

        <p className="text-lg opacity-90">{project.descriptions}</p>

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
