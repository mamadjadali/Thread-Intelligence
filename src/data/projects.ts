export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Object Detection",
    techs: ["🐍 Python","Machine Learning"],
    link: "",
  },
  {
    title: "Webapp",
    techs: ["🦀 Rust","Axum"],
    link: "",
  },
  {
    title: "Face Recognition ",
    techs: ["🐍 Python","Vision"],
    link: "",
  },
  {
    title: "RestAPI",
    techs: ["🦀 Rust","Next.js","🐋 Docker","🐘 Postgres"],
    link: "",
  },
  {
    title: "Uber",
    techs: ["React Native","Tailwind"],
    link: "",
  },
  {
    title: "Web3 Messenger",
    techs: ["Next.js","DAPP"],
    link: "",
  },
  {
    title: "Numeris",
    techs: ["Next.js","Tailwind", "Mongodb"],
    link: "",
  },
  {
    title: "Issue Tracker",
    techs: ["Next.js","Prisma", "MySQL", "NextAuth"],
    link: "",
  },
  {
    title: "REP",
    techs: ["Next.js","Prismic", "Vercel"],
    link: "https://rep-prismic-mamadjadalis-projects.vercel.app/",
  },
  {
    title: "Drone Flight",
    techs: ["Cpp (QT)"],
    link: "",
  },
  {
    title: "Tesla Dashboard",
    techs: ["CPP (QT)"],
    link: "",
  },
  {
    title: "WebScrapping",
    techs: ["Next.js"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
