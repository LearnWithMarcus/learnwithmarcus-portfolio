// =========================================
// Case Study cards + multi-document / multi-page lightbox
// =========================================

const caseStudyItems = Array.isArray(window.caseStudyItems)
  ? window.caseStudyItems
  : [];

const caseStudyGridEl = document.getElementById("case-study-grid");
const caseStudyDialog = document.getElementById("case-study-dialog");
const caseStudyDialogEyebrow = document.getElementById(
  "case-study-dialog-eyebrow",
);
const caseStudyDialogTitle = document.getElementById("case-study-dialog-title");
const caseStudyDialogSubtitle = document.getElementById(
  "case-study-dialog-subtitle",
);

const caseStudyMainImage = document.getElementById("case-study-main-image");
const caseStudyPageCounter = document.getElementById("case-study-page-counter");
const caseStudyPagePrev = document.getElementById("case-study-page-prev");
const caseStudyPageNext = document.getElementById("case-study-page-next");

const caseStudyDocumentRail = document.getElementById(
  "case-study-document-rail",
);

const caseStudyDocumentPhase = document.getElementById(
  "case-study-document-phase",
);
const caseStudyDocumentTitle = document.getElementById(
  "case-study-document-title",
);
const caseStudyFileType = document.getElementById("case-study-file-type");

const caseStudyDocumentOverview = document.getElementById(
  "case-study-document-overview",
);
const caseStudyDesignDecision = document.getElementById(
  "case-study-design-decision",
);

const caseStudyFrameworks = document.getElementById("case-study-frameworks");
const caseStudyTools = document.getElementById("case-study-tools");

const caseStudyAiAnswer = document.getElementById("case-study-ai-answer");
const caseStudyAiDescription = document.getElementById(
  "case-study-ai-description",
);

const caseStudySourceLink = document.getElementById("case-study-source-link");

let activeCaseStudy = null;
let activeCaseDocumentIndex = 0;
let activeCasePageIndex = 0;

// =========================================
// Utility: Escape HTML
// =========================================

function esc(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// =========================================
// Utility: Toggle entire metadata block
// =========================================

function setMetaBlockVisibility(element, hasContent) {
  if (!element) return;

  const block = element.closest(".case-study-meta-block");

  if (block) {
    block.hidden = !hasContent;
  }
}

// =========================================
// Utility: Render tag pills
// =========================================

function renderTagList(element, values, fallback = "") {
  if (!element) return;

  const list = Array.isArray(values)
    ? values.filter((value) => typeof value === "string" && value.trim())
    : [];

  if (list.length) {
    element.innerHTML = list
      .map((value) => `<span>${esc(value.trim())}</span>`)
      .join("");
  } else if (fallback) {
    element.innerHTML = `<span class="case-study-muted-tag">${esc(fallback)}</span>`;
  } else {
    element.innerHTML = "";
  }
}

// =========================================
// Render Case Study Cards
// =========================================

function renderCaseStudyCards() {
  if (!caseStudyGridEl) return;

  if (!caseStudyItems.length) {
    caseStudyGridEl.innerHTML = `
      <div class="coming-soon case-study-empty">
        <h3>Case studies are being prepared.</h3>
      </div>
    `;

    return;
  }

  caseStudyGridEl.innerHTML = caseStudyItems
    .map((item) => {
      const tags = (item.tags || []).slice(0, 4);

      const documentCount = (item.documents || []).filter(
        (documentItem) => documentItem?.pages?.length,
      ).length;

      return `
        <article class="case-study-card">

          <button
            class="case-study-card-button"
            type="button"
            data-case-study-id="${esc(item.id)}"
            aria-label="Explore case study: ${esc(item.title)}"
          >

            <div class="case-study-card-image">

              <img
                src="${esc(item.thumbnail)}"
                alt=""
              >

              <span class="case-study-document-count">
                ${documentCount}
                document${documentCount === 1 ? "" : "s"}
              </span>

            </div>

            <div class="case-study-card-copy">

              <p class="eyebrow">
                ${esc(item.eyebrow || "CASE STUDY")}
              </p>

              <h3>
                ${esc(item.title)}
              </h3>

              <p class="case-study-organization">
                ${esc(item.organization || "")}
              </p>

              <p>
                ${esc(item.shortDescription || "")}
              </p>

              <div class="tags case-study-card-tags">
                ${tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}
              </div>

              <span class="case-study-view-label">
                Explore Case Study →
              </span>

            </div>

          </button>

        </article>
      `;
    })
    .join("");

  caseStudyGridEl.querySelectorAll("[data-case-study-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = caseStudyItems.find(
        (candidate) => candidate.id === button.dataset.caseStudyId,
      );

      if (item) {
        openCaseStudy(item);
      }
    });
  });
}

