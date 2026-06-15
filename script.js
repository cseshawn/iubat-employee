/**
 * IUBAT Employee Directory — script.js
 * Supabase-connected employee directory with search, filter,
 * sort, pagination, copy-to-clipboard, FAB, and feedback modal.
 */

'use strict';

/* ── Config ─────────────────────────────────────────────── */
const SUPABASE_URL  = 'https://kkhwsjfloftekkzisrak.supabase.co';
const SUPABASE_KEY  = 'sb_publishable_jJFUr_C6YXjG6zy1OvLK2Q_SkWqFTLO';
const TABLE_NAME    = 'Employee';
const FEEDBACK_EMAIL = 'shawn.iubat@gmail.com';

/* ── State ──────────────────────────────────────────────── */
let allEmployees   = [];  // raw data from Supabase
let filteredData   = [];  // after search + dept filter
let currentPage    = 1;
let rowsPerPage    = 20;
let sortCol        = 'Name';
let sortDir        = 'asc'; // 'asc' | 'desc'
let searchQuery    = '';
let deptFilter     = '';
let fabOpen        = false;
let toastTimer     = null;

/* ── DOM refs ───────────────────────────────────────────── */
const $ = id => document.getElementById(id);

const els = {
  loading:      $('loading-state'),
  error:        $('error-state'),
  errorTitle:   $('error-title'),
  errorMsg:     $('error-message'),
  empty:        $('empty-state'),
  tableWrap:    $('table-wrap'),
  tableBody:    $('table-body'),
  searchInput:  $('search-input'),
  clearBtn:     $('clear-search'),
  deptFilter:   $('dept-filter'),
  rowsPerPage:  $('rows-per-page'),
  statTotal:    $('stat-total'),
  statShowing:  $('stat-showing'),
  statDepts:    $('stat-depts'),
  pagination:   $('pagination'),
  pageNumbers:  $('page-numbers'),
  btnPrev:      $('btn-prev'),
  btnNext:      $('btn-next'),
  toast:        $('toast'),
  sqlCard:      $('sql-instructions'),
  lastUpdated:  $('last-updated'),
  fabActions:   $('fab-actions'),
  fabMain:      $('fab-main'),
  fabIconPlus:  document.querySelector('.fab-icon--plus'),
  fabIconClose: document.querySelector('.fab-icon--close'),
  modal:        $('feedback-modal'),
};

/* ── Init ───────────────────────────────────────────────── */
async function initApp() {
  showState('loading');
  try {
    const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data, error } = await client
      .from(TABLE_NAME)
      .select('*')
      .order('Name', { ascending: true });

    if (error) {
      // RLS policy missing or permission error
      if (error.code === '42501' || error.message?.includes('permission') || error.message?.includes('policy')) {
        els.sqlCard.classList.remove('hidden');
        throw new Error('Row Level Security policy missing. See instructions above.');
      }
      throw new Error(error.message || 'Database error');
    }

    allEmployees = data || [];
    buildDeptFilter();
    updateLastUpdated();
    applyFilters();
    showState('table');
  } catch (err) {
    console.error('[IUBAT Directory]', err);
    els.errorTitle.textContent = 'Connection Failed';
    els.errorMsg.textContent   = err.message || 'Unable to reach the database. Check your credentials.';
    showState('error');
  }
}

/* ── State management ───────────────────────────────────── */
function showState(state) {
  els.loading.classList.add('hidden');
  els.error.classList.add('hidden');
  els.empty.classList.add('hidden');
  els.tableWrap.classList.add('hidden');

  if (state === 'loading') els.loading.classList.remove('hidden');
  if (state === 'error')   els.error.classList.remove('hidden');
  if (state === 'empty')   els.empty.classList.remove('hidden');
  if (state === 'table')   els.tableWrap.classList.remove('hidden');
}

/* ── Department filter builder ──────────────────────────── */
function buildDeptFilter() {
  const depts = [...new Set(
    allEmployees
      .map(e => (e['Department or Office'] || '').trim())
      .filter(Boolean)
  )].sort();

  // Clear existing options except the first
  while (els.deptFilter.options.length > 1) els.deptFilter.remove(1);

  depts.forEach(dept => {
    const opt = document.createElement('option');
    opt.value = dept;
    opt.textContent = dept;
    els.deptFilter.appendChild(opt);
  });

  // Stats
  els.statDepts.textContent = depts.length;
  els.statTotal.textContent = allEmployees.length;
}

