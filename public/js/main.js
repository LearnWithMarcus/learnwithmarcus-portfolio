// =========================================
// Smooth in-page navigation
// =========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =========================================
// Selected Work filters
// =========================================

const workMessages = {
  course: {
    title: "Completed interactive courses will appear here.",
    copy: "Future completed Storyline and other interactive learning experiences will be added to this collection."
  },
  video: {
    title: "Video & Animation is being prepared.",
    copy: "Vyond animation, instructional video, and other multimedia examples will populate this collection as they are completed."
  },
  document: {
    title: "Content & Design Documents are being prepared.",
    copy: "Storyboards, guides, planning artifacts, performance-support resources, and other instructional design documents will populate this collection."
  }
};

const designGalleryItems = Array.isArray(window.designGalleryItems)
  ? window.designGalleryItems
  : [];

const workEmptyState = document.getElementById("work-empty-state");
const workEmptyTitle = document.getElementById("work-empty-title");
const workEmptyCopy = document.getElementById("work-empty-copy");
const designGalleryGrid = document.getElementById("design-gallery");
const priorWorkDisclaimer = document.getElementById("prior-work-disclaimer");

function setWorkView(filter) {
  const showGallery = filter === "gallery" || filter === "all";

  if (designGalleryGrid) {
    designGalleryGrid.hidden = !showGallery;
  }

  if (workEmptyState) {
    workEmptyState.hidden = showGallery;
  }

  if (!showGallery && workMessages[filter]) {
    if (workEmptyTitle) workEmptyTitle.textContent = workMessages[filter].title;
    if (workEmptyCopy) workEmptyCopy.textContent = workMessages[filter].copy;
  }

  if (priorWorkDisclaimer) {
    priorWorkDisclaimer.hidden = !showGallery;
  }
}

document.querySelectorAll("[data-work-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-work-filter]")
      .forEach((item) => item.classList.remove("active"));

    button.classList.add("active");
    setWorkView(button.dataset.workFilter);
  });
});

// =========================================
// Optional click tracking
// =========================================

function trackPortfolioClick(element) {
  if (window.zaraz && typeof window.zaraz.track === "function") {
    window.zaraz.track("portfolio_click", {
      action: element.dataset.track,
      destination: element.getAttribute("href")
    });
  }
}

document.querySelectorAll(".track-click").forEach((link) => {
  link.addEventListener("click", () => trackPortfolioClick(link));
});

// =========================================
// Embedded course lightbox
// =========================================

const launchCourse = document.getElementById("launch-course");
const viewCourseButton = document.getElementById("view-course-here");
const courseDialog = document.getElementById("course-dialog");
const courseFrame = document.getElementById("course-frame");
const modalLaunchCourse = document.getElementById("course-new-window");

if (launchCourse && viewCourseButton && courseDialog && courseFrame) {
  const courseUrl = launchCourse.href;

  if (modalLaunchCourse) {
    modalLaunchCourse.href = courseUrl;
  }

  viewCourseButton.addEventListener("click", () => {
    courseFrame.src = courseUrl;
    courseDialog.showModal();

    if (window.zaraz && typeof window.zaraz.track === "function") {
      window.zaraz.track("portfolio_click", {
        action: "view_course_here",
        destination: courseUrl
      });
    }
  });

  courseDialog.addEventListener("close", () => {
    courseFrame.removeAttribute("src");
  });
}

// =========================================
// Active Development update history
// =========================================

// The complete update timeline now lives in one place: ACTIVE_DEVELOPMENT.updates
// in index.html. Add new entries to the TOP of that array and keep older entries.
const courseUpdates =
  typeof ACTIVE_DEVELOPMENT !== "undefined" &&
  Array.isArray(ACTIVE_DEVELOPMENT.updates)
    ? ACTIVE_DEVELOPMENT.updates
    : [];

const updateHistoryButton = document.getElementById("view-update-history");
const updateHistoryDialog = document.getElementById("update-history-dialog");
const updateHistoryList = document.getElementById("update-history-list");

if (updateHistoryButton && updateHistoryDialog && updateHistoryList) {
  updateHistoryList.innerHTML = courseUpdates
    .map(
      (update) => `
        <article class="update-entry">
          <time>${update.date}</time>
          <h3>${update.title}</h3>
          <p>${update.copy}</p>
        </article>
      `
    )
    .join("");

  updateHistoryButton.addEventListener("click", () =>
    updateHistoryDialog.showModal()
  );
}

// =========================================
// Design Gallery cards + multi-image lightbox
// =========================================

const galleryDialog = document.getElementById("gallery-dialog");
const galleryDialogCategory = document.getElementById("gallery-dialog-category");
const galleryDialogTitle = document.getElementById("gallery-dialog-title");
const galleryDescription = document.getElementById("gallery-description");
const galleryTools = document.getElementById("gallery-tools");
const galleryTags = document.getElementById("gallery-tags");
const galleryMainImage = document.getElementById("gallery-main-image");
const galleryImageCaption = document.getElementById("gallery-image-caption");
const galleryCounter = document.getElementById("gallery-counter");
const galleryThumbnails = document.getElementById("gallery-thumbnails");
const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");

