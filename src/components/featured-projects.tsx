import { fetchHygraphQuery } from "@/app/utils/fetch-graphql";
import ProjectCard from "./ui/project-card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const getData = async () => {
  const query = `
    query MyQuery {
  featuredProjects {
    id
    title
    shortDescription
    repository
    deploy
    cover {
      url
    }
    knowledges {
      id
      name
      iconSvg
      startDate
    }
  }
}
  `;

  return fetchHygraphQuery(query, 60);
};

export default async function FeaturedProjects() {
  const response = await getData();
  // console.log(response);
  return (
    <section className="mb-10 ">
      <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
        Projetos em destaque
      </h1>
      <div className="w-full py-5 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
        {response.featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={{
              cover: "project.cover.url",
              title: project.title,
              shortDescription: project.shortDescription,
              knowledges: project.knowledges,
              repository: project.repository,
              deploy: project.deploy,
            }}
          />
        ))}
      </div>
      <p className="flex items-center">
        <span className="text-slate-400">Se interessou?</span>
        <Button variant="link" className="inline-flex">
          Ver todos <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </p>
    </section>
  );
}
