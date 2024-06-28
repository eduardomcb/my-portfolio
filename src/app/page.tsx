import Header from "@/components/header";
import Knowledge from "@/components/knowledge";
import FeaturedProjects from "@/components/featured-projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="min-h-screen px-3 md:px-16 flex flex-col bg-slate-200 dark:bg-slate-900">
        <Header />
        <Separator className="mb-8 dark:bg-[#1d283a] bg-[#1d283a]/[0.1] h-[1px] p-[1px]" />
        <Knowledge />
        <Separator className="mb-8 dark:bg-[#1d283a] bg-[#1d283a]/[0.1] h-[1px] p-[1px]" />
        <FeaturedProjects />
      </div>
    </div>
  );
}
