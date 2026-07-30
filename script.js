// This file reads CONTENT (from content.js) and builds the page.
// You shouldn't need to edit this for normal updates — just edit content.js.

document.addEventListener("DOMContentLoaded", () => {
  document.title = `${CONTENT.name} — ${CONTENT.role}`;

  // Keep the meta description in sync with content.js for browsers that read it live.
  // (Note: social preview bots read index.html directly and won't see this JS update —
  // that's why the same description should also be set by hand in index.html's <head>.)
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && CONTENT.seo && CONTENT.seo.description) {
    metaDesc.setAttribute("content", CONTENT.seo.description);
  }

  // Hero
  document.getElementById("hero-name").textContent = CONTENT.name;
  document.getElementById("hero-role").textContent = CONTENT.role;
  document.getElementById("hero-tagline").textContent = CONTENT.tagline;

  const photoEl = document.getElementById("hero-photo");
  if (CONTENT.photo) {
    photoEl.src = CONTENT.photo;
    photoEl.alt = CONTENT.name;
    photoEl.style.display = "";
  }

  const statusEl = document.getElementById("hero-status");
  if (CONTENT.status) {
    statusEl.textContent = CONTENT.status;
    statusEl.style.display = "";
  }

  const resumeEl = document.getElementById("hero-resume");
  if (CONTENT.resumeUrl) {
    resumeEl.href = CONTENT.resumeUrl;
    resumeEl.style.display = "";
  }

  // About
  document.getElementById("about-text").textContent = CONTENT.about.trim().replace(/\s+/g, " ");
  document.getElementById("about-location").textContent = CONTENT.location ? `Based in ${CONTENT.location}` : "";

  // Projects — each card links to its own detail page (project.html?id=...)
  const projectsList = document.getElementById("projects-list");
  CONTENT.projects.forEach(p => {
    const card = document.createElement("a");
    card.className = "project-card fade-in";
    card.href = `project.html?id=${encodeURIComponent(p.id)}`;
    card.style.textDecoration = "none";
    card.style.color = "inherit";

    const tagsHtml = (p.stack || []).map(s => `<span class="tag">${escapeHtml(s)}</span>`).join("");

    card.innerHTML = `
      <div class="project-code">${escapeHtml(p.code || "")}</div>
      <div>
        <div class="project-title-row">
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <span class="project-year">${escapeHtml(p.year || "")}</span>
        </div>
        <p class="project-summary">${escapeHtml(p.summary || "")}</p>
        <div class="stack-tags">${tagsHtml}</div>
        <span class="read-more">View details &rarr;</span>
      </div>
    `;
    projectsList.appendChild(card);
  });

  // Skills
  const skillsGrid = document.getElementById("skills-grid");
  (CONTENT.skills || []).forEach(group => {
    const div = document.createElement("div");
    div.className = "skill-group fade-in";
    const itemsHtml = group.items.map(i => `<li>${escapeHtml(i)}</li>`).join("");
    div.innerHTML = `<h3>${escapeHtml(group.category)}</h3><ul>${itemsHtml}</ul>`;
    skillsGrid.appendChild(div);
  });

  // Contact
  const contactLinks = document.getElementById("contact-links");
  if (CONTENT.email) {
    const mail = document.createElement("a");
    mail.href = `mailto:${CONTENT.email}`;
    mail.textContent = CONTENT.email;
    contactLinks.appendChild(mail);
  }
  (CONTENT.links || []).forEach(l => {
    if (!l.url) return;
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = l.label;
    contactLinks.appendChild(a);
  });

  document.getElementById("footer-year").textContent = new Date().getFullYear();
});

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
