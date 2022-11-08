import { ITechIcons } from "./types";

export const techIcons: ITechIcons = {
  c: "/c.svg",
  python: "/python.svg",
  kotlin: "/kotlin.svg",
  android: "/android.svg",
  sdl: "/sdl.svg",
};

export const projects = [
  {
    name: "status",
    techUsed: ["c"],
    description:
      "simple information tool for linux systems optimised for statusbars in WMs",
    sourceUrl: "https://github.com/gaurav712/status",
  },
  {
    name: "GiGS eBook",
    techUsed: ["python"],
    description:
      "a python library to search free eBooks online using Library Genesis' database",
    sourceUrl: "https://github.com/gaurav712/GiGS-eBook",
  },
  {
    name: "GiGS Music",
    techUsed: ["android", "kotlin"],
    description: "a material design, simplistic music player for android",
    sourceUrl: "https://github.com/gaurav712/GiGS-Music",
  },
  {
    name: "Sketcher",
    techUsed: ["c", "sdl"],
    description: "tool to convert images to sketch",
    sourceUrl: "https://github.com/gaurav712/sketcher",
  },
];
