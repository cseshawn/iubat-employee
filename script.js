/**
 * IUBAT Employee Directory — script.js
 * Supabase-connected employee directory with search, filter,
 * sort, pagination, copy-to-clipboard, FAB, and feedback modal.
 *
 * Mobile view renders each employee as a stacked "contact card"
 * box (Name / Designation / Department / Room / Email / Phone),
 * each field on its own line, wrapping naturally so it always
 * fits the phone screen — with a one-tap Copy button.
 */

"use strict";

/* ── Config ─────────────────────────────────────────────── */
const SUPABASE_URL = "https://kkhwsjfloftekkzisrak.supabase.co";
const SUPABASE_KEY = "sb_publishable_jJFUr_C6YXjG6zy1OvLK2Q_SkWqFTLO";
const TABLE_NAME = "Employee";
const FEEDBACK_EMAIL = "shawn.iubat@gmail.com";

/* ── Shared inline icons ─────────────────────────────────── */
const ICON_EMAIL = `<svg class="contact-chip__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3.5 5.5l6.5 5 6.5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ICON_PHONE = `<svg class="contact-chip__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5.2 3h2.1c.4 0 .8.3.9.7l.8 2.7c.1.4 0 .8-.3 1.1L7.4 8.8c.8 1.9 2.1 3.2 4 4l1.3-1.3c.3-.3.7-.4 1.1-.3l2.7.8c.4.1.7.5.7.9v2.1c0 .6-.5 1-1 1-6 .2-11.4-5.2-11.2-11.2 0-.5.4-1 .2-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

/* ── State ──────────────────────────────────────────────── */
let allEmployees = []; // raw data from Supabase
let filteredData = []; // after search + dept filter
let currentPage = 1;
let rowsPerPage = 20;
let sortCol = "Name";
let sortDir = "asc"; // 'asc' | 'desc'
let searchQuery = "";
let deptFilter = "";
let fabOpen = false;
let toastTimer = null;

/* ── DOM refs ───────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);

const els = {
  loading: $("loading-state"),
  error: $("error-state"),
  errorTitle: $("error-title"),
  errorMsg: $("error-message"),
  empty: $("empty-state"),
  tableWrap: $("table-wrap"),
  tableBody: $("table-body"),
  mobileCards: $("mobile-cards-list"),
  searchInput: $("search-input"),
  clearBtn: $("clear-search"),
  deptFilter: $("dept-filter"),
  rowsPerPage: $("rows-per-page"),
  statTotal: $("stat-total"),
  statShowing: $("stat-showing"),
  statDepts: $("stat-depts"),
  pagination: $("pagination"),
  pageNumbers: $("page-numbers"),
  btnPrev: $("btn-prev"),
  btnNext: $("btn-next"),
  toast: $("toast"),
  lastUpdated: $("last-updated"),
  fabActions: $("fab-actions"),
  fabMain: $("fab-main"),
  fabIconPlus: document.querySelector(".fab-icon--plus"),
  fabIconClose: document.querySelector(".fab-icon--close"),
  modal: $("feedback-modal"),
};

/* ── Init ───────────────────────────────────────────────── */
async function initApp() {
  showState("loading");
  try {
    const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data, error } = await client
      .from(TABLE_NAME)
      .select("*")
      .order("Name", { ascending: true });

    if (error) {
      throw new Error(error.message || "Database error");
    }

    allEmployees = data || [];
    buildDeptFilter();
    updateLastUpdated();
    applyFilters();
    showState("table");
  } catch (err) {
    console.error("[IUBAT Directory]", err);
    els.errorTitle.textContent = "Connection Failed";
    els.errorMsg.textContent =
      err.message || "Unable to reach the database. Check your credentials.";
    showState("error");
  }
}

/* ── State management ───────────────────────────────────── */
function showState(state) {
  els.loading.classList.add("hidden");
  els.error.classList.add("hidden");
  els.empty.classList.add("hidden");
  els.tableWrap.classList.add("hidden");

  if (state === "loading") els.loading.classList.remove("hidden");
  if (state === "error") els.error.classList.remove("hidden");
  if (state === "empty") els.empty.classList.remove("hidden");
  if (state === "table") els.tableWrap.classList.remove("hidden");
}

