// This file reads CONTENT (from content.js) and builds the page.
// You shouldn't need to edit this for normal updates — just edit content.js.

document.addEventListener("DOMContentLoaded", () => {
  document.title = `${CONTENT.name} — ${CONTENT.role}`;

  // Hero
  document.getElementById("hero-name").textContent = CONTENT.name;
  document.getElementById("hero-role").textContent = CONTENT.role;
  document.getElementById("hero-tagline").textContent = CONTENT.tagline;

  // About
  document.getElementById("about-text").textContent = CONTENT.about.trim().replace(/\s+/g, " ");
  document.getElementById("about-location").textContent = CONTENT.location ? `Based in ${CONTENT.location}` : "";

  // Projects
  const projectsList = document.getElementById("projects-list");
  CONTENT.projects.forEach(p => {
    const card = document.createElement(p.link ? "a" : "div");
    card.className = "project-card fade-in";
    if (p.link) {
      card.href = p.link;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.style.textDecoration = "none";
      card.style.color = "inherit";
    }

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
