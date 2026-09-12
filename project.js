// Renders a single project's detail page based on the ?id= in the URL.
// You shouldn't need to edit this — add/edit project content in content.js.

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = (CONTENT.projects || []).find(p => p.id === id);

  if (!project) {
    document.querySelector("main").innerHTML = `
      <section><div class="wrap">
        <h2 class="section-title">Project not found</h2>
        <p class="about-text">That project doesn't exist or the link is out of date.
        <a href="index.html">Go back to all projects</a>.</p>
      </div></section>
    `;
    return;
  }

  document.title = `${project.title} — Project Detail`;
  document.getElementById("project-code").textContent = project.code || "";
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-year").textContent = project.year || "";

  const stackEl = document.getElementById("project-stack");
  (project.stack || []).forEach(s => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = s;
    stackEl.appendChild(tag);
  });

  const d = project.details || {};
  setOrHideSection("project-overview", "detail-overview", d.overview, "overview-title", d.overviewLabel);
  setOrHideSection("project-approach", "detail-approach", d.approach, "approach-title", d.approachLabel);
  setOrHideSection("project-outcome", "detail-outcome", d.outcome, "outcome-title", d.outcomeLabel);

  // Image galleries between text sections — each can hold as many photos as you want.
  renderImageGroup("image-slot-0", "images-after-overview", d.imagesAfterOverview);
  renderImageGroup("image-slot-1", "images-after-approach", d.imagesAfterApproach);
  renderImageGroup("image-slot-2", "images-after-outcome", d.imagesAfterOutcome);

  // Extra overflow gallery at the bottom (for photos not tied to a specific section)
  if (d.images && d.images.length) {
    document.getElementById("project-images").style.display = "";
    renderImageGroup("project-images", "detail-images", d.images);
  }

  // Videos — add as many as you want. Supports YouTube, Vimeo, or direct video files.
  if (d.videos && d.videos.length) {
    document.getElementById("project-video").style.display = "";
    const container = document.getElementById("detail-videos");
    d.videos.forEach(url => {
      const wrapper = document.createElement("div");
      wrapper.className = "video-wrapper";
      wrapper.innerHTML = buildVideoEmbed(url);
      container.appendChild(wrapper);
    });
  }

  // External link (optional)
  if (project.externalLink) {
    const externalSection = document.getElementById("project-external");
    const externalWrap = document.getElementById("detail-external");
    const a = document.createElement("a");
    a.href = project.externalLink;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "View live link ↗";
    externalWrap.appendChild(a);
    externalSection.style.display = "";
  }
});

// `titleId`/`label` are optional — pass them to override a section's default
// heading (e.g. "Overview") with a custom one for that project.
function setOrHideSection(sectionId, textId, value, titleId, label) {
  const section = document.getElementById(sectionId);
  if (!value) {
    section.style.display = "none";
    return;
  }
  document.getElementById(textId).innerHTML = renderRichText(value);
  if (titleId && label) {
    document.getElementById(titleId).textContent = label;
  }
}

// Turns plain text into HTML: lines starting with "- " become bullet points,
// everything else becomes a paragraph.
function renderRichText(text) {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length);
  let html = "";
  let inList = false;

  lines.forEach(line => {
    if (line.startsWith("- ")) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${escapeHtml(line.slice(2))}</li>`;
    } else {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<p>${escapeHtml(line)}</p>`;
    }
  });
  if (inList) html += "</ul>";
  return html;
}

// Renders a list of image paths into a gallery grid inside the given container,
// and shows the wrapping section. Does nothing if the array is empty/missing.
function renderImageGroup(sectionId, containerId, images) {
  if (!images || !images.length) return;
  const section = document.getElementById(sectionId);
  const container = document.getElementById(containerId);
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.loading = "lazy";
    container.appendChild(img);
  });
  section.style.display = "";
}

// Builds an embed for a YouTube link, Vimeo link, or direct video file.
function buildVideoEmbed(url) {
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);

  if (ytMatch) {
    return `<iframe src="https://www.youtube.com/embed/${ytMatch[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
  if (vimeoMatch) {
    return `<iframe src="https://player.vimeo.com/video/${vimeoMatch[1]}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  }
  return `<video controls src="${escapeHtml(url)}"></video>`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