/* ── Filters + Sort ─────────────────────────────────────── */
function applyFilters() {
  const q = searchQuery.toLowerCase().trim();

  filteredData = allEmployees.filter(emp => {
    // Dept filter
    if (deptFilter && (emp['Department or Office'] || '').trim() !== deptFilter) return false;
    // Search
    if (q) {
      const haystack = [
        emp.Name || '',
        emp.Designation || '',
        emp['Department or Office'] || '',
        emp.Email || '',
        emp.Cell || '',
      ].join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  // Sort
  filteredData.sort((a, b) => {
    const valA = (a[sortCol] || '').toString().toLowerCase();
    const valB = (b[sortCol] || '').toString().toLowerCase();
    return sortDir === 'asc'
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });

  currentPage = 1;
  els.statShowing.textContent = filteredData.length;
  renderTable();
  renderPagination();

  if (filteredData.length === 0 && (q || deptFilter)) {
    showState('empty');
  } else {
    showState('table');
  }
}

/* ── Table Render ───────────────────────────────────────── */
function renderTable() {
  const start = (currentPage - 1) * rowsPerPage;
  const slice = filteredData.slice(start, start + rowsPerPage);

  if (slice.length === 0) {
    els.tableBody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--text-muted)">No records on this page.</td></tr>';
    return;
  }

  els.tableBody.innerHTML = slice.map((emp, idx) => {
    const globalIdx = start + idx; // index in filteredData for copy
    const name   = escHtml(emp.Name || '—');
    const desig  = escHtml(emp.Designation || '—');
    const dept   = escHtml(emp['Department or Office'] || '—');
    const room   = escHtml(emp.Room || '—');
    const email  = emp.Email ? emp.Email.trim() : '';
    const cell   = emp.Cell  ? emp.Cell.trim()  : '';

    const emailHtml = email
      ? `<a class="link-email" href="mailto:${escHtml(email)}" title="Send email">✉ ${escHtml(email)}</a>`
      : '<span style="color:var(--text-muted)">—</span>';

    const cellHtml = cell
      ? `<a class="link-phone" href="tel:${escHtml(cell)}" title="Call">📞 ${escHtml(cell)}</a>`
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
  }).join('');
}

/* ── Column sort ────────────────────────────────────────── */
function initSortHeaders() {
  document.querySelectorAll('.dir-table th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.col;
      if (sortCol === col) {
        sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        sortCol = col;
        sortDir = 'asc';
      }
      // Update header classes
      document.querySelectorAll('.dir-table th.sortable').forEach(t => {
        t.classList.remove('sort-asc', 'sort-desc');
        t.querySelector('.sort-icon').textContent = '↕';
      });
      th.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
      applyFilters();
    });
  });
}

/* ── Pagination ─────────────────────────────────────────── */
function renderPagination() {
  const totalPages = Math.max(1, Math.ceil(filteredData.length / rowsPerPage));

  els.btnPrev.disabled = currentPage === 1;
  els.btnNext.disabled = currentPage === totalPages;

  // Build page number buttons with ellipsis
  const pages = getPagesArray(currentPage, totalPages);
  els.pageNumbers.innerHTML = pages.map(p => {
    if (p === '…') return `<span class="page-ellipsis">…</span>`;
    return `<button class="page-num${p === currentPage ? ' active' : ''}" onclick="goToPage(${p})">${p}</button>`;
  }).join('');
}

function getPagesArray(cur, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [];
  pages.push(1);
  if (cur > 3) pages.push('…');
  for (let p = Math.max(2, cur - 1); p <= Math.min(total - 1, cur + 1); p++) pages.push(p);
  if (cur < total - 2) pages.push('…');
  pages.push(total);
  return pages;
}

