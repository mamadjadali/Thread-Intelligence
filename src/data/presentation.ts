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
  title: "Thread Intelligence",
  // profile: "/profile.webp",
  description:
    "Bonjour, new *Thread Intelligence Resource* which aims to provide *in-depth knowledge* of how threat actors target different industries, the *Tools* they use, and their possible motivations. This resource will offer contextual, anticipative, and actionable *cyberthreat* intelligence to help defend our organization against *Malware* and *Cyberattacks*.",
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
