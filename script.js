const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const revealItems = [
  ...document.querySelectorAll(".info-card, .tech-layer, .mini-card, .workflow, .final-cta"),
];

function revealPassedItems() {
  const threshold = window.innerHeight * 1.05;
  revealItems.forEach((item) => {
    if (item.classList.contains("is-visible")) return;
    if (item.getBoundingClientRect().top < threshold) {
      item.classList.add("is-visible");
    }
  });
}

function updateHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

function updateActiveLink() {
  const offset = window.innerHeight * 0.35;
  let activeId = sections[0]?.id;

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= offset) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });
}

window.addEventListener("scroll", () => {
  updateHeaderState();
  updateActiveLink();
  revealPassedItems();
}, { passive: true });

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});

updateHeaderState();
updateActiveLink();
revealPassedItems();

if ("IntersectionObserver" in window) {
  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
