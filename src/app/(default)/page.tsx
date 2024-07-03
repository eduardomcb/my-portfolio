import Knowledge from "@/components/knowledge";
import FeaturedProjects from "@/components/featured-projects";
import { Separator } from "@/components/ui/separator";
import { PageData } from "../types/data";

import { fetchHygraphQuery } from "@/app/utils/fetch-graphql";
import Profile from "@/components/profile";

const getPageData = async (): Promise<PageData> => {
  const query = `
  query MyProfileQuery {
  profile(where: {id: "clxvbg2k60g1x0dklwyc503ve"}) {
    id
    description
    username
    profilePicture {
      url
    }
    knowledges(first: 50) {
      id
      name
      iconSvg
      startDate
    }
    featuredProjects(first: 50) {
      id
      title
      shortDescription
      cover {
        url
      }
      repository
      deploy
      knowledges {
        id
        name
        startDate
        iconSvg
      }
    }
  }
}
`;

  return fetchHygraphQuery(query, 0);
};

export default async function Home() {
  const { profile } = await getPageData();
  return (
    <>
      <Profile profile={profile} />
      <Separator className="mb-8 dark:bg-[#1d283a] bg-[#1d283a]/[0.1] h-[1px] p-[1px] max-w-64 md:max-w-lg mx-auto" />
      <Knowledge knowledges={profile.knowledges} />
      <Separator className="mb-8 dark:bg-[#1d283a] bg-[#1d283a]/[0.1] h-[1px] p-[1px] max-w-64 md:max-w-lg mx-auto" />
      <FeaturedProjects featuredProjects={profile.featuredProjects} />
      <Separator className="mb-8 dark:bg-[#1d283a] bg-[#1d283a]/[0.1] h-[1px] p-[1px] max-w-64 md:max-w-lg mx-auto" />
    </>
  );
}