let activeGalleryItem = null;
let activeGalleryIndex = 0;

function renderGalleryCards() {
  if (!designGalleryGrid) return;

  if (!designGalleryItems.length) {
    designGalleryGrid.innerHTML = `
      <div class="coming-soon gallery-empty">
        <h3>Design Gallery items are being prepared.</h3>
      </div>
    `;
    return;
  }

  designGalleryGrid.innerHTML = designGalleryItems
    .map((item) => {
      const imageCount = item.images?.length || 0;
      const visibleTags = (item.tags || []).slice(0, 3);

      return `
        <article class="gallery-card">
          <button
            class="gallery-card-button"
            type="button"
            data-gallery-id="${item.id}"
            aria-label="View ${item.title}"
          >
            <div class="gallery-card-image">
              <img src="${item.thumbnail}" alt="">
              <span class="gallery-image-count">${imageCount} image${imageCount === 1 ? "" : "s"}</span>
            </div>

            <div class="gallery-card-copy">
              <p class="eyebrow">${item.category}</p>
              <h3>${item.title}</h3>
              <p>${item.shortDescription}</p>

              <div class="tags gallery-card-tags">
                ${visibleTags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>

              <span class="gallery-view-label">View Gallery →</span>
            </div>
          </button>
        </article>
      `;
    })
    .join("");

  designGalleryGrid
    .querySelectorAll("[data-gallery-id]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const item = designGalleryItems.find(
          (candidate) => candidate.id === button.dataset.galleryId
        );

        if (item) openGalleryItem(item);
      });
    });
}

function openGalleryItem(item) {
  if (!galleryDialog || !item?.images?.length) return;

  activeGalleryItem = item;
  activeGalleryIndex = Math.min(
    Math.max(Number(item.featuredImage) || 0, 0),
    item.images.length - 1
  );

  galleryDialogCategory.textContent = item.category.toUpperCase();
  galleryDialogTitle.textContent = item.title;
  galleryDescription.textContent = item.description;
  galleryTools.textContent = (item.tools || []).join(" · ");

  galleryTags.innerHTML = (item.tags || [])
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  galleryThumbnails.innerHTML = item.images
    .map(
      (image, index) => `
        <button
          class="gallery-thumbnail"
          type="button"
          data-gallery-index="${index}"
          aria-label="View image ${index + 1}: ${image.title || item.title}"
        >
          <img src="${image.src}" alt="">
        </button>
      `
    )
    .join("");

  galleryThumbnails
    .querySelectorAll("[data-gallery-index]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        showGalleryImage(Number(button.dataset.galleryIndex));
      });
    });

  showGalleryImage(activeGalleryIndex);
  galleryDialog.showModal();
}

function showGalleryImage(index) {
  if (!activeGalleryItem?.images?.length) return;

  const total = activeGalleryItem.images.length;
  activeGalleryIndex = (index + total) % total;

  const image = activeGalleryItem.images[activeGalleryIndex];

  galleryMainImage.src = image.src;
  galleryMainImage.alt = image.alt || activeGalleryItem.title;

  galleryCounter.textContent = `${activeGalleryIndex + 1} of ${total}`;

  if (image.title || image.caption) {
    galleryImageCaption.innerHTML = `
      ${image.title ? `<strong>${image.title}</strong>` : ""}
      ${image.caption ? `<span>${image.caption}</span>` : ""}
    `;
  } else {
    galleryImageCaption.textContent = "";
  }

  galleryThumbnails
    .querySelectorAll(".gallery-thumbnail")
    .forEach((thumbnail, thumbnailIndex) => {
      const isActive = thumbnailIndex === activeGalleryIndex;
      thumbnail.classList.toggle("active", isActive);
      thumbnail.setAttribute("aria-current", isActive ? "true" : "false");

      if (isActive) {
        thumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    });
}

if (galleryPrev) {
  galleryPrev.addEventListener("click", () =>
    showGalleryImage(activeGalleryIndex - 1)
  );
}

if (galleryNext) {
  galleryNext.addEventListener("click", () =>
    showGalleryImage(activeGalleryIndex + 1)
  );
}

if (galleryDialog) {
  galleryDialog.addEventListener("close", () => {
    if (galleryMainImage) {
      galleryMainImage.removeAttribute("src");
      galleryMainImage.alt = "";
    }

    activeGalleryItem = null;
    activeGalleryIndex = 0;
  });
}

document.addEventListener("keydown", (event) => {
  if (!galleryDialog?.open) return;

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showGalleryImage(activeGalleryIndex - 1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    showGalleryImage(activeGalleryIndex + 1);
  }
});

// =========================================
// Shared dialog close behavior
// =========================================

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog")?.close());
});

document.querySelectorAll(".portfolio-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

// Render gallery and preserve whichever Selected Work filter is marked active in index.html.
renderGalleryCards();

const initialWorkFilter =
  document.querySelector("[data-work-filter].active")?.dataset.workFilter ||
  "gallery";

setWorkView(initialWorkFilter);
