type Social = {
  label: string;
  link: string;
};

type Presentation = {
  /*mail: string;*/
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  /*mail: "jadalimamad@protonmail.com",*/
  title: "Mamali",
  // profile: "/profile.webp",
  description:
    "Software Engineer",
  socials: [
    {
      label: "X",
      link: "https://x.com/Mamadjimjim",
    },
    {
      label: "Github",
      link: "https://github.com/mamadjadali",
    },
  ],
};

export default presentation;
