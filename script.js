const SUPABASE_URL = "https://kdnuotszsmkhojvgptkw.supabase.co";
const SUPABASE_KEY = "sb_publishable_8vQ-AcoAnBVdTz-Cr5_Tdg_6F_5Ap4P";
const TABLE_NAME = "Employee";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

const COL = {
  name: "Name",
  designation: "Designation",
  department: "Department/Office",
  room: "Room",
  email: "Email",
  phone: "Cell",
};

let allEmployees = [];
let searchQuery = "";
let searchDebounceTimer = null;

const employeeListEl = document.getElementById("employeeList");
const loadingStateEl = document.getElementById("loadingState");
const errorStateEl = document.getElementById("errorState");
const errorMessageEl = document.getElementById("errorMessage");
const emptyStateEl = document.getElementById("emptyState");
const searchInputEl = document.getElementById("searchInput");
const clearSearchEl = document.getElementById("clearSearch");
const searchSubmitEl = document.getElementById("searchSubmit");
const resultCountEl = document.getElementById("resultCount");
const retryBtnEl = document.getElementById("retryBtn");
const toastEl = document.getElementById("toast");

const fabBtn = document.getElementById("fabBtn");
const fabOverlay = document.getElementById("fabOverlay");
const closeModalBtn = document.getElementById("closeModal");

function formatRoom(value) {
  if (!value) return "";
  const str = String(value).trim();
  if (/room/i.test(str)) return str;
  return `Room ${str}`;
}

