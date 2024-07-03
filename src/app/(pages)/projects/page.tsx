import { ProjectCardSimple } from "@/components/ui/project-card";
import { Separator } from "@/components/ui/separator";
import { fetchHygraphQuery } from "@/app/utils/fetch-graphql";
import { ProjectsPageData } from "@/app/types/data";

const getProjectsData = async (): Promise<ProjectsPageData> => {
  const query = `
query FeaturedProjectsQuery {
  featuredProjects(first: 50) {
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

  return fetchHygraphQuery(query, 0);
};

export default async function Projects() {
  const { featuredProjects } = await getProjectsData();
  return (
    <div className="py-16 flex flex-col items-center">
      <h3 className="text-4xl font-semibold text-slate-900 dark:text-slate-200">
        Meus projetos
      </h3>
      <p className="text-slate-700 dark:text-slate-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
        Aqui você pode conferir diversos projetos que realizei. Explore à
        vontade para descobrir as técnicas utilizadas, as tecnologias aplicadas
        e as funcionalidades que implementei.
      </p>

      <Separator className="mb-8 dark:bg-[#1d283a] bg-[#1d283a]/[0.1] h-[1px] p-[1px] max-w-64 md:max-w-lg mx-auto" />

      <section className="container pt-4 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-4 gap-y-6">
        {featuredProjects.map((project, i) => (
          <ProjectCardSimple key={i} project={project} />
        ))}
      </section>
    </div>
  );
}
