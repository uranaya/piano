// =============================
// ここだけ書き換えれば、外部リンクを変更できます
// =============================

// YouTube埋め込みURL例：
// https://www.youtube.com/embed/動画ID
const YOUTUBE_EMBED_URL = "";

// Googleカレンダー埋め込みURL例：
// https://calendar.google.com/calendar/embed?src=xxxx&ctz=Asia%2FTokyo
const GOOGLE_CALENDAR_EMBED_URL = "";

// GoogleフォームURL例：
// https://docs.google.com/forms/d/e/xxxx/viewform
const GOOGLE_FORM_URL = "";

// 公式LINE URL例：
// https://lin.ee/xxxx
const OFFICIAL_LINE_URL = "";

// =============================
// 通常はここから下は触らなくてOKです
// =============================

function setExternalLinks() {
  const formLinks = [
    document.getElementById("form-link"),
    document.getElementById("hero-form-link")
  ];

  const lineLinks = [
    document.getElementById("line-link"),
    document.getElementById("hero-line-link")
  ];

  formLinks.forEach((link) => {
    if (!link) return;
    if (GOOGLE_FORM_URL) {
      link.href = GOOGLE_FORM_URL;
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.href = "#contact";
    }
  });

  lineLinks.forEach((link) => {
    if (!link) return;
    if (OFFICIAL_LINE_URL) {
      link.href = OFFICIAL_LINE_URL;
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.href = "#contact";
    }
  });
}

function setEmbeds() {
  const youtubeArea = document.getElementById("youtube-area");
  if (youtubeArea && YOUTUBE_EMBED_URL) {
    youtubeArea.classList.remove("placeholder-embed");
    youtubeArea.innerHTML = `<iframe src="${YOUTUBE_EMBED_URL}" title="YouTube動画" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }

  const calendarArea = document.getElementById("calendar-area");
  if (calendarArea && GOOGLE_CALENDAR_EMBED_URL) {
    calendarArea.classList.remove("placeholder-embed");
    calendarArea.innerHTML = `<iframe src="${GOOGLE_CALENDAR_EMBED_URL}" title="Googleカレンダー"></iframe>`;
  }
}

function setNav() {
  const button = document.querySelector(".nav-toggle");
  const nav = document.getElementById("global-nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
setExternalLinks();
setEmbeds();
setNav();
