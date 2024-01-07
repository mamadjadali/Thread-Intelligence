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
    title: "ParsComTel",
    techs: ["Astro","Tailwind"],
    link: "",
  },
  {
    title: "Data Pipeline",
    techs: ["🦀 Rust","Ownership model"],
    link: "",
  },
  {
    title: "Network Application",
    techs: ["🦀 Rust","TCP-UDP"],
    link: "",
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
