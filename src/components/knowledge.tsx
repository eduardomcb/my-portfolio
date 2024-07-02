import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import KnowTech from "./ui/know-tech";
import { Knowledge as IKnowledge } from "../app/types/data";

type KnowledgeProps = {
  knowledges: IKnowledge[];
};

export default async function Knowledge({ knowledges }: KnowledgeProps) {
  return (
    <section className="mb-10">
      <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
        Conhecimentos
      </h1>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3 mt-5 pb-1">
        {knowledges?.map((tech) => (
          <KnowTech key={tech.name} tech={tech} />
        ))}
      </div>

      <p className="flex items-center">
        <Button variant="link">
          Ver todos <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </p>
    </section>
  );
}
