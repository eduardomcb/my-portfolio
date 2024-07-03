import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { SquareArrowOutUpRight, Github } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Project",
  description: "Informações do projeto",
};

export default function Projects({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <div className="py-24 flex flex-col items-center">
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle>TicTacToe Compose Multiplatform</CardTitle>
          <CardDescription>
            Um elegante jogo da velha desenvolvido com Compose Multiplatform.
            Jogue no seu navegador, em dispositivos Android ou desktop,
            aproveitando a flexibilidade do Compose para uma experiência de
            usuário interativa e elegante. As funcionalidades incluem jogar
            contra a máquina, botões para troca de tema e reinício do jogo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <Badge key={index} variant="secondary" className="m-0.5">
              Next.js
            </Badge>
          ))}
        </CardContent>
      </Card>

      <div className="flex flex-row pt-4 justify-center space-x-3">
        {/* Github Button */}

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="secondary" asChild>
              <Link href="" target="_blank" rel="noreferrer">
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
            <Button asChild>
              <Link href="" target="_blank" rel="noreferrer">
                <SquareArrowOutUpRight className="mr-2 h-4 w-4" />
                Deploy
              </Link>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">
                Ver aplicação em funcionamento
              </h4>
              <p className="text-sm">
                Veja uma demonstração ao vivo deste projeto.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