// =========================================
// Open Case Study
// =========================================

function openCaseStudy(item) {
  if (!caseStudyDialog) return;

  const documents = (item.documents || []).filter(
    (documentItem) => documentItem?.pages?.length,
  );

  if (!documents.length) return;

  activeCaseStudy = {
    ...item,
    documents,
  };

  activeCaseDocumentIndex = 0;
  activeCasePageIndex = 0;

  caseStudyDialogEyebrow.textContent = (
    item.eyebrow || "CASE STUDY"
  ).toUpperCase();

  caseStudyDialogTitle.textContent = item.title || "";

  caseStudyDialogSubtitle.textContent = item.organization || "";

  renderDocumentRail();

  showCaseDocument(0, 0);

  caseStudyDialog.showModal();
}

// =========================================
// Render Document Rail
// =========================================

function renderDocumentRail() {
  if (!activeCaseStudy || !caseStudyDocumentRail) {
    return;
  }

  const groupedDocuments = new Map();

  activeCaseStudy.documents.forEach((documentItem, index) => {
    const phase = documentItem.phase || "Case Study";

    if (!groupedDocuments.has(phase)) {
      groupedDocuments.set(phase, []);
    }

    groupedDocuments.get(phase).push({
      documentItem,
      index,
    });
  });

  caseStudyDocumentRail.innerHTML = Array.from(groupedDocuments.entries())
    .map(([phase, entries]) => {
      return `
          <section class="case-study-rail-group">

            <p class="case-study-rail-phase">
              ${esc(phase)}
            </p>

            <div class="case-study-rail-items">

              ${entries
                .map(
                  ({ documentItem, index }) => `
                    <button
                      class="case-study-document-thumb"
                      type="button"
                      data-case-document-index="${index}"
                      aria-label="View document: ${esc(documentItem.title)}"
                    >

                      <span class="case-study-document-thumb-image">

                        <img
                          src="${esc(documentItem.thumbnail)}"
                          alt=""
                        >

                      </span>

                      <span class="case-study-document-thumb-title">
                        ${esc(documentItem.title)}
                      </span>

                    </button>
                  `,
                )
                .join("")}

            </div>

          </section>
        `;
    })
    .join("");

  caseStudyDocumentRail
    .querySelectorAll("[data-case-document-index]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        showCaseDocument(Number(button.dataset.caseDocumentIndex), 0);
      });
    });
}

// =========================================
// Show Selected Case Study Document
// =========================================

