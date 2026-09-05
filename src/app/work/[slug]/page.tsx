import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { Specs } from "@/components/Sections";

// Pre-renders every project at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="detail">
      <div className="wrap">
        <Link href="/#work" className="back">
          Back to work
        </Link>

        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>

        <div className="prose">
          {project.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <Specs specs={project.specs} />

        {project.detail?.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}</h2>
            <div className="prose">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        <p className="links">
          {project.liveUrl && (
            <a href={project.liveUrl} rel="noopener">
              Live site
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} rel="noopener">
              Source
            </a>
          )}
          {project.privateNote && <span className="muted">{project.privateNote}</span>}
        </p>
      </div>
    </article>
  );
}