/* ── Department filter builder ──────────────────────────── */
function buildDeptFilter() {
  const depts = [
    ...new Set(
      allEmployees
        .map((e) => (e["Department or Office"] || "").trim())
        .filter(Boolean),
    ),
  ].sort();

  while (els.deptFilter.options.length > 1) els.deptFilter.remove(1);

  depts.forEach((dept) => {
    const opt = document.createElement("option");
    opt.value = dept;
    opt.textContent = dept;
    els.deptFilter.appendChild(opt);
  });

  els.statDepts.textContent = depts.length;
  els.statTotal.textContent = allEmployees.length;
}

/* ── Filters + Sort ─────────────────────────────────────── */
function applyFilters() {
  const q = searchQuery.toLowerCase().trim();

  filteredData = allEmployees.filter((emp) => {
    if (deptFilter && (emp["Department or Office"] || "").trim() !== deptFilter)
      return false;
    if (q) {
      const haystack = [
        emp.Name || "",
        emp.Designation || "",
        emp["Department or Office"] || "",
        emp.Email || "",
        emp.Cell || "",
        emp.Room || "",
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  filteredData.sort((a, b) => {
    const valA = (a[sortCol] || "").toString().toLowerCase();
    const valB = (b[sortCol] || "").toString().toLowerCase();
    return sortDir === "asc"
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });

  currentPage = 1;
  els.statShowing.textContent = filteredData.length;
  renderAll();

  if (filteredData.length === 0 && (q || deptFilter)) {
    showState("empty");
  } else {
    showState("table");
  }
}

function renderAll() {
  renderTable();
  renderMobileCards();
  renderPagination();
}

/* ── Desktop Table Render ───────────────────────────────── */
function renderTable() {
  const start = (currentPage - 1) * rowsPerPage;
  const slice = filteredData.slice(start, start + rowsPerPage);

  if (slice.length === 0) {
    els.tableBody.innerHTML =
      '<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--text-muted)">No records on this page.</td></tr>';
    return;
  }

  els.tableBody.innerHTML = slice
    .map((emp, idx) => {
      const globalIdx = start + idx;
      const name = escHtml(emp.Name || "—");
      const desig = escHtml(emp.Designation || "—");
      const dept = escHtml(emp["Department or Office"] || "—");
      const room = escHtml(emp.Room || "—");
      const email = emp.Email ? emp.Email.trim() : "";
      const cell = emp.Cell ? emp.Cell.trim() : "";

      const emailHtml = email
        ? `<a class="contact-chip contact-chip--email" href="mailto:${escHtml(email)}" title="Click to email">
          ${ICON_EMAIL}<span class="contact-chip__text">${escHtml(email)}</span>
        </a>`
        : '<span style="color:var(--text-muted)">—</span>';

      const cellHtml = cell
        ? `<a class="contact-chip contact-chip--phone" href="tel:${escHtml(cell)}" title="Click to call">
          ${ICON_PHONE}<span class="contact-chip__text">${escHtml(cell)}</span>
        </a>`
        : '<span style="color:var(--text-muted)">—</span>';

      return `
      <tr>
        <td class="cell-name">${name}</td>
        <td class="cell-designation">${desig}</td>
        <td><span class="dept-badge" title="${dept}">${dept}</span></td>
        <td class="cell-room">${room}</td>
        <td>${emailHtml}</td>
        <td>${cellHtml}</td>
        <td class="col-action-cell">
          <button class="btn-copy-row" onclick="copyRow(${globalIdx})" title="Copy employee info">
            <svg viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 11V3a1 1 0 011-1h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Copy
          </button>
        </td>
      </tr>`;
    })
    .join("");
}

/* ── Mobile Contact-Card Render ──────────────────────────
 * Each employee is shown as a stacked box:
 *   Name,
 *   Designation,
 *   Department,
 *   Room # ___,
 *   email,
 *   phone
 * Every field sits on its own line and wraps normally, so
 * long names/departments never get clipped or overflow the
 * phone's width — and a Copy button copies the same text.
 * ────────────────────────────────────────────────────── */
function renderMobileCards() {
  const start = (currentPage - 1) * rowsPerPage;
  const slice = filteredData.slice(start, start + rowsPerPage);

  if (slice.length === 0) {
    els.mobileCards.innerHTML = "";
    return;
  }

  els.mobileCards.innerHTML = slice
    .map((emp, idx) => {
      const globalIdx = start + idx;
      const name = (emp.Name || "").trim();
      const desig = (emp.Designation || "").trim();
      const dept = (emp["Department or Office"] || "").trim();
      const room = formatRoom(emp.Room);
      const email = (emp.Email || "").trim();
      const cell = (emp.Cell || "").trim();

      // Plain descriptive fields — comma-joined, each on its own line,
      // no trailing comma on the very last one.
      const infoFields = [name, desig, dept, room].filter(Boolean);
      const infoHtml = infoFields
        .map((text, i) => {
          const suffix = i === infoFields.length - 1 ? "" : ",";
          const extraCls =
            i === 0
              ? " mobile-card__field--name"
              : i === 1 && desig
                ? " mobile-card__field--designation"
                : "";
          return `<p class="mobile-card__field${extraCls}">${escHtml(text)}${suffix}</p>`;
        })
        .join("");

      // Email / phone are shown as clearly tappable action rows —
      // icon + value + a plain-language hint of what tapping does.
      const actionsHtml = `
      ${
        email
          ? `
        <a class="mobile-card__action mobile-card__action--email" href="mailto:${escHtml(email)}">
          <span class="mobile-card__action-icon">${ICON_EMAIL}</span>
          <span class="mobile-card__action-body">
            <span class="mobile-card__action-text">${escHtml(email)}</span>
            <span class="mobile-card__action-hint">Tap to email</span>
          </span>
        </a>`
          : ""
      }
      ${
        cell
          ? `
        <a class="mobile-card__action mobile-card__action--phone" href="tel:${escHtml(cell)}">
          <span class="mobile-card__action-icon">${ICON_PHONE}</span>
          <span class="mobile-card__action-body">
            <span class="mobile-card__action-text">${escHtml(cell)}</span>
            <span class="mobile-card__action-hint">Tap to call</span>
          </span>
        </a>`
          : ""
      }
    `;

      return `
      <div class="mobile-card">
        <div class="mobile-card__accent"></div>
        <div class="mobile-card__body">
          ${infoHtml}
        </div>
        ${email || cell ? `<div class="mobile-card__actions">${actionsHtml}</div>` : ""}
        <div class="mobile-card__footer">
          <button class="btn-copy-card" onclick="copyCard(${globalIdx}, this)" title="Copy employee info">
            <svg class="btn-copy-card__icon" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 11V3a1 1 0 011-1h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <svg class="btn-copy-card__check" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span class="btn-copy-card__label">Copy</span>
          </button>
        </div>
      </div>`;
    })
    .join("");
}

/* ── Column sort ────────────────────────────────────────── */
function initSortHeaders() {
  document.querySelectorAll(".dir-table th.sortable").forEach((th) => {
    th.addEventListener("click", () => {
      const col = th.dataset.col;
      if (sortCol === col) {
        sortDir = sortDir === "asc" ? "desc" : "asc";
      } else {
        sortCol = col;
        sortDir = "asc";
      }
      document.querySelectorAll(".dir-table th.sortable").forEach((t) => {
        t.classList.remove("sort-asc", "sort-desc");
      });
      th.classList.add(sortDir === "asc" ? "sort-asc" : "sort-desc");
      applyFilters();
    });
  });
}

/* ── Pagination ─────────────────────────────────────────── */
function renderPagination() {
  const totalPages = Math.max(1, Math.ceil(filteredData.length / rowsPerPage));

  els.btnPrev.disabled = currentPage === 1;
  els.btnNext.disabled = currentPage === totalPages;

  const pages = getPagesArray(currentPage, totalPages);
  els.pageNumbers.innerHTML = pages
    .map((p) => {
      if (p === "…") return `<span class="page-ellipsis">…</span>`;
      return `<button class="page-num${p === currentPage ? " active" : ""}" onclick="goToPage(${p})">${p}</button>`;
    })
    .join("");
}

function getPagesArray(cur, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [];
  pages.push(1);
  if (cur > 3) pages.push("…");
  for (let p = Math.max(2, cur - 1); p <= Math.min(total - 1, cur + 1); p++)
    pages.push(p);
  if (cur < total - 2) pages.push("…");
  pages.push(total);
  return pages;
}

function goToPage(p) {
  currentPage = p;
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ── Utility: Room label formatter ───────────────────────
 * Some records already store the full label (e.g. "Room # 426"
 * or "Room 426") in the Room field. Only prepend "Room # " when
 * the raw value doesn't already say "room", so it's never shown
 * twice (e.g. "Room # Room # 426").
 * ────────────────────────────────────────────────────── */
function formatRoom(room) {
  const trimmed = (room || "").trim();
  if (!trimmed) return "";
  return /room/i.test(trimmed) ? trimmed : `Room # ${trimmed}`;
}

/* ── Utility: HTML escape ───────────────────────────────── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ── Build plain-text contact block for copying ─────────── */
function buildContactText(emp) {
  const name = (emp.Name || "").trim();
  const desig = (emp.Designation || "").trim();
  const dept = (emp["Department or Office"] || "").trim();
  const room = formatRoom(emp.Room);
  const email = (emp.Email || "").trim();
  const cell = (emp.Cell || "").trim();

  const fields = [];
  if (name) fields.push(name);
  if (desig) fields.push(desig);
  if (dept) fields.push(dept);
  if (room) fields.push(room);
  if (email) fields.push(email);
  if (cell) fields.push(cell);

  // Join with ",\n" and end without a trailing comma
  return fields.join(",\n");
}

/**
 * Copy text to the clipboard as reliably as possible across browsers.
 *
 * Why this matters: the async Clipboard API (navigator.clipboard.writeText)
 * silently fails on some mobile browsers unless it is called at the very
 * top of a user-gesture handler with the page already focused — which is
 * why the old implementation "worked after scrolling" (scrolling/tapping
 * elsewhere had given the document focus) but often failed on a first tap.
 *
 * The synchronous document.execCommand('copy') fallback does not have
 * that focus requirement, so we try it FIRST — it works consistently
 * inside any click handler — and only reach for the modern async API
 * if the legacy method isn't available.
 */
function copyTextToClipboard(text, onDone) {
  let copied = false;

  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.left = "0";
    ta.style.opacity = "0";
    ta.style.pointerEvents = "none";
    document.body.appendChild(ta);

    const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent);
    if (isIOS) {
      // iOS ignores select() on a non-editable element unless a range is set.
      const range = document.createRange();
      range.selectNodeContents(ta);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      ta.setSelectionRange(0, text.length);
    } else {
      ta.focus();
      ta.select();
    }

    copied = document.execCommand("copy");
    document.body.removeChild(ta);
  } catch (err) {
    copied = false;
  }

  if (copied) {
    onDone();
    return;
  }

  // Fallback: modern async Clipboard API (secure contexts only).
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(onDone)
      .catch(() => onDone());
  } else {
    onDone();
  }
}

/* ── Copy row (desktop table) ───────────────────────────── */
function copyRow(idx) {
  const emp = filteredData[idx];
  if (!emp) return;
  copyTextToClipboard(buildContactText(emp), () => {
    showToast("✅ Employee info copied to clipboard");
  });
}

/* ── Copy card (mobile) ─────────────────────────────────── */
function copyCard(idx, btnEl) {
  const emp = filteredData[idx];
  if (!emp) return;
  copyTextToClipboard(buildContactText(emp), () => {
    showToast("✅ Employee info copied to clipboard");
    if (btnEl) {
      btnEl.classList.add("copied");
      const label = btnEl.querySelector(".btn-copy-card__label");
      const prevLabel = label ? label.textContent : null;
      if (label) label.textContent = "Copied";
      setTimeout(() => {
        btnEl.classList.remove("copied");
        if (label && prevLabel !== null) label.textContent = prevLabel;
      }, 1500);
    }
  });
}

/* ── Toast ──────────────────────────────────────────────── */
function showToast(msg) {
  if (toastTimer) clearTimeout(toastTimer);
  els.toast.textContent = msg;
  els.toast.classList.remove("hidden");
  toastTimer = setTimeout(() => els.toast.classList.add("hidden"), 3000);
}

/* ── FAB ────────────────────────────────────────────────── */
function toggleFab() {
  fabOpen = !fabOpen;
  els.fabActions.classList.toggle("open", fabOpen);
  els.fabMain.setAttribute("aria-expanded", fabOpen);
  els.fabIconPlus.classList.toggle("hidden", fabOpen);
  els.fabIconClose.classList.toggle("hidden", !fabOpen);
}

document.addEventListener("click", (e) => {
  if (fabOpen && !e.target.closest(".fab-container")) {
    fabOpen = false;
    els.fabActions.classList.remove("open");
    els.fabMain.setAttribute("aria-expanded", "false");
    els.fabIconPlus.classList.remove("hidden");
    els.fabIconClose.classList.add("hidden");
  }
});

/* ── Modal ──────────────────────────────────────────────── */
function openModal() {
  if (fabOpen) toggleFab();
  els.modal.classList.remove("hidden");
  setTimeout(() => $("form-name").focus(), 50);
}

function closeModal() {
  els.modal.classList.add("hidden");
}

els.modal.addEventListener("click", (e) => {
  if (e.target === els.modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !els.modal.classList.contains("hidden"))
    closeModal();
});

function submitFeedback() {
  const name = ($("form-name").value || "").trim();
  const email = ($("form-email").value || "").trim();
  const message = ($("form-message").value || "").trim();

  if (!name || !email || !message) {
    showToast("⚠️ Please fill in all fields");
    return;
  }

  const subject = encodeURIComponent(`Directory Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  );
  window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
  closeModal();
  showToast("📧 Email client opened");
}

/* ── Clear all ──────────────────────────────────────────── */
function clearAll() {
  searchQuery = "";
  deptFilter = "";
  els.searchInput.value = "";
  els.deptFilter.value = "";
  els.clearBtn.classList.add("hidden");
  applyFilters();
}

/* ── Last updated badge ─────────────────────────────────── */
function updateLastUpdated() {
  const now = new Date();
  els.lastUpdated.textContent = `Last updated: ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
}

/* ── Event listeners ────────────────────────────────────── */
function initEvents() {
  els.searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    els.clearBtn.classList.toggle("hidden", !searchQuery);
    applyFilters();
  });

  els.clearBtn.addEventListener("click", () => {
    searchQuery = "";
    els.searchInput.value = "";
    els.clearBtn.classList.add("hidden");
    els.searchInput.focus();
    applyFilters();
  });

  els.deptFilter.addEventListener("change", (e) => {
    deptFilter = e.target.value;
    applyFilters();
  });

  els.rowsPerPage.addEventListener("change", (e) => {
    rowsPerPage = parseInt(e.target.value, 10);
    currentPage = 1;
    renderAll();
  });

  els.btnPrev.addEventListener("click", () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  });
  els.btnNext.addEventListener("click", () => {
    const total = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < total) goToPage(currentPage + 1);
  });
}

/* ── Bootstrap ──────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initEvents();
  initSortHeaders();
  initApp();
});

/*
 * ── SQL Setup Reference ───────────────────────────────────
 * Run this in your Supabase SQL Editor before first use:
 *
 *   ALTER TABLE "Employee" ENABLE ROW LEVEL SECURITY;
 *
 *   CREATE POLICY "Public read access"
 *     ON "Employee"
 *     FOR SELECT
 *     TO anon
 *     USING (true);
 * ─────────────────────────────────────────────────────────
 */
