// ============================================
// Footer year
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================
// Typed "whoami" terminal line
// ============================================
const typedTarget = "Omar Seif — Computer Science student, developer, and builder.";
const typedEl = document.getElementById("typedLine");
let typedIndex = 0;

function typeNextChar() {
  if (!typedEl) return;
  if (typedIndex <= typedTarget.length) {
    typedEl.textContent = typedTarget.slice(0, typedIndex);
    typedIndex++;
    setTimeout(typeNextChar, 35);
  }
}
typeNextChar();

// ============================================
// Mobile sidebar toggle
// ============================================
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close sidebar after choosing a section on mobile
  sidebar.querySelectorAll(".file-link").forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ============================================
// Active section highlighting in sidebar + tabs
// ============================================
const fileLinks = document.querySelectorAll(".file-link");
const sections = document.querySelectorAll(".section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        fileLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

// ============================================
// Contact form (front-end only — no backend attached)
// ============================================
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent =
      "This form is a front-end demo. Connect it to a backend or a form service (e.g. Formspree) to receive messages.";
  });
}
