document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const workMessages = {
  all: {
    title: "Additional completed work is being prepared.",
    copy: "The active course above is the current featured build. Completed courses, design-gallery examples, videos, storyboards, guides, and other instructional design artifacts will populate this library as they are added."
  },
  course: {
    title: "Completed interactive courses will appear here.",
    copy: "Future completed Storyline and other interactive learning experiences will be added to this collection."
  },
  video: {
    title: "Video & Animation is being prepared.",
    copy: "Vyond animation, instructional video, and other multimedia examples will populate this collection as they are completed."
  },
  gallery: {
    title: "The Design Gallery is being prepared.",
    copy: "Selected prior-work screenshots will showcase slide design, custom interactions, immersive scenarios, multimedia treatments, and other visual learning experiences."
  },
  document: {
    title: "Content & Design Documents are being prepared.",
    copy: "Storyboards, guides, planning artifacts, performance-support resources, and other instructional design documents will populate this collection."
  }
};

document.querySelectorAll("[data-work-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-work-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const message = workMessages[button.dataset.workFilter] || workMessages.all;
    document.getElementById("work-empty-title").textContent = message.title;
    document.getElementById("work-empty-copy").textContent = message.copy;
  });
});

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

// Course preview lightbox. The iframe is loaded only after the visitor requests it,
// which avoids downloading the Storyline package during the initial page load.
const launchCourse = document.getElementById("launch-course");
const previewCourseButton = document.getElementById("preview-course");
const courseDialog = document.getElementById("course-preview-dialog");
const courseFrame = document.getElementById("course-preview-frame");
const modalLaunchCourse = document.getElementById("course-preview-new-window");

if (launchCourse && previewCourseButton && courseDialog && courseFrame) {
  const courseUrl = launchCourse.href;
  if (modalLaunchCourse) modalLaunchCourse.href = courseUrl;

  previewCourseButton.addEventListener("click", () => {
    courseFrame.src = courseUrl;
    courseDialog.showModal();

    if (window.zaraz && typeof window.zaraz.track === "function") {
      window.zaraz.track("portfolio_click", {
        action: "preview_course",
        destination: courseUrl
      });
    }
  });

  courseDialog.addEventListener("close", () => {
    courseFrame.removeAttribute("src");
  });
}

// Update history is data-driven so future notes can be added here without rebuilding
// the lightbox markup. Keep each entry concise for recruiter-friendly scanning.
const courseUpdates = [
  {
    date: "August 9, 2026",
    title: "Current working build",
    copy: "The working course continues to receive content and interaction refinements as development progresses. Recent work has focused on strengthening the learner experience and polishing the current build."
  }
];

const updateHistoryButton = document.getElementById("view-update-history");
const updateHistoryDialog = document.getElementById("update-history-dialog");
const updateHistoryList = document.getElementById("update-history-list");

if (updateHistoryButton && updateHistoryDialog && updateHistoryList) {
  updateHistoryList.innerHTML = courseUpdates.map((update) => `
    <article class="update-entry">
      <time>${update.date}</time>
      <h3>${update.title}</h3>
      <p>${update.copy}</p>
    </article>
  `).join("");

  updateHistoryButton.addEventListener("click", () => updateHistoryDialog.showModal());
}

// Shared close behavior for both lightboxes, including clicking the dimmed backdrop.
document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog")?.close());
});

document.querySelectorAll(".portfolio-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});
