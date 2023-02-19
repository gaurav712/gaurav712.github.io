import { ITechIcons } from "./types";

export const techIcons: ITechIcons = {
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
};

export const projects = [
  {
    name: "DynamoDB-Stream-Changes",
    techUsed: ["react_native", "python", "aws", "google_maps"],
    description:
      "An android application to update markers on a map in real-time as the list is updated in the database. Uses DynamoDB, GatewayAPI, Websockets, and AWS Lambda.",
    sourceUrl: "https://github.com/gaurav712/DynamoDB-Stream-Changes",
  },
  {
    name: "AKTU Exam Preparation",
    techUsed: ["nextjs", "typescript"],
    description:
      "A website to help AKTU students to prepare for exams, providing them with concise guides on subjects.",
    sourceUrl: "https://gaurav712.github.io/aep",
  },
  {
    name: "RN OpenStreetMaps",
    techUsed: ["react_native", "typescript"],
    description:
      "A React Native app using OpenStreetMap's web version disguised as an in-app thingy",
    sourceUrl: "https://github.com/gaurav712/ReactNativeOpenStreetMaps",
  },
  {
    name: "Kitchen Diary",
    techUsed: ["react_native", "typescript"],
    description: "An application to create and manage a catalogue of recipes",
    sourceUrl: "https://github.com/gaurav712/Kitchen-Diary",
  },
  {
    name: "BGMI Customs",
    techUsed: ["android", "kotlin"],
    description:
      "An app to reserve slots for public custom rooms in battle royales",
    sourceUrl: "https://github.com/gaurav712/BGMICustoms",
  },
  {
    name: "REC Sonbhadra Official Website",
    techUsed: ["react", "javascript"],
    description:
      "The official webiste for Rajkiya Engg. College, Sonbhadra. It's changed a lot since I and my friend crated and hosted it.",
    sourceUrl: "http://recsonbhadra.ac.in",
  },
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
  {
    name: "wlan_toggle_service",
    techUsed: ["c"],
    description: "UNIX service to run as super-user to be able to toggle wlan",
    sourceUrl: "https://github.com/gaurav712/wlan_toggle_service",
  },
  {
    name: "GiGS Wifi",
    techUsed: ["python", "gtk"],
    description: "Graphical frontend to wpa_supplicant",
    sourceUrl: "https://github.com/gaurav712/GiGS_Wifi",
  },
  {
    name: "wifi-qt",
    techUsed: ["cpp", "qt"],
    description: "Successor to GiGS_Wifi written in Qt5 using C++",
    sourceUrl: "https://github.com/gaurav712/wifi-qt",
  },
  {
    name: "list_mountable_stuff",
    techUsed: ["c"],
    description: "Lists devices that can be mounted on linux systems",
    sourceUrl: "https://github.com/gaurav712/list_mountable_stuff",
  },
  {
    name: "subtitle_parser",
    techUsed: ["c"],
    description:
      "parses *.srt files and spits out dialogues at relevant intervals",
    sourceUrl: "https://github.com/gaurav712/subtitle_parser",
  },
  {
    name: "brightness",
    techUsed: ["c"],
    description: "utility to control brightness on linux systems",
    sourceUrl: "https://github.com/gaurav712/brightness",
  },
  {
    name: "cpufreq",
    techUsed: ["c"],
    description: "utility to set maximum cpu frequency on linux systems",
    sourceUrl: "https://github.com/gaurav712/cpufreq",
  },
  {
    name: "alsavolcontrol",
    techUsed: ["c"],
    description: "control volume using ALSA",
    sourceUrl: "https://github.com/gaurav712/alsavolcontrol",
  },
  {
    name: "whatsapp_chat_emulation",
    techUsed: ["python", "gtk"],
    description: "emulates whatsapp chat screen from exported chats",
    sourceUrl: "https://github.com/gaurav712/whatsapp_chat_emulation",
  },
  {
    name: "meet_auto_admit",
    techUsed: ["javascript"],
    description:
      "Chrome extention to automatically admit people to a Google Meet call",
    sourceUrl: "https://github.com/gaurav712/meet_auto_admit",
  },
  {
    name: "arduino_morse",
    techUsed: ["cpp"],
    description:
      "converts a given string to Morse Code using arduino's inbuilt LED",
    sourceUrl: "https://github.com/gaurav712/arduino_morse",
  },
  {
    name: "ebook_finder",
    techUsed: ["python", "gtk"],
    description: "to find free ebooks online",
    sourceUrl: "https://github.com/gaurav712/ebook_finder",
  },
  {
    name: "launch",
    techUsed: ["c"],
    description: "an alternative to xdg-open",
    sourceUrl: "https://github.com/gaurav712/launch",
  },
];
