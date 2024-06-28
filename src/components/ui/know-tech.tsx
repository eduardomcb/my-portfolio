import { getRelativeTimeString } from "@/app/utils/get-relative-time";
import { ReactNode } from "react";
import { Card } from "./card";
import CMSIcon from './cms-icon';

type KnownTechProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startDate: string;
  };
};

export default function KnowTech({ tech }: KnownTechProps) {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há", "");

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between text-slate-900 dark:text-slate-200">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.icon}/>
      </div>
      <span>{relativeTime} de experiência</span>
    </Card>
  );
}
