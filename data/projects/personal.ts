import { IProjectsList } from "../types";

const projects: IProjectsList = {
  "Jun, 2026": [
    {
      name: "pong-raylib",
      techUsed: ["c", "raylib"],
      description:
        "A classic Pong game built in C using raylib, with gamepad support.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/pong-raylib",
        },
      ],
    },
    {
      name: "98",
      techUsed: ["lua"],
      description: "A stripped-down fork of neovim plugin 99 by ThePrimeagen",
      sourceUrl: [
        { label: "View on Codeberg", url: "https://codeberg.org/gaurav712/98" },
      ],
    },
    {
      name: "launcher",
      featured: true,
      techUsed: ["c", "sdl"],
      description:
        "An efficient, bloat-free dmenu-like menu/launcher/fuzzy-finder built in C & SDL3",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/launcher",
        },
      ],
    },
  ],
  "May, 2026": [
    {
      name: "Chess: Be a Grandmaster",
      featured: true,
      techUsed: ["go", "react_native"],
      description:
        "Multiplayer chess game. Play online with friends. Supports local pass n play as well. Uses React Native for the app and golang in the backend",
      sourceUrl: [
        {
          label: "View on Google Play",
          url: "https://play.google.com/store/apps/details?id=io.github.gaurav712.chessmobile",
        },
      ],
    },
    {
      name: "local-ai-completion.nvim",
      techUsed: ["lua"],
      description: "Neovim code completion using local LLMs",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/local-ai-completion.nvim",
        },
      ],
    },
    {
      name: "Coop Bridge",
      featured: true,
      techUsed: ["c"],
      description:
        "A simple tool to pass gamepad events over WebSockets (remotely connecting a gamepad).",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/coop-bridge",
        },
      ],
    },
    {
      name: "wl-stream",
      featured: true,
      techUsed: ["c"],
      description: "Low-latency Wayland display stream over WebRTC.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/wl-stream",
        },
      ],
    },
  ],
  "Jan, 2026": [
    {
      name: "notwell",
      techUsed: ["c", "sdl"],
      description: "A photo culling application in SDL.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/notwell",
        },
      ],
    },
  ],
  "Dec, 2025": [
    {
      name: "mded-rust",
      techUsed: ["c"],
      description: "Markdown editor in Rust (incomplete; renders only).",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/mded-rust",
        },
      ],
    },
    {
      name: "notification-listener",
      techUsed: ["android", "kotlin"],
      description:
        "An Android application that listens to notification updates.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/notification-listener",
        },
      ],
    },
    {
      name: "calculator",
      techUsed: ["c"],
      description:
        "A simple calculator that works like a bad stripped-down Spotlight.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/calculator",
        },
      ],
    },
  ],
  "Nov, 2025": [
    {
      name: "monotonic-clock",
      techUsed: ["android", "kotlin"],
      description: "Jetpack Compose widget experiments.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/monotonic-clock",
        },
      ],
    },
    {
      name: "keypress-listener",
      techUsed: ["c"],
      description: "Keypress listener using libinput to implement keybindings.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/keypress-listener",
        },
      ],
    },
    {
      featured: true,
      name: "desktop-thingy",
      techUsed: ["c", "gtk"],
      description:
        "Draws a bar, desktop background, and a dashboard with day, date and weather using gtk4-layer-shell.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/desktop-thingy",
        },
      ],
    },
    {
      name: "launcher",
      techUsed: ["c"],
      description: "dmenu-like application launcher.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/launcher",
        },
      ],
    },
  ],
  "Aug, 2024": [
    {
      name: "monotone-icons",
      techUsed: ["android", "kotlin"],
      description: "Minimalist monotone Android icon pack.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/monotone-icons",
        },
      ],
    },
  ],
  "Apr, 2023": [
    {
      name: "Commute Crew",
      techUsed: ["react_native", "google_maps"],
      description:
        "A car pooling platform. Share rides along common paths and save costs.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/CommuteCrew",
        },
      ],
    },
  ],
  "Feb, 2023": [
    {
      name: "Guess the word",
      featured: true,
      techUsed: ["react_native"],
      description: "The viral wordle game!",
      sourceUrl: [
        {
          label: "View on Google Play",
          url: "https://play.google.com/store/apps/details?id=io.github.gaurav712.wordle",
        },
      ],
    },
    {
      name: "DynamoDB-Stream-Changes",
      techUsed: ["react_native", "python", "aws", "google_maps"],
      description:
        "An android application to update markers on a map in real-time as the list is updated in the database. Uses DynamoDB, GatewayAPI, Websockets, and AWS Lambda.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/DynamoDB-Stream-Changes",
        },
      ],
    },
    {
      name: "ytmusic-cli",
      techUsed: ["python"],
      description: "Youtube Music frontend in console.",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/ytmusic-cli",
        },
      ],
    },
  ],
  "Jan, 2023": [
    {
      name: "AKTU Exam Preparation",
      techUsed: ["nextjs", "typescript"],
      description:
        "A website to help AKTU students to prepare for exams, providing them with concise guides on subjects.",
      sourceUrl: [
        { label: "View on GitHub", url: "https://gaurav712.github.io/aep" },
      ],
    },
  ],
  "Dec, 2022": [
    {
      name: "RN OpenStreetMaps",
      techUsed: ["react_native", "typescript"],
      description:
        "A React Native app using OpenStreetMap's web version disguised as an in-app thingy",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/ReactNativeOpenStreetMaps",
        },
      ],
    },
    {
      name: "Kitchen Diary",
      techUsed: ["react_native", "typescript"],
      description: "An application to create and manage a catalogue of recipes",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/Kitchen-Diary",
        },
      ],
    },
  ],
  "Aug, 2021": [
    {
      name: "REC Sonbhadra Official Website",
      techUsed: ["react", "javascript"],
      description:
        "The official webiste for Rajkiya Engg. College, Sonbhadra. It's changed a lot since I and my friend crated and hosted it.",
      sourceUrl: [{ label: "Website", url: "http://recsonbhadra.ac.in" }],
    },
  ],
  "Jul, 2021": [
    {
      name: "BGMI Customs",
      techUsed: ["android", "kotlin"],
      description:
        "An app to reserve slots for public custom rooms in battle royales",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/BGMICustoms",
        },
      ],
    },
  ],
  "Apr, 2021": [
    {
      name: "wifi-qt",
      techUsed: ["cpp", "qt"],
      description: "Successor to GiGS_Wifi written in Qt5 using C++",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/wifi-qt",
        },
      ],
    },
    {
      name: "wlan_toggle_service",
      techUsed: ["c"],
      description:
        "UNIX service to run as super-user to be able to toggle wlan",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/wlan_toggle_service",
        },
      ],
    },
  ],
  "Mar, 2021": [
    {
      name: "ebook_finder",
      techUsed: ["python", "gtk"],
      description: "to find free ebooks online",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/ebook_finder",
        },
      ],
    },
  ],
  "Jan, 2021": [
    {
      name: "Sketcher",
      techUsed: ["c", "sdl"],
      description: "tool to convert images to sketch",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/sketcher",
        },
      ],
    },
  ],
  "Nov, 2020": [
    {
      name: "GiGS eBook",
      techUsed: ["python"],
      description:
        "a python library to search free eBooks online using Library Genesis' database",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/GiGS-eBook",
        },
      ],
    },
    {
      name: "GiGS Music",
      techUsed: ["android", "kotlin"],
      description: "a material design, simplistic music player for android",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/GiGS-Music",
        },
      ],
    },
  ],
  "Oct, 2020": [
    {
      name: "GiGS Wifi",
      techUsed: ["python", "gtk"],
      description: "Graphical frontend to wpa_supplicant",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/GiGS_Wifi",
        },
      ],
    },
    {
      name: "meet_auto_admit",
      techUsed: ["javascript"],
      description:
        "Chrome extention to automatically admit people to a Google Meet call",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/meet_auto_admit",
        },
      ],
    },
    {
      name: "arduino_morse",
      techUsed: ["cpp"],
      description:
        "converts a given string to Morse Code using arduino's inbuilt LED",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/arduino_morse",
        },
      ],
    },
  ],
  "Sep, 2020": [
    {
      name: "whatsapp_chat_emulation",
      techUsed: ["python", "gtk"],
      description: "emulates whatsapp chat screen from exported chats",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/whatsapp_chat_emulation",
        },
      ],
    },
  ],
  "Aug, 2020": [
    {
      name: "alsavolcontrol",
      techUsed: ["c"],
      description: "control volume using ALSA",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/alsavolcontrol",
        },
      ],
    },
  ],
  "Jul, 2019": [
    {
      name: "cpufreq",
      techUsed: ["c"],
      description: "utility to set maximum cpu frequency on linux systems",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/cpufreq",
        },
      ],
    },
  ],
  "Jun, 2019": [
    {
      name: "status",
      techUsed: ["c"],
      description:
        "simple information tool for linux systems optimised for statusbars in WMs",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/status",
        },
      ],
    },
    {
      name: "brightness",
      techUsed: ["c"],
      description: "utility to control brightness on linux systems",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/brightness",
        },
      ],
    },
    {
      name: "list_mountable_stuff",
      techUsed: ["c"],
      description: "Lists devices that can be mounted on linux systems",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/list_mountable_stuff",
        },
      ],
    },
    {
      name: "launch",
      techUsed: ["c"],
      description: "an alternative to xdg-open",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/launch",
        },
      ],
    },
  ],
  "Apr, 2019": [
    {
      name: "subtitle_parser",
      techUsed: ["c"],
      description:
        "parses *.srt files and spits out dialogues at relevant intervals",
      sourceUrl: [
        {
          label: "View on Codeberg",
          url: "https://codeberg.org/gaurav712/subtitle_parser",
        },
      ],
    },
  ],
};

export default projects;

