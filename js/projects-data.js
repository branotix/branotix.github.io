/* ==========================================================================
   projects-data.js
   Add a new project any time by pushing a new object into this array —
   no other file needs to change. Keys:
   title, tag ("platform" | "systems" | "algorithms"), status ("live" | "dev" | "oss"),
   summary, stack: [], links: { live, github }, featured: true|false
   ========================================================================== */

const PROJECTS = [
  {
    title: "Branotix — Mentorship Network",
    tag: "platform",
    status: "dev",
    summary:
      "A free platform connecting HSC and Diploma students in Bangladesh with verified university students for one-on-one mentorship. Includes JWT authentication, WebRTC video calling, and MediaMTX-powered live streaming.",
    stack: ["Go", "PostgreSQL", "WebRTC", "MediaMTX", "Vanilla JS"],
    links: {
      live: "https://www.duetian.page",
      github: "https://github.com/branotix/varsity-network"
    },
    featured: true
  },
  {
    title: "Branotix Player — Branded Video Platform",
    tag: "platform",
    status: "dev",
    summary:
      "A branded video platform that serves copyright-free educational content through a custom player which hides the source platform's native UI entirely. Ships as a reusable BranotixPlayer JS component backed by a rate-limited Go API.",
    stack: ["Go", "PostgreSQL", "Vanilla JS", "REST API"],
    links: {
      live: "https://branotix.page",
      github: "https://github.com/branotix"
    },
    featured: true
  },
  {
    title: "University Network",
    tag: "platform",
    status: "dev",
    summary:
      "An earlier iteration of the campus mentorship concept — exploring auth flows, role-based access, and the data model that later became Branotix.",
    stack: ["Go", "PostgreSQL"],
    links: { github: "https://github.com/branotix/University_Network" },
    featured: false
  },
  {
    title: "bdt — Backend Experiments",
    tag: "systems",
    status: "dev",
    summary:
      "A working sandbox of backend patterns in Go: middleware chains, request validation, and service structuring used to prototype ideas before they land in production projects.",
    stack: ["Go"],
    links: { github: "https://github.com/branotix/bdt" },
    featured: false
  },
  {
    title: "Tour of Go — Guided Practice",
    tag: "algorithms",
    status: "oss",
    summary:
      "Personal walkthrough and exercises from the official Go language tour — slices, goroutines, channels, and interfaces, solved and annotated while building fluency in Go.",
    stack: ["Go"],
    links: { github: "https://github.com/branotix/tour-of-go" },
    featured: false
  },
  {
    title: "Goroutines & Concurrency Drills",
    tag: "algorithms",
    status: "oss",
    summary:
      "Small, focused programs exploring goroutines, channels, and sync primitives — building intuition for concurrent design before applying it in real services.",
    stack: ["Go"],
    links: { github: "https://github.com/branotix/goroutings" },
    featured: false
  },
  {
    title: "Selection Sort, Implemented & Benchmarked",
    tag: "algorithms",
    status: "oss",
    summary:
      "A from-scratch implementation of selection sort in Go with test cases, written as part of a broader habit of implementing core CS fundamentals rather than skipping past them.",
    stack: ["Go"],
    links: { github: "https://github.com/branotix/selection_sort" },
    featured: false
  },
  {
    title: "CMake + Ninja Project Starter",
    tag: "systems",
    status: "oss",
    summary:
      "A minimal, reusable C/C++ project scaffold wired up with CMake and Ninja — for quickly bootstrapping systems-level experiments without fighting the build setup.",
    stack: ["C++", "CMake", "Ninja"],
    links: { github: "https://github.com/branotix/Simple_Project_Setup_With_CMake_And_Ninja" },
    featured: false
  }
];