function formatPhoneDisplay(value) {
  if (!value) return "";
  let str = String(value).trim();
  let digits = str.replace(/\D/g, "");

  if (digits.startsWith("880")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  if (/^\d{10}$/.test(digits)) {
    return `+880 ${digits.slice(0, 4)}-${digits.slice(4)}`;
  }

  return str;
}

function formatPhoneTel(value) {
  if (!value) return "";
  let digits = String(value).replace(/\D/g, "");

  if (digits.startsWith("880")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  if (/^\d{10}$/.test(digits)) {
    return `+880${digits}`;
  }

  return String(value).replace(/[^\d+]/g, "");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

function normalize(str) {
  return String(str || "")
    .toLowerCase()
    .trim();
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toastEl.classList.remove("is-visible");
  }, 2200);
}

function buildShareText(emp) {
  const lines = [
    emp[COL.name],
    emp[COL.designation],
    emp[COL.department],
    formatRoom(emp[COL.room]),
    emp[COL.email] ? `Email: ${emp[COL.email]}` : null,
    emp[COL.phone] ? `Phone: ${formatPhoneDisplay(emp[COL.phone])}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

function renderEmployeeCard(emp) {
  const name = emp[COL.name] || "Unnamed";
  const designation = emp[COL.designation] || "";
  const department = emp[COL.department] || "";
  const room = formatRoom(emp[COL.room]);
  const email = emp[COL.email] || "";
  const phoneRaw = emp[COL.phone] || "";
  const phoneDisplay = formatPhoneDisplay(phoneRaw);
  const phoneTel = formatPhoneTel(phoneRaw);

  const li = document.createElement("li");
  li.className = "employee-card";

  li.innerHTML = `
    <div class="employee-card__body">
      <div class="employee-card__top">
        <h3 class="employee-card__name">${escapeHtml(name)}</h3>
        ${
          designation || room
            ? `<p class="employee-card__designation-row">
                ${designation ? `<span class="employee-card__designation">${escapeHtml(designation)}</span>` : ""}
                ${room ? `<span class="employee-card__room">${escapeHtml(room)}</span>` : ""}
              </p>`
            : ""
        }
        ${department ? `<p class="employee-card__department">${escapeHtml(department)}</p>` : ""}
      </div>

      <div class="employee-card__contacts">
        ${
          email
            ? `
        <a class="contact-tile" href="mailto:${encodeURIComponent(email)}">
          <span class="contact-tile__icon">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>
            </svg>
          </span>
          <span class="contact-tile__text">
            <span class="contact-tile__value">${escapeHtml(email)}</span>
            <span class="contact-tile__hint">Tap to email</span>
          </span>
        </a>`
            : ""
        }

        ${
          phoneDisplay
            ? `
        <a class="contact-tile" href="tel:${encodeURIComponent(phoneTel)}">
          <span class="contact-tile__icon">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.99.34 1.97.62 2.92a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.16-1.16a2 2 0 0 1 2.11-.45c.95.28 1.93.49 2.92.62A2 2 0 0 1 22 16.92Z"/>
            </svg>
          </span>
          <span class="contact-tile__text">
            <span class="contact-tile__value">${escapeHtml(phoneDisplay)}</span>
            <span class="contact-tile__hint">Tap to call</span>
          </span>
        </a>`
            : ""
        }
      </div>

      <div class="employee-card__actions">
        <button class="action-btn action-btn--copy" type="button">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy
        </button>
        <button class="action-btn action-btn--share" type="button">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.6" y1="10.5" x2="15.4" y2="6.5"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/>
          </svg>
          Share
        </button>
      </div>
    </div>
  `;

  return li;
}

function renderList(employees) {
  employeeListEl.innerHTML = "";
  const frag = document.createDocumentFragment();

  employees.forEach((emp, idx) => {
    const card = renderEmployeeCard(emp);
    card.style.animationDelay = `${Math.min(idx, 12) * 28}ms`;
    card.dataset.index = String(idx);
    frag.appendChild(card);
  });

  employeeListEl.appendChild(frag);
}

function updateResultCount(count, total) {
  if (!searchQuery) {
    resultCountEl.textContent =
      total === 1 ? "1 employee listed" : `${total} employees listed`;
  } else {
    resultCountEl.textContent =
      count === 1 ? "1 match found" : `${count} matches found`;
  }
}

function applyFilterAndRender() {
  const q = normalize(searchQuery);
  let filtered = allEmployees;

  if (q) {
    filtered = allEmployees.filter((emp) => {
      return (
        normalize(emp[COL.name]).includes(q) ||
        normalize(emp[COL.designation]).includes(q) ||
        normalize(emp[COL.department]).includes(q)
      );
    });
  }

  updateResultCount(filtered.length, allEmployees.length);

  if (filtered.length === 0) {
    employeeListEl.innerHTML = "";
    emptyStateEl.hidden = false;
  } else {
    emptyStateEl.hidden = true;
    renderList(filtered);
  }

  applyFilterAndRender._current = filtered;
}

async function loadEmployees() {
  loadingStateEl.hidden = false;
  errorStateEl.hidden = true;
  emptyStateEl.hidden = true;
  employeeListEl.innerHTML = "";

  try {
    const { data, error } = await db
      .from(TABLE_NAME)
      .select("*")
      .order(COL.name, { ascending: true });

    if (error) throw error;

    allEmployees = data || [];
    loadingStateEl.hidden = true;
    applyFilterAndRender();
  } catch (err) {
    console.error("Failed to load employees:", err);
    loadingStateEl.hidden = true;
    errorStateEl.hidden = false;
    errorMessageEl.textContent =
      err.message || "Please check your connection and try again.";
  }
}

employeeListEl.addEventListener("click", async (e) => {
  const card = e.target.closest(".employee-card");
  if (!card) return;

  const idx = Number(card.dataset.index);
  const emp = (applyFilterAndRender._current || allEmployees)[idx];
  if (!emp) return;

  if (e.target.closest(".action-btn--copy")) {
    const btn = e.target.closest(".action-btn--copy");
    try {
      await navigator.clipboard.writeText(buildShareText(emp));
      btn.classList.add("action-btn--copied");
      showToast("Copied to clipboard");
      setTimeout(() => btn.classList.remove("action-btn--copied"), 1600);
    } catch (err) {
      showToast("Could not copy — try again");
    }
  }

  if (e.target.closest(".action-btn--share")) {
    const text = buildShareText(emp);
    if (navigator.share) {
      try {
        await navigator.share({
          title: emp[COL.name] || "IUBAT Employee",
          text,
        });
      } catch (err) {
        // user cancelled the share sheet
      }
    } else {
      try {
        await navigator.clipboard.writeText(text);
        showToast("Sharing not supported — copied instead");
      } catch (err) {
        showToast("Could not share on this device");
      }
    }
  }
});

searchInputEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  clearSearchEl.hidden = searchQuery.length === 0;

  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    applyFilterAndRender();
  }, 80);
});

searchInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    clearTimeout(searchDebounceTimer);
    applyFilterAndRender();
    searchInputEl.blur();
  }
});

searchSubmitEl.addEventListener("click", () => {
  clearTimeout(searchDebounceTimer);
  applyFilterAndRender();
  searchInputEl.blur();
});

clearSearchEl.addEventListener("click", () => {
  searchQuery = "";
  searchInputEl.value = "";
  clearSearchEl.hidden = true;
  searchInputEl.focus();
  applyFilterAndRender();
});

retryBtnEl.addEventListener("click", loadEmployees);

function openModal() {
  fabOverlay.hidden = false;
  fabBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  fabOverlay.hidden = true;
  fabBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

fabBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
fabOverlay.addEventListener("click", (e) => {
  if (e.target === fabOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !fabOverlay.hidden) closeModal();
});

loadEmployees();
