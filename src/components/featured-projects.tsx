import { fetchHygraphQuery } from "@/app/utils/fetch-graphql";
import ProjectCard from "./ui/project-card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { FeaturedProject as IFeaturedProject } from "../app/types/data";

type FeaturedProjectProps = {
  featuredProjects: IFeaturedProject[];
};

export default async function FeaturedProjects({
  featuredProjects,
}: FeaturedProjectProps) {
  return (
    <section className="mb-10">
      <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
        Projetos em destaque
      </h1>
      <div className="w-full pt-5 pb-1 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
      <p className="flex items-center">
        {/* <span className="text-slate-400">Se interessou?</span> */}
        <Button variant="link" className="inline-flex">
          Ver todos <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </p>
    </section>
  );
}
