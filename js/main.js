// ==========================================================================
// main.js — shared behaviour across all pages
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initTerminalTyping();
  initSkillBars();
  initRevealOnScroll();
  initFooterYear();
});

/* ---------- mobile nav ---------- */
function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

/* ---------- hero terminal typing effect ---------- */
function initTerminalTyping() {
  const el = document.querySelector("[data-terminal-body]");
  if (!el) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const lines = [
    { html: '<span class="prompt">$</span> go run pulock.go', pause: 450 },
    { html: '<span class="comment">// booting profile...</span>', pause: 350 },
    { html: '<span class="out">name     </span><span class="gold">Pulock Kumar</span>', pause: 150 },
    { html: '<span class="out">role     </span><span class="gold">Backend Engineer (Go)</span>', pause: 150 },
    { html: '<span class="out">study    </span><span class="gold">CSE, DUET — 2nd Year</span>', pause: 150 },
    { html: '<span class="out">stack    </span><span class="gold">Go · PostgreSQL · JavaScript</span>', pause: 150 },
    { html: '<span class="out">building </span><span class="gold">Branotix — mentorship platform</span>', pause: 250 },
    { html: '<span class="ok">✓ status: shipping in public</span>', pause: 0 }
  ];

  if (reduceMotion) {
    el.innerHTML = lines.map((l) => `<div>${l.html}</div>`).join("");
    return;
  }

  el.innerHTML = "";
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      const caret = document.createElement("span");
      caret.className = "caret";
      el.appendChild(caret);
      return;
    }
    const wrapper = document.createElement("div");
    el.appendChild(wrapper);
    const full = lines[lineIndex].html;
    // reveal instantly per-line (typing char-by-char on HTML is fragile) with a small stagger
    wrapper.innerHTML = full;
    wrapper.style.opacity = "0";
    wrapper.style.transition = "opacity .25s ease";
    requestAnimationFrame(() => (wrapper.style.opacity = "1"));
    lineIndex++;
    setTimeout(typeLine, lines[lineIndex - 1].pause + 260);
  }
  typeLine();
}

/* ---------- animated skill bars ---------- */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-fill[data-fill]");
  if (!bars.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.width = el.dataset.fill + "%";
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((b) => {
    b.style.width = "0%";
    b.style.transition = "width 900ms cubic-bezier(.2,.7,.2,1)";
    io.observe(b);
  });
}

/* ---------- gentle reveal on scroll ---------- */
/* Robustness: content must never be permanently invisible if JS/IO
   misbehaves — every path below ends with items visible. */
function initRevealOnScroll() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || typeof IntersectionObserver === "undefined") {
    return; // leave items in their natural, fully visible state
  }

  const reveal = (el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  };

  try {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = `opacity .5s ease ${(i % 6) * 60}ms, transform .5s ease ${(i % 6) * 60}ms`;
      io.observe(el);
    });

    // Safety net: if an item is somehow never intersected (e.g. it's
    // already in view before the observer attaches, or sits in a
    // layout the browser reports oddly), force-reveal everything
    // shortly after load so nothing stays hidden.
    window.setTimeout(() => items.forEach(reveal), 1200);
  } catch (e) {
    items.forEach(reveal);
  }
}

function initFooterYear() {
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
}
