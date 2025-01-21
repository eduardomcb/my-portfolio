import { ReactNode } from "react";
import { Card } from "./card";
import CMSIcon from "./cms-icon";
import { Knowledge as IKnowledge } from "../../app/types/data";

type KnownTechProps = {
  tech: IKnowledge;
};

export default function KnowTech({ tech }: KnownTechProps) {
  return (
    <Card className="h-24 p-4 flex flex-col sm:flex-row items-center">
      <div className="flex-grow text-slate-900 dark:text-slate-200 text-center sm:text-left">
        <p className="font-medium">{tech.name}</p>
      </div>
      <div className="flex items-center justify-center h-full mt-2 sm:mt-0">
        <CMSIcon icon={tech.iconSvg} />
      </div>
    </Card>
  );
}
