document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
const workMessages={
all:{title:"Additional completed work is being prepared.",copy:"The active course above is the current featured build. Completed courses, design-gallery examples, videos, storyboards, guides, and other instructional design artifacts will populate this library as they are added."},
course:{title:"Completed interactive courses will appear here.",copy:"Future completed Storyline and other interactive learning experiences will be added to this collection."},
video:{title:"Video & Animation is being prepared.",copy:"Vyond animation, instructional video, and other multimedia examples will populate this collection as they are completed."},
gallery:{title:"The Design Gallery is being prepared.",copy:"Selected prior-work screenshots will showcase slide design, custom interactions, immersive scenarios, multimedia treatments, and other visual learning experiences."},
document:{title:"Content & Design Documents are being prepared.",copy:"Storyboards, guides, planning artifacts, performance-support resources, and other instructional design documents will populate this collection."}
};
document.querySelectorAll("[data-work-filter]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-work-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");const m=workMessages[b.dataset.workFilter]||workMessages.all;document.getElementById("work-empty-title").textContent=m.title;document.getElementById("work-empty-copy").textContent=m.copy;}));
document.querySelectorAll(".track-click").forEach(a=>a.addEventListener("click",()=>{if(window.zaraz&&typeof window.zaraz.track==="function"){window.zaraz.track("portfolio_click",{action:a.dataset.track,destination:a.getAttribute("href")})}}));