function goToPage(p) {
  currentPage = p;
  renderTable();
  renderPagination();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Utility: HTML escape ───────────────────────────────── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Copy row ───────────────────────────────────────────── */
function copyRow(idx) {
  const emp = filteredData[idx];
  if (!emp) return;
  const text = [
    `Name: ${emp.Name || ''}`,
    `Designation: ${emp.Designation || ''}`,
    `Department: ${emp['Department or Office'] || ''}`,
    `Email: ${emp.Email || ''}`,
    `Phone: ${emp.Cell || ''}`,
  ].join('\n');

  navigator.clipboard.writeText(text)
    .then(() => showToast('✅ Employee info copied to clipboard'))
    .catch(() => {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity  = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('✅ Employee info copied to clipboard');
    });
}

/* ── Copy SQL helper ────────────────────────────────────── */
function copySql() {
  const sql = `-- Enable Row Level Security\nALTER TABLE "Employee" ENABLE ROW LEVEL SECURITY;\n\n-- Allow anonymous read access\nCREATE POLICY "Public read access"\n  ON "Employee"\n  FOR SELECT\n  TO anon\n  USING (true);`;
  navigator.clipboard.writeText(sql)
    .then(() => showToast('✅ SQL copied to clipboard'))
    .catch(() => showToast('⚠️ Copy failed — please copy manually'));
}

/* ── Toast ──────────────────────────────────────────────── */
function showToast(msg) {
  if (toastTimer) clearTimeout(toastTimer);
  els.toast.textContent = msg;
  els.toast.classList.remove('hidden');
  toastTimer = setTimeout(() => els.toast.classList.add('hidden'), 3000);
}

/* ── FAB ────────────────────────────────────────────────── */
function toggleFab() {
  fabOpen = !fabOpen;
  els.fabActions.classList.toggle('open', fabOpen);
  els.fabMain.setAttribute('aria-expanded', fabOpen);
  els.fabIconPlus.classList.toggle('hidden', fabOpen);
  els.fabIconClose.classList.toggle('hidden', !fabOpen);
}

// Close FAB when clicking outside
document.addEventListener('click', e => {
  if (fabOpen && !e.target.closest('.fab-container')) {
    fabOpen = false;
    els.fabActions.classList.remove('open');
    els.fabMain.setAttribute('aria-expanded', 'false');
    els.fabIconPlus.classList.remove('hidden');
    els.fabIconClose.classList.add('hidden');
  }
});

/* ── Modal ──────────────────────────────────────────────── */
function openModal() {
  // Close FAB first
  if (fabOpen) toggleFab();
  els.modal.classList.remove('hidden');
  setTimeout(() => $('form-name').focus(), 50);
}

function closeModal() {
  els.modal.classList.add('hidden');
}

// Close modal on backdrop click
els.modal.addEventListener('click', e => {
  if (e.target === els.modal) closeModal();
});

// Keyboard escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !els.modal.classList.contains('hidden')) closeModal();
});

function submitFeedback() {
  const name    = ($('form-name').value    || '').trim();
  const email   = ($('form-email').value   || '').trim();
  const message = ($('form-message').value || '').trim();

  if (!name || !email || !message) {
    showToast('⚠️ Please fill in all fields');
    return;
  }

  const subject = encodeURIComponent(`Directory Inquiry from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
  closeModal();
  showToast('📧 Email client opened');
}

/* ── Clear all ──────────────────────────────────────────── */
function clearAll() {
  searchQuery = '';
  deptFilter  = '';
  els.searchInput.value = '';
  els.deptFilter.value  = '';
  els.clearBtn.classList.add('hidden');
  applyFilters();
}

/* ── Last updated badge ─────────────────────────────────── */
function updateLastUpdated() {
  const now = new Date();
  els.lastUpdated.textContent = `Last updated: ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

/* ── Event listeners ────────────────────────────────────── */
function initEvents() {
  // Live search
  els.searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    els.clearBtn.classList.toggle('hidden', !searchQuery);
    applyFilters();
  });

  // Clear search
  els.clearBtn.addEventListener('click', () => {
    searchQuery = '';
    els.searchInput.value = '';
    els.clearBtn.classList.add('hidden');
    els.searchInput.focus();
    applyFilters();
  });

  // Department filter
  els.deptFilter.addEventListener('change', e => {
    deptFilter = e.target.value;
    applyFilters();
  });

  // Rows per page
  els.rowsPerPage.addEventListener('change', e => {
    rowsPerPage = parseInt(e.target.value, 10);
    currentPage = 1;
    renderTable();
    renderPagination();
  });

  // Pagination buttons
  els.btnPrev.addEventListener('click', () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  });
  els.btnNext.addEventListener('click', () => {
    const total = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < total) goToPage(currentPage + 1);
  });
}

/* ── Bootstrap ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
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
