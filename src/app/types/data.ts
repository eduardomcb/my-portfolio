export type Profile = {
  id: string;
  description: string;
  username: string;
  profilePicture: {
    url: string;
  };
  knowledges: Knowledge[];
  featuredProjects: FeaturedProject[];
};

export type Knowledge = {
  id: string;
  name: string;
  iconSvg: string;
  startDate: string;
};

export type FeaturedProject = {
  id: string;
  title: string;
  shortDescription: string;
  cover: {
    url: string;
  };
  repository: string;
  deploy: string;
  knowledges: Knowledge[];
};

export type PageData = {
  profile: Profile;
};
