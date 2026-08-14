/**
 * MONASTERIO DE LA LUZ · nav-footer.js
 * Inyecta nav y footer idénticos en todas las páginas.
 * Incluye selector de idioma: ES / EN / FR / DE / IT / PT / EU / CA / KO.
 */
(function () {

  const NAV_HTML = `
  <header class="site-header" id="site-header">
    <nav class="nav-wrap" aria-label="Navegación principal">
      <a href="/" class="nav-logo" aria-label="Monasterio de la Luz — Inicio" style="flex-direction:row;align-items:center;gap:.65rem">
        <img src="favicon.svg" alt="" aria-hidden="true" width="32" height="32" style="width:32px;height:32px;object-fit:contain;flex-shrink:0">
        <span style="display:flex;flex-direction:column;line-height:1.1">
          <span class="logo-l1">Monasterio</span>
          <span class="logo-l2">de la Luz</span>
        </span>
      </a>

      <div class="nav-right">
        <div class="lang-selector" aria-label="Language / Idioma">
          <button class="lang-current" aria-haspopup="listbox" aria-expanded="false">ES</button>
          <ul class="lang-dropdown" role="listbox">
            <li><button class="lang-opt" data-lang="es" role="option" aria-selected="true">ES &mdash; Español</button></li>
            <li><button class="lang-opt" data-lang="en" role="option" aria-selected="false">EN &mdash; English</button></li>
            <li><button class="lang-opt" data-lang="fr" role="option" aria-selected="false">FR &mdash; Français</button></li>
            <li><button class="lang-opt" data-lang="de" role="option" aria-selected="false">DE &mdash; Deutsch</button></li>
            <li><button class="lang-opt" data-lang="it" role="option" aria-selected="false">IT &mdash; Italiano</button></li>
            <li><button class="lang-opt" data-lang="pt" role="option" aria-selected="false">PT &mdash; Português</button></li>
            <li><button class="lang-opt" data-lang="eu" role="option" aria-selected="false">EU &mdash; Euskera</button></li>
            <li><button class="lang-opt" data-lang="ca" role="option" aria-selected="false">CA &mdash; Català</button></li>
            <li><button class="lang-opt" data-lang="ko" role="option" aria-selected="false">KO &mdash; 한국어</button></li>
          </ul>
        </div>
        <button class="nav-burger" id="nav-burger" aria-expanded="false" aria-controls="nav-list" data-i18n-aria="nav.aria.burger" aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </button>
      </div>

      <ul class="nav-list" id="nav-list" role="menubar">
        <li role="none"><a href="/"    class="nav-a" data-page="index.html"    role="menuitem" data-i18n="nav.home">Inicio</a></li>
        <li role="none"><a href="abadia.html"   class="nav-a" data-page="abadia.html"   role="menuitem" data-i18n="nav.abbey">La Abadía</a></li>
        <li role="none"><a href="tarifas.html"  class="nav-a" data-page="tarifas.html"  role="menuitem" data-i18n="nav.rates">Tarifas</a></li>
        <li role="none"><a href="noticias.html" class="nav-a" data-page="noticias.html" role="menuitem" data-i18n="nav.news">Noticias</a></li>
        <li role="none"><a href="galeria.html"  class="nav-a" data-page="galeria.html"  role="menuitem" data-i18n="nav.gallery">Galería</a></li>
        <li role="none"><a href="contacto.html" class="nav-a nav-cta" role="menuitem" data-i18n="nav.contact">Contacto</a></li>
      </ul>
    </nav>
  </header>`;

  const FOOTER_HTML = `
  <footer class="site-footer" role="contentinfo">
    <div class="footer-main">
      <div class="ft-brand">
        <p class="ft-brand-name" style="display:flex;align-items:center;gap:.6rem">
          <img src="favicon.svg" alt="" aria-hidden="true" width="30" height="30" style="width:30px;height:30px;object-fit:contain;flex-shrink:0">
          Monasterio de la Luz
        </p>
        <p class="ft-brand-sub">Monasterio de Santa María de San Salvador de Cañas</p>
        <p class="ft-brand-addr" data-i18n="ft.brand.addr">Carretera 12 · 26325 Cañas, La Rioja, España</p>
      </div>
      <div class="ft-col">
        <p class="ft-col-title" data-i18n="ft.pages">Páginas</p>
        <ul class="ft-links">
          <li><a href="/"    data-i18n="nav.home">Inicio</a></li>
          <li><a href="abadia.html"   data-i18n="nav.abbey">La Abadía</a></li>
          <li><a href="tarifas.html"  data-i18n="nav.rates">Tarifas</a></li>
          <li><a href="noticias.html" data-i18n="nav.news">Noticias</a></li>
          <li><a href="galeria.html"  data-i18n="nav.gallery">Galería</a></li>
          <li><a href="contacto.html" data-i18n="nav.contact">Contacto</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <p class="ft-col-title" data-i18n="ft.legal">Legal</p>
        <ul class="ft-links">
          <li><a href="aviso-legal.html"  data-i18n="ft.legal1">Aviso legal</a></li>
          <li><a href="privacidad.html"   data-i18n="ft.legal2">Privacidad</a></li>
          <li><a href="cookies.html"      data-i18n="ft.legal3">Cookies</a></li>
          <li><a href="terminos.html"     data-i18n="ft.legal4">Términos y condiciones</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <p class="ft-col-title" data-i18n="ft.contact">Contacto</p>
        <ul class="ft-links">
          <li><a href="tel:+34941379145">(+34) 941 37 91 45</a></li>
          <li><a href="mailto:entradas@monasteriodecanas.org">entradas@monasteriodecanas.org</a></li>
        </ul>
        <p class="ft-col-title" style="margin-top:1.25rem" data-i18n="ft.social">Social</p>
      <div class="ft-social">
        <a href="https://www.instagram.com/monasteriocanas/" target="_blank" rel="noopener noreferrer" class="ft-soc-a" aria-label="Instagram">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/p/Monasterio-de-Ca%C3%B1as-61560075117888/" target="_blank" rel="noopener noreferrer" class="ft-soc-a" aria-label="Facebook">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="https://x.com/MonasterioCanas" target="_blank" rel="noopener noreferrer" class="ft-soc-a" aria-label="X / Twitter">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
        <div style="margin-top:1.5rem">
          <div class="lang-selector lang-selector--footer" aria-label="Language / Idioma">
            <button class="lang-current" aria-haspopup="listbox" aria-expanded="false">ES</button>
            <ul class="lang-dropdown" role="listbox">
              <li><button class="lang-opt" data-lang="es" role="option" aria-selected="true">ES &mdash; Español</button></li>
              <li><button class="lang-opt" data-lang="en" role="option" aria-selected="false">EN &mdash; English</button></li>
              <li><button class="lang-opt" data-lang="fr" role="option" aria-selected="false">FR &mdash; Français</button></li>
              <li><button class="lang-opt" data-lang="de" role="option" aria-selected="false">DE &mdash; Deutsch</button></li>
              <li><button class="lang-opt" data-lang="it" role="option" aria-selected="false">IT &mdash; Italiano</button></li>
              <li><button class="lang-opt" data-lang="pt" role="option" aria-selected="false">PT &mdash; Português</button></li>
              <li><button class="lang-opt" data-lang="eu" role="option" aria-selected="false">EU &mdash; Euskera</button></li>
              <li><button class="lang-opt" data-lang="ca" role="option" aria-selected="false">CA &mdash; Català</button></li>
              <li><button class="lang-opt" data-lang="ko" role="option" aria-selected="false">KO &mdash; 한국어</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="ft.copy">© 2026 Monasterio de Santa María de San Salvador de Cañas · Todos los derechos reservados</span>
    </div>
  </footer>
  <button class="btt" id="btt" aria-label="Back to top" hidden>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
  </button>`;

  const navP = document.getElementById('nav-placeholder');
  if (navP) navP.outerHTML = NAV_HTML;

  const ftP = document.getElementById('footer-placeholder');
  if (ftP) ftP.outerHTML = FOOTER_HTML;

})();