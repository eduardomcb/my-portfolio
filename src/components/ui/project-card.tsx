"use client";
import Image from "next/image";
import { Card, CardTitle, CardDescription } from "./card";
import { Badge } from "./badge";
import { Button } from "@/components/ui/button";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { FeaturedProject as IFeaturedProject } from "../../app/types/data";

type ProjectCardProps = {
  project: IFeaturedProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-auto p-4">
      <div className="flex flex-col sm:flex-row">
        <div className="h-48 overflow-hidden flex justify-center">
          <Image
            width={340}
            height={200}
            className="h-full rounded-lg"
            alt={`Thumbnail do projeto ${project.title}`}
            src={project.cover.url}
            unoptimized
          />
        </div>

        <div className="flex-1 flex flex-col px-4 py-1">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="my-auto line-clamp-3">
            {project.shortDescription}
          </CardDescription>

          <span>
            {project.knowledges.map((knowledge) => (
              <Badge key={knowledge.name} variant="secondary" className="m-0.5">
                {knowledge.name}
              </Badge>
            ))}
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row pt-4 justify-center space-x-0 sm:space-x-3">
        {/* Github Button */}

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="secondary" asChild>
              <Link href={project.repository} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Link>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Ver código no GitHub</h4>
              <p className="text-sm">
                Acesse o repositório completo deste projeto no GitHub.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Deploy Button */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              asChild
              className={!project.deploy ? "cursor-not-allowed opacity-50" : ""}
            >
              <Link
                href={project.deploy || ""}
                target="_blank"
                rel="noreferrer"
              >
                <SquareArrowOutUpRight className="mr-2 h-4 w-4" />
                Deploy
              </Link>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">
                {project.deploy
                  ? "Ver aplicação em funcionamento"
                  : "Deploy não disponível"}
              </h4>
              <p className="text-sm">
                {project.deploy
                  ? "Veja uma demonstração ao vivo deste projeto."
                  : "Nenhuma demonstração ao vivo disponível no momento."}
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </Card>
  );
};

const ProjectCardSimple = ({ project }: ProjectCardProps) => {
  return (
    <Card className="max-h-[456px] w-auto p-4">
      <div className="flex flex-col">
        <div className="h-auto w-full overflow-hidden">
          <Image
            width={340}
            height={200}
            className="w-full rounded-lg"
            alt={`Thumbnail do projeto ${project.title}`}
            src={project.cover.url}
            unoptimized
          />
        </div>

        <div className="flex-1 flex flex-col pt-4 space-y-2">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="line-clamp-6">
            {project.shortDescription}
          </CardDescription>

          <span className="w-full">
            {project.knowledges.map((knowledge) => (
              <Badge key={knowledge.name} variant="secondary" className="m-0.5">
                {knowledge.name}
              </Badge>
            ))}
          </span>
        </div>
      </div>
    </Card>
  );
};

export { ProjectCard, ProjectCardSimple };
