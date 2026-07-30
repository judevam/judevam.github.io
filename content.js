const CONTENT = {

  // ---- Header / Hero ----
  name: "Jude Vamenta",
  role: "Mechanical Engineer",
  tagline: "I design and build things that have to actually work.",
  
  photo: "",

  // ---- About ----
  about: `A couple sentences about who you are, what kind of engineering
  you do, and what you're looking for. Keep it short — 2 to 4 sentences
  is plenty. This shows up right under the hero section.`,

  location: "Somerville, MA",

  // ---- Projects ----
  // Add or remove as many project objects as you want — the page updates automatically.
  // `id` must be unique and URL-safe (letters, numbers, hyphens only) — used in the project's link.
  // `summary` shows on the homepage card. The `details` fields show on that project's own page.
  projects: [
    {
      id: "project-one",
      code: "SPEC 01",
      title: "Project Name One",
      year: "2026",
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
      title: "Project Name Two",
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
      title: "Project Name Three",
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
      title: "Project Name Four",
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
