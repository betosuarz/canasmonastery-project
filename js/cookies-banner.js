/**
 * MONASTERIO DE LA LUZ · cookies-banner.js
 * Banner de consentimiento de cookies.
 * Autónomo: inyecta su propio HTML y CSS. No modifica shared.js ni nav-footer.js.
 * Cookies gestionadas: cookie_consent (necesaria) · lang_pref (necesaria) · _ga / _ga_* (analítica)
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'cookie_consent';

  /* ─── Leer preferencias guardadas ─── */
  function getPrefs() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { return null; }
  }

  function savePrefs(prefs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, ts: Date.now() }));
  }

  /* ─── Activar / desactivar Google Analytics ─── */
  function applyAnalytics(enabled) {
    if (enabled) {
      // Si en el futuro se añade GA, aquí se inicializa
      window.__ga_enabled = true;
    } else {
      window['ga-disable-G-XXXXXXXX'] = true; // reemplazar con el ID real de GA
      window.__ga_enabled = false;
      // Eliminar cookies de GA existentes
      ['_ga', '_gid'].forEach(name => {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${location.hostname}`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname}`;
      });
    }
  }

  /* ─── CSS ─── */
  const CSS = `
  #ck-banner *, #ck-banner *::before, #ck-banner *::after { box-sizing: border-box; }

  #ck-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 9998;
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }
  #ck-overlay.ck-visible { opacity: 1; pointer-events: auto; }

  #ck-banner {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: 9999;
    background: #16120d;
    border-top: 1px solid rgba(196,164,100,0.2);
    padding: 1.6rem 2rem;
    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
    font-family: 'Jost', sans-serif;
  }
  #ck-banner.ck-visible { transform: translateY(0); }

  #ck-banner.ck-panel-open { border-top-color: rgba(196,164,100,0.35); }

  .ck-inner {
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .ck-text { flex: 1; min-width: 240px; }

  .ck-label {
    display: block;
    font-size: 0.68rem;
    font-weight: 400;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #c4a464;
    margin-bottom: 0.45rem;
  }

  .ck-desc {
    font-size: 0.83rem;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255,255,255,0.55);
    margin: 0;
  }

  .ck-desc a {
    color: rgba(196,164,100,0.75);
    text-decoration: none;
    border-bottom: 1px solid rgba(196,164,100,0.25);
    transition: border-color 0.2s;
  }
  .ck-desc a:hover { border-color: #c4a464; }

  .ck-actions {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    align-items: center;
    flex-shrink: 0;
  }

  .ck-btn {
    font-family: 'Jost', sans-serif;
    font-size: 0.72rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: 1px solid rgba(196,164,100,0.35);
    background: transparent;
    color: rgba(196,164,100,0.75);
    padding: 0.6rem 1.1rem;
    cursor: pointer;
    transition: border-color 0.22s, color 0.22s, background 0.22s;
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;
  }
  .ck-btn:hover { border-color: #c4a464; color: #c4a464; }

  .ck-btn--accept {
    background: rgba(196,164,100,0.12);
    border-color: rgba(196,164,100,0.6);
    color: #c4a464;
  }
  .ck-btn--accept:hover { background: rgba(196,164,100,0.2); border-color: #c4a464; }

  .ck-btn--reject { opacity: 0.7; }
  .ck-btn--reject:hover { opacity: 1; }

  /* ─── Panel de preferencias ─── */
  #ck-panel {
    max-width: 1160px;
    margin: 0 auto;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease, padding 0.3s ease;
  }
  #ck-panel.ck-panel-open {
    max-height: 600px;
    padding-top: 1.4rem;
  }

  .ck-panel-divider {
    border: none;
    border-top: 1px solid rgba(196,164,100,0.1);
    margin: 0 0 1.4rem;
  }

  .ck-panel-title {
    font-size: 0.68rem;
    font-weight: 400;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: rgba(196,164,100,0.5);
    margin: 0 0 1rem;
  }

  .ck-category {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(196,164,100,0.07);
  }
  .ck-category:last-of-type { border-bottom: none; }

  .ck-cat-info { flex: 1; }

  .ck-cat-name {
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(255,255,255,0.8);
    margin: 0 0 0.25rem;
    letter-spacing: 0.03em;
  }

  .ck-cat-desc {
    font-size: 0.78rem;
    font-weight: 300;
    line-height: 1.65;
    color: rgba(255,255,255,0.4);
    margin: 0;
  }

  /* Toggle switch */
  .ck-toggle {
    position: relative;
    flex-shrink: 0;
    width: 40px;
    height: 22px;
    margin-top: 2px;
  }
  .ck-toggle input { opacity: 0; width: 0; height: 0; position: absolute; }
  .ck-toggle-track {
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(196,164,100,0.2);
    cursor: pointer;
    transition: background 0.25s, border-color 0.25s;
  }
  .ck-toggle input:checked + .ck-toggle-track {
    background: rgba(196,164,100,0.25);
    border-color: rgba(196,164,100,0.6);
  }
  .ck-toggle input:disabled + .ck-toggle-track { cursor: not-allowed; opacity: 0.5; }
  .ck-toggle-thumb {
    position: absolute;
    top: 3px; left: 3px;
    width: 14px; height: 14px;
    background: rgba(196,164,100,0.4);
    transition: transform 0.25s, background 0.25s;
    pointer-events: none;
  }
  .ck-toggle input:checked ~ .ck-toggle-thumb {
    transform: translateX(18px);
    background: #c4a464;
  }
  .ck-toggle input:disabled ~ .ck-toggle-thumb { background: rgba(196,164,100,0.25); }

  .ck-required-tag {
    font-size: 0.62rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(196,164,100,0.5);
    border: 1px solid rgba(196,164,100,0.2);
    padding: 0.1rem 0.4rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }

  .ck-panel-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.6rem;
    padding: 1.2rem 0 0.4rem;
    flex-wrap: wrap;
  }

  @media (max-width: 640px) {
    #ck-banner { padding: 1.2rem 1.1rem; }
    .ck-inner { gap: 1rem; }
    .ck-actions { width: 100%; justify-content: stretch; }
    .ck-btn { flex: 1; text-align: center; }
    .ck-category { flex-direction: column; gap: 0.7rem; }
    .ck-panel-actions { justify-content: stretch; }
    .ck-panel-actions .ck-btn { flex: 1; text-align: center; }
  }
  `;


  /* ─── Mini-traducciones usando i18n si está disponible ─── */
  function tr(key) {
    if (window.i18n && window.i18n.t) {
      const v = window.i18n.t(key);
      if (v) return v;
    }
    return key;
  }

  function buildHTML() {
    return `
  <div id="ck-overlay" role="presentation" aria-hidden="true"></div>
  <div id="ck-banner" role="dialog" aria-modal="false" aria-label="${tr('ck.banner.aria')}" aria-live="polite">
    <div class="ck-inner">
      <div class="ck-text">
        <span class="ck-label">${tr('ck.label')}</span>
        <p class="ck-desc">${tr('ck.desc')}</p>
      </div>
      <div class="ck-actions">
        <button class="ck-btn ck-btn--settings" id="ck-btn-settings" aria-expanded="false" aria-controls="ck-panel">${tr('ck.btn.settings')}</button>
        <button class="ck-btn ck-btn--reject"   id="ck-btn-reject">${tr('ck.btn.reject')}</button>
        <button class="ck-btn ck-btn--accept"   id="ck-btn-accept">${tr('ck.btn.accept')}</button>
      </div>
    </div>

    <div id="ck-panel" role="region" aria-label="${tr('ck.panel.aria')}">
      <hr class="ck-panel-divider">
      <p class="ck-panel-title">${tr('ck.panel.title')}</p>

      <div class="ck-category">
        <div class="ck-cat-info">
          <p class="ck-cat-name">
            ${tr('ck.nec.name')}
            <span class="ck-required-tag">${tr('ck.nec.always')}</span>
          </p>
          <p class="ck-cat-desc">${tr('ck.nec.desc')}</p>
        </div>
        <label class="ck-toggle" aria-label="${tr('ck.nec.aria')}">
          <input type="checkbox" id="ck-toggle-necessary" checked disabled>
          <span class="ck-toggle-track"></span>
          <span class="ck-toggle-thumb"></span>
        </label>
      </div>

      <div class="ck-category">
        <div class="ck-cat-info">
          <p class="ck-cat-name">${tr('ck.ana.name')}</p>
          <p class="ck-cat-desc">${tr('ck.ana.desc')}</p>
        </div>
        <label class="ck-toggle" aria-label="${tr('ck.ana.aria')}">
          <input type="checkbox" id="ck-toggle-analytics">
          <span class="ck-toggle-track"></span>
          <span class="ck-toggle-thumb"></span>
        </label>
      </div>

      <div class="ck-panel-actions">
        <button class="ck-btn ck-btn--reject" id="ck-btn-reject-panel">${tr('ck.btn.reject.panel')}</button>
        <button class="ck-btn ck-btn--accept" id="ck-btn-save">${tr('ck.btn.save')}</button>
      </div>
    </div>
  </div>`;
  }

  /* ─── Init ─── */
  function init() {
    const prefs = getPrefs();
    if (prefs) {
      // Ya hay decisión guardada: aplicar y no mostrar banner
      applyAnalytics(prefs.analytics === true);
      return;
    }

    // Inyectar CSS
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // Inyectar HTML
    const wrap = document.createElement('div');
    wrap.innerHTML = buildHTML();
    document.body.appendChild(wrap);

    const banner  = document.getElementById('ck-banner');
    const overlay = document.getElementById('ck-overlay');
    const panel   = document.getElementById('ck-panel');
    const toggleAnalytics = document.getElementById('ck-toggle-analytics');
    const btnSettings     = document.getElementById('ck-btn-settings');
    const btnAccept       = document.getElementById('ck-btn-accept');
    const btnReject       = document.getElementById('ck-btn-reject');
    const btnRejectPanel  = document.getElementById('ck-btn-reject-panel');
    const btnSave         = document.getElementById('ck-btn-save');

    // Mostrar con animación
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        banner.classList.add('ck-visible');
        overlay.classList.add('ck-visible');
      });
    });

    function dismiss() {
      banner.classList.remove('ck-visible');
      overlay.classList.remove('ck-visible');
      // Eliminar del DOM tras la transición
      setTimeout(() => { wrap.remove(); style.remove(); }, 450);
    }

    function acceptAll() {
      savePrefs({ necessary: true, analytics: true });
      applyAnalytics(true);
      dismiss();
    }

    function rejectOptional() {
      savePrefs({ necessary: true, analytics: false });
      applyAnalytics(false);
      dismiss();
    }

    function saveCustom() {
      const analytics = toggleAnalytics.checked;
      savePrefs({ necessary: true, analytics });
      applyAnalytics(analytics);
      dismiss();
    }

    function togglePanel() {
      const open = panel.classList.toggle('ck-panel-open');
      banner.classList.toggle('ck-panel-open', open);
      btnSettings.setAttribute('aria-expanded', String(open));
      // Preseleccionar analítica a false al abrir
      if (open) toggleAnalytics.checked = false;
    }

    btnAccept.addEventListener('click', acceptAll);
    btnReject.addEventListener('click', rejectOptional);
    btnSettings.addEventListener('click', togglePanel);
    btnRejectPanel.addEventListener('click', rejectOptional);
    btnSave.addEventListener('click', saveCustom);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
