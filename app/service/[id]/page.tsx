import { services } from "../../componets/data/service";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const id = parseInt((await params).id, 10);
  const service = services.find((p) => p.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#748D92] to-[#D3D9D4]">
        <h1 className="text-2xl font-semibold">No Service</h1>
      </div>
    );
  }

  return (
    <div className="text-base md:text-xl min-h-screen bg-gradient-to-br from-[#748D92] to-[#D3D9D4] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-[#008080]">{service.title}</h1>
        <p className="text-lg opacity-90">{service.text}</p>

        {service.details?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#008080]">
              Services Included:
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              {service.details.map((item, index) => (
                <li key={index} className="text-white/90 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href="/#services"
          className="inline-flex items-center px-4 py-2 bg-[#008080] text-white rounded-lg hover:bg-[#006666] transition-colors"
        >
          ← BACK
        </Link>
      </div>
    </div>
  );
}
