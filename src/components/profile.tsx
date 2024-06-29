import { fetchHygraphQuery } from "@/app/utils/fetch-graphql";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Profile as IProfile } from "../app/types/data";

type ProfileProps = {
  profile: IProfile;
};

export default async function Profile({ profile }: ProfileProps) {
  // console.log(profile);
  return (
    <section className="mb-10">
      <Avatar className="inline-flex max-w-full w-12 h-12 mb-4">
        <AvatarImage src={profile.profilePicture.url} />
        <AvatarFallback>EM</AvatarFallback>
      </Avatar>
      <div className="mb-5 flex flex-col items-center">
        <h1
          className="relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-slate-200 dark:before:bg-slate-900
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-slate-900 dark:after:bg-slate-200 mb-1 text-2xl font-bold text-slate-900 dark:text-slate-200"
        >
          {profile.username}
        </h1>
        <p className="text-sm text-slate-700 dark:text-slate-400">
          {profile.description}
        </p>
      </div>
      <div className="flex flex-row justify-center space-x-2">
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Link
                  href="https://github.com/eduardomcb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Github</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Link
                  href="https://www.linkedin.com/in/eduardomcb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Linkedin</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Link
                  href="https://x.com/eduardomcb_dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Twitter</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {/* <Button className="mt-2" variant="secondary" asChild>
        <Link href="https://www.linkedin.com/in/eduardomcb/">CV</Link>
      </Button> */}
      {/* <Button>Meu Curriculo</Button> */}
    </section>
  );
}