function showCaseDocument(documentIndex, pageIndex = 0) {
  if (!activeCaseStudy?.documents?.length) {
    return;
  }

  const totalDocuments = activeCaseStudy.documents.length;

  activeCaseDocumentIndex =
    ((documentIndex % totalDocuments) + totalDocuments) % totalDocuments;

  const documentItem = activeCaseStudy.documents[activeCaseDocumentIndex];

  if (!documentItem?.pages?.length) {
    return;
  }

  activeCasePageIndex = Math.min(
    Math.max(Number(pageIndex) || 0, 0),
    documentItem.pages.length - 1,
  );

  // =========================================
  // Document heading
  // =========================================

  caseStudyDocumentPhase.textContent = documentItem.phase || "";

  caseStudyDocumentTitle.textContent = documentItem.title || "";

  caseStudyFileType.textContent = documentItem.fileType || "";

  // =========================================
  // Optional: Document Overview
  // =========================================

  const overview =
    typeof documentItem.overview === "string"
      ? documentItem.overview.trim()
      : "";

  caseStudyDocumentOverview.textContent = overview;

  setMetaBlockVisibility(caseStudyDocumentOverview, Boolean(overview));

  // =========================================
  // Optional: Design Decision
  // =========================================

  const designDecision =
    typeof documentItem.designDecision === "string"
      ? documentItem.designDecision.trim()
      : "";

  caseStudyDesignDecision.textContent = designDecision;

  setMetaBlockVisibility(caseStudyDesignDecision, Boolean(designDecision));

  // =========================================
  // Optional: Instructional Design Frameworks
  // =========================================

  const frameworks = Array.isArray(documentItem.frameworks)
    ? documentItem.frameworks.filter(
        (item) => typeof item === "string" && item.trim(),
      )
    : [];

  renderTagList(caseStudyFrameworks, frameworks);

  setMetaBlockVisibility(caseStudyFrameworks, frameworks.length > 0);

  // =========================================
  // Optional: Tools
  // =========================================

  const tools = Array.isArray(documentItem.tools)
    ? documentItem.tools.filter(
        (item) => typeof item === "string" && item.trim(),
      )
    : [];

  renderTagList(caseStudyTools, tools);

  setMetaBlockVisibility(caseStudyTools, tools.length > 0);

  // =========================================
  // Optional: AI Utilized
  // =========================================

  const ai = documentItem.ai || {};

  const hasAiUsedValue = ai.used === true || ai.used === false;

  const aiDescription =
    typeof ai.description === "string" ? ai.description.trim() : "";

  caseStudyAiAnswer.textContent =
    ai.used === true ? "Yes" : ai.used === false ? "No" : "";

  caseStudyAiDescription.textContent = aiDescription;

  setMetaBlockVisibility(
    caseStudyAiAnswer,
    hasAiUsedValue || Boolean(aiDescription),
  );

  // =========================================
  // Original Source File Link
  // =========================================

  if (documentItem.sourceFile) {
    caseStudySourceLink.href = documentItem.sourceFile;

    caseStudySourceLink.hidden = false;

    caseStudySourceLink.textContent =
      documentItem.fileType === "Microsoft Word"
        ? "Open Original Word Document"
        : "View Original Document";
  } else {
    caseStudySourceLink.hidden = true;
  }

  // =========================================
  // Show first/current page
  // =========================================

  showCasePage(activeCasePageIndex);

  // =========================================
  // Update active rail thumbnail
  // =========================================

  caseStudyDocumentRail
    .querySelectorAll(".case-study-document-thumb")
    .forEach((thumbnail, index) => {
      const isActive = index === activeCaseDocumentIndex;

      thumbnail.classList.toggle("active", isActive);

      thumbnail.setAttribute("aria-current", isActive ? "true" : "false");

      if (isActive) {
        thumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    });
}

// =========================================
// Show Document Page
// =========================================

function showCasePage(index) {
  if (!activeCaseStudy?.documents?.length) {
    return;
  }

  const documentItem = activeCaseStudy.documents[activeCaseDocumentIndex];

  const pages = documentItem.pages || [];

  if (!pages.length) return;

  activeCasePageIndex = ((index % pages.length) + pages.length) % pages.length;

  const page = pages[activeCasePageIndex];

  caseStudyMainImage.src = page.src;

  caseStudyMainImage.alt =
    page.alt || `${documentItem.title}, page ${activeCasePageIndex + 1}`;

  caseStudyPageCounter.textContent = `${
    activeCasePageIndex + 1
  } of ${pages.length}`;

  const hasMultiplePages = pages.length > 1;

  caseStudyPagePrev.hidden = !hasMultiplePages;

  caseStudyPageNext.hidden = !hasMultiplePages;

  caseStudyPageCounter.hidden = !hasMultiplePages;
}

// =========================================
// Page Navigation Controls
// =========================================

if (caseStudyPagePrev) {
  caseStudyPagePrev.addEventListener("click", () => {
    showCasePage(activeCasePageIndex - 1);
  });
}

if (caseStudyPageNext) {
  caseStudyPageNext.addEventListener("click", () => {
    showCasePage(activeCasePageIndex + 1);
  });
}

// =========================================
// Case Study Dialog Cleanup
// =========================================

if (caseStudyDialog) {
  caseStudyDialog.addEventListener("close", () => {
    if (caseStudyMainImage) {
      caseStudyMainImage.removeAttribute("src");

      caseStudyMainImage.alt = "";
    }

    activeCaseStudy = null;

    activeCaseDocumentIndex = 0;

    activeCasePageIndex = 0;
  });
}

// =========================================
// Keyboard Navigation
// =========================================

document.addEventListener("keydown", (event) => {
  if (!caseStudyDialog?.open) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();

    showCasePage(activeCasePageIndex - 1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();

    showCasePage(activeCasePageIndex + 1);
  }
});

// =========================================
// Initialize
// =========================================

renderCaseStudyCards();
