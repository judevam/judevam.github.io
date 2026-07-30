const CONTENT = {

  // ---- Header / Hero ----
  name: "Jude Vamenta",
  role: "Mechanical Engineer",
  tagline: "BS Mechanical Engineering Tufts University '27",
  
  photo: "",

  // ---- About ----
  about: `As a mechanical engineering student at Tufts University, I have 
  placed an emphasis on working on projects to challenge myself and gain 
  hands-on experience. I am particularly passionate in areas such as design, 
  controls, robotics, automation, and mechatronics and hope to continue to 
  collaborate with teams and fabricate my own ideas into reality.`,

  location: "Somerville, MA",

  // ---- Projects ----
  // Add or remove as many project objects as you want — the page updates automatically.
  // `id` must be unique and URL-safe (letters, numbers, hyphens only) — used in the project's link.
  // `summary` shows on the homepage card. The `details` fields show on that project's own page.
  projects: [
    {
      id: "project-one",
      code: "SPEC 01",
      title: "Load Lifting Robot",
      year: "2025",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["CAD", "SolidWorks", "Manufacturing"],
      externalLink: "", // optional: live demo, GitHub repo, video, etc.
      details: {
        overview: "A longer explanation of what this project is, why you built it, and what problem it solves. This is your chance to give real context — a paragraph or two is great.",
        approach: "What you actually did: your process, key design decisions, tools/methods used, and any tradeoffs you navigated.",
        outcome: "The result — what it achieved, what you learned, or what you'd do differently next time.",
        images: [] // optional: paste image URLs here, e.g. ["https://example.com/photo.jpg"]
      }
    },
    {
      id: "project-two",
      code: "SPEC 02",
      title: "Electronic Accordion",
      year: "2025",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["Python", "Sensors", "Data Analysis"],
      externalLink: "",
      details: {
        overview: "A longer explanation of what this project is, why you built it, and what problem it solves.",
        approach: "What you actually did: your process, key design decisions, tools/methods used, and any tradeoffs you navigated.",
        outcome: "The result — what it achieved, what you learned, or what you'd do differently next time.",
        images: []
      }
    },
    {
      id: "project-three",
      code: "SPEC 03",
      title: "Two-player motorized Tabletop Ball Game",
      year: "2025",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["Circuit Design", "Embedded Systems"],
      externalLink: "",
      details: {
        overview: "A longer explanation of what this project is, why you built it, and what problem it solves.",
        approach: "What you actually did: your process, key design decisions, tools/methods used, and any tradeoffs you navigated.",
        outcome: "The result — what it achieved, what you learned, or what you'd do differently next time.",
        images: []
      }
    },
    {
      id: "project-four",              // must be unique, lowercase, no spaces
      code: "SPEC 04",                 // just increments — SPEC 01, 02, 03, 04...
      title: "Custom PCB Desgin",
      year: "2025",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["Tool A", "Tool B", "Tool C"],
      externalLink: "",                // optional: demo/repo/video link
      details: {
        overview: "A longer explanation of what this project is and why you built it.",
        approach: "What you actually did — process, decisions, tradeoffs.",
        outcome: "The result, what you learned, or what you'd change next time.",
        images: []                     // optional image URLs
      }
    },
    {
      id: "project-five",              // must be unique, lowercase, no spaces
      code: "SPEC 05",                 // just increments — SPEC 01, 02, 03, 04...
      title: "Assistive Dog Treat Dispenser",
      year: "2025",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["Tool A", "Tool B", "Tool C"],
      externalLink: "",                // optional: demo/repo/video link
      details: {
        overview: "A longer explanation of what this project is and why you built it.",
        approach: "What you actually did — process, decisions, tradeoffs.",
        outcome: "The result, what you learned, or what you'd change next time.",
        images: []                     // optional image URLs
      }
    },
    {
      id: "project-six",              // must be unique, lowercase, no spaces
      code: "SPEC 06",                 // just increments — SPEC 01, 02, 03, 04...
      title: "Automated Watering System",
      year: "2024-2025",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["Tool A", "Tool B", "Tool C"],
      externalLink: "",                // optional: demo/repo/video link
      details: {
        overview: "A longer explanation of what this project is and why you built it.",
        approach: "What you actually did — process, decisions, tradeoffs.",
        outcome: "The result, what you learned, or what you'd change next time.",
        images: []                     // optional image URLs
      }
    },
    {
      id: "project-seven",              // must be unique, lowercase, no spaces
      code: "SPEC 04",                 // just increments — SPEC 01, 02, 03, 04...
      title: "Infiltration Trench Model",
      year: "2026",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["Tool A", "Tool B", "Tool C"],
      externalLink: "",                // optional: demo/repo/video link
      details: {
        overview: "A longer explanation of what this project is and why you built it.",
        approach: "What you actually did — process, decisions, tradeoffs.",
        outcome: "The result, what you learned, or what you'd change next time.",
        images: []                     // optional image URLs
      }
    }
  ],

  // ---- Skills ----
  // Group however makes sense for your field
  skills: [
    { category: "Design & CAD", items: ["SolidWorks", "AutoCAD", "Fusion 360"] },
    { category: "Programming", items: ["Python", "MATLAB", "C++"] },
    { category: "Tools", items: ["Git", "Excel", "LabVIEW"] }
  ],

  // ---- Contact ----
  email: "your.email@example.com",
  links: [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { label: "Resume", url: "" }
  ]
};
