import { ITechIcons } from "./types";

const techIcons: ITechIcons = {
  c: {
    iconSource: "/c.svg",
    tooltipText: "C",
  },
  cpp: {
    iconSource: "/cpp.svg",
    tooltipText: "C++",
  },
  python: {
    iconSource: "/python.svg",
    tooltipText: "Python",
  },
  kotlin: {
    iconSource: "/kotlin.svg",
    tooltipText: "Kotlin",
  },
  android: {
    iconSource: "/android.svg",
    tooltipText: "Android",
  },
  sdl: {
    iconSource: "/sdl.svg",
    tooltipText: "Simple Direct Media Layer (SDL)",
  },
  react: {
    iconSource: "/react.svg",
    tooltipText: "React",
  },
  react_native: {
    iconSource: "/react.svg",
    tooltipText: "React Native",
  },
  typescript: {
    iconSource: "/typescript.svg",
    tooltipText: "TypeScript",
  },
  gtk: {
    iconSource: "/gtk.svg",
    tooltipText: "Gnome ToolKit (GTK)",
  },
  qt: {
    iconSource: "/qt.svg",
    tooltipText: "Qt",
  },
  javascript: {
    iconSource: "/javascript.svg",
    tooltipText: "JavaScript",
  },
  nextjs: {
    iconSource: "/nextjs.svg",
    tooltipText: "NextJS",
  },
  aws: {
    iconSource: "/aws.svg",
    tooltipText: "Amazon Web Services",
  },
  google_maps: {
    iconSource: "/google_maps.svg",
    tooltipText: "Google Maps",
  },
  electron: {
    iconSource: "/electron.svg",
    tooltipText: "Electron",
  },
  firebase: {
    iconSource: "/firebase.svg",
    tooltipText: "Firebase",
  },
  lua: {
    iconSource: "/lua.svg",
    tooltipText: "Lua",
  },
  go: {
    iconSource: "/go.svg",
    tooltipText: "Golang",
  },
  nodejs: {
    iconSource: "/nodejs.svg",
    tooltipText: "NodeJS",
  },
  supabase: {
    iconSource: "/supabase.svg",
    tooltipText: "Supabase",
  },
};

export default techIcons;

const urlIcons: { [key: string]: string } = {
  codeberg: "/codeberg.svg",
  github: "/github.svg",
  apple: "/apple.svg",
  playstore: "/google.svg",
  default: "/earth.svg",
};

export const getUrlIcon = (url: string): string => {
  if (url.includes("codeberg.org")) return urlIcons.codeberg;
  if (url.includes("github.com")) return urlIcons.github;
  if (url.includes("apps.apple.com")) return urlIcons.apple;
  if (url.includes("play.google.com")) return urlIcons.playstore;
  return urlIcons.default;
};

