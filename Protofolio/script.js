(function typing() {
  const text = "WELCOME TO MY WORLD ✨";
  const el = document.querySelector(".eyebrow");
  if (!el) return;
  let i = 0;
  el.textContent = "";
  const t = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(t);
  }, 30);
})();
// Scrollspy - Update Active Nav Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

function activateNavLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

window.addEventListener("scroll", activateNavLink);

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -40px 0px"
};

const onEntry = (entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const delay = parseFloat(el.dataset.delay) || 0;
    setTimeout(() => {
      el.classList.add('appear');
    }, delay * 600);
    obs.unobserve(el);
  });
};

const observer = new IntersectionObserver(onEntry, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('.project').forEach(p => {
  p.addEventListener('click', (e) => {
  
    const overlay = p.querySelector('.project-overlay');
    if (overlay) {
      overlay.style.opacity = 1;
      setTimeout(() => {
        overlay.style.opacity = 0.95;
        setTimeout(() => overlay.style.opacity = 1, 100);
      }, 10);
    }
  });
});
