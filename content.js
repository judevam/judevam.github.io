/*
  ===========================================================
  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
  You don't need to touch any other file for normal updates.
  Just fill in your info below and save.
  ===========================================================
*/

const CONTENT = {

  // ---- Header / Hero ----
  name: "Your Name",
  role: "Mechanical Engineer",
  tagline: "I design and build things that have to actually work.",

  // Optional photo of you for the homepage.
  // Put an image file (e.g. "photo.jpg") in this same folder and put its filename here.
  // Or paste a full image URL instead. Leave as "" to show no photo.
  photo: "",

  // Optional short status badge shown under the tagline — good for things recruiters scan for.
  // e.g. "Open to internships — Summer 2027" or "Graduating May 2027"
  // Leave as "" to hide it.
  status: "",

  // Optional resume — put a PDF (e.g. "resume.pdf") in this same folder and put its filename here,
  // or paste a full URL to a hosted PDF. Leave as "" to hide the resume button.
  resumeUrl: "",

  // ---- About ----
  about: `A couple sentences about who you are, what kind of engineering
  you do, and what you're looking for. Keep it short — 2 to 4 sentences
  is plenty. This shows up right under the hero section.`,

  location: "Boston, MA",

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
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" }
  ],

  // ---- SEO / link previews ----
  // This controls how your site looks when shared on LinkedIn, Slack, iMessage, etc.
  // Note: some of this (below) also needs to be set directly in index.html's <head> —
  // see the comments there — because social media preview bots don't run JavaScript.
  seo: {
    description: "Engineering portfolio showcasing projects, skills, and experience.",
    previewImage: "" // optional: filename or URL of an image shown in link previews (e.g. "preview.jpg")
  }
};
