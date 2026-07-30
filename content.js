const CONTENT = {

  // ---- Header / Hero ----
  name: "Jude Vamenta",
  role: "Mechanical Engineer",
  tagline: "I design and build things that have to actually work.",

  // ---- About ----
  about: `A couple sentences about who you are, what kind of engineering
  you do, and what you're looking for. Keep it short — 2 to 4 sentences
  is plenty. This shows up right under the hero section.`,

  location: "Somerville, MA",

  // ---- Projects ----
  // Add or remove as many project objects as you want — the page updates automatically.
  projects: [
    {
      code: "SPEC 01",
      title: "Project Name One",
      year: "2026",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["CAD", "SolidWorks", "Manufacturing"],
      link: "" // paste a URL here if you have one, or leave blank
    },
    {
      code: "SPEC 02",
      title: "Project Name Two",
      year: "2025",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["Python", "Sensors", "Data Analysis"],
      link: ""
    },
    {
      code: "SPEC 03",
      title: "Project Name Three",
      year: "2025",
      summary: "One or two sentences on what this project is and what problem it solves.",
      stack: ["Circuit Design", "Embedded Systems"],
      link: ""
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
