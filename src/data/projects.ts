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
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Webapp",
    techs: ["🦀 Rust","Axum"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Face Recognition ",
    techs: ["🐍 Python","Vision"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "RestAPI",
    techs: ["🦀 Rust","Next.js","Docker","Postgres"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Uber",
    techs: ["React Native","Tailwind"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Web3 Messenger",
    techs: ["Next.js","DAPP"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "ParsComTel",
    techs: ["Astro","Tailwind"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Data Pipeline",
    techs: ["🦀 Rust","Ownership model"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Network Application",
    techs: ["🦀 Rust","TCP-UDP"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Drone Flight",
    techs: ["Cpp (QT)"],
    link: "https://github.com/MaeWolff/dictionary-app",
  },
  {
    title: "Tesla Dashboard",
    techs: ["CPP (QT)"],
    link: "https://www.linablidi.fr/",
  },
  {
    title: "WebScrapping",
    techs: ["Next.js"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
