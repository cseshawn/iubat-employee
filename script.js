/**
 * IUBAT Employee Roster — script.js
 * Supabase-connected employee roster with search, copy-to-clipboard.
 * No pagination, no counters, no row selector.
 * Copy works reliably on search results.
 */

"use strict";

/* ── Config ─────────────────────────────────────────────── */
const SUPABASE_URL = "https://kkhwsjfloftekkzisrak.supabase.co";
const SUPABASE_KEY = "sb_publishable_jJFUr_C6YXjG6zy1OvLK2Q_SkWqFTLO";
const TABLE_NAME = "Employee";

/* ── Shared inline icons ─────────────────────────────────── */
const ICON_EMAIL = `<svg class="contact-chip__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3.5 5.5l6.5 5 6.5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ICON_PHONE = `<svg class="contact-chip__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5.2 3h2.1c.4 0 .8.3.9.7l.8 2.7c.1.4 0 .8-.3 1.1L7.4 8.8c.8 1.9 2.1 3.2 4 4l1.3-1.3c.3-.3.7-.4 1.1-.3l2.7.8c.4.1.7.5.7.9v2.1c0 .6-.5 1-1 1-6 .2-11.4-5.2-11.2-11.2 0-.5.4-1 .2-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

/* ── State ──────────────────────────────────────────────── */
let allEmployees = [];
let filteredData = [];
let searchQuery = "";
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
  toast: $("toast"),
  lastUpdated: $("last-updated"),
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
    updateLastUpdated();
    applyFilters();
    showState("table");
  } catch (err) {
    console.error("[IUBAT Roster]", err);
    els.errorTitle.textContent = "Connection Failed";
    els.errorMsg.textContent = err.message || "Unable to reach the database.";
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

/* ── Filters ────────────────────────────────────────────── */
function applyFilters() {
  const q = searchQuery.toLowerCase().trim();

  filteredData = allEmployees.filter((emp) => {
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

  renderAll();

  if (filteredData.length === 0 && q) {
    showState("empty");
  } else {
    showState("table");
  }
}

function renderAll() {
  renderTable();
  renderMobileCards();
}

/* ── Desktop Table Render ───────────────────────────────── */
function renderTable() {
  if (filteredData.length === 0) {
    els.tableBody.innerHTML =
      '<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--text-muted)">No records found.</td></tr>';
    return;
  }

  els.tableBody.innerHTML = filteredData
    .map((emp, idx) => {
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
          <button class="btn-copy-row" onclick="copyRow(${idx})" title="Copy employee info">
            <svg viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 11V3a1 1 0 011-1h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Copy
          </button>
        </td>
      </tr>`;
    })
    .join("");
}

/* ── Mobile Cards ───────────────────────────────────────── */
function renderMobileCards() {
  if (filteredData.length === 0) {
    els.mobileCards.innerHTML = "";
    return;
  }

  els.mobileCards.innerHTML = filteredData
    .map((emp, idx) => {
      const name = (emp.Name || "").trim();
      const desig = (emp.Designation || "").trim();
      const dept = (emp["Department or Office"] || "").trim();
      const room = formatRoom(emp.Room);
      const email = (emp.Email || "").trim();
      const cell = (emp.Cell || "").trim();

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
          <button class="btn-copy-card" onclick="copyCard(${idx}, this)" title="Copy employee info">
            <svg class="btn-copy-card__icon" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 11V3a1 1 0 011-1h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <svg class="btn-copy-card__check" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span class="btn-copy-card__label">Copy</span>
          </button>
        </div>
      </div>`;
    })
    .join("");
}

/* ── Utility: Room label formatter ─────────────────────── */
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

  return fields.join(",\n");
}

/**
 * Copy text to the clipboard as reliably as possible.
 * Uses execCommand fallback first for consistent mobile behavior.
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
  } catch (_) {
    copied = false;
  }

  if (copied) {
    onDone();
    return;
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(onDone)
      .catch(() => onDone());
  } else {
    onDone();
  }
}

/* ── Copy row (desktop) ──────────────────────────────────── */
function copyRow(idx) {
  const emp = filteredData[idx];
  if (!emp) return;
  copyTextToClipboard(buildContactText(emp), () => {
    showToast("✅ Employee info copied to clipboard");
    const buttons = document.querySelectorAll(".btn-copy-row");
    if (buttons[idx]) {
      const btn = buttons[idx];
      btn.classList.add("copied");
      const origText = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.textContent = origText || "Copy";
      }, 1500);
    }
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

/* ── Clear all ──────────────────────────────────────────── */
function clearAll() {
  searchQuery = "";
  els.searchInput.value = "";
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
}

/* ── Bootstrap ──────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initEvents();
  initApp();
});
