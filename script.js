const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

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
}, { passive: true });

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});

updateHeaderState();
updateActiveLink();
