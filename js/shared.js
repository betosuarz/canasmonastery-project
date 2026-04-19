/**
 * MONASTERIO DE LA LUZ · shared.js
 * Código compartido: nav, scroll effects, FAQ, reveal, back-to-top
 */
(function () {
  'use strict';

  /* ---- NAV scroll ---- */
  const header = document.getElementById('site-header');
  let raf = false;

  function onScroll() {
    if (!raf) {
      requestAnimationFrame(() => {
        header?.classList.toggle('scrolled', window.scrollY > 50);
        const btt = document.getElementById('btt');
        if (btt) btt.hidden = window.scrollY < 400;
        raf = false;
      });
      raf = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Burger menu ---- */
  const burger = document.getElementById('nav-burger');
  const navList = document.getElementById('nav-list');

  burger?.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-a').forEach(a => {
    a.addEventListener('click', () => {
      navList?.classList.remove('open');
      burger?.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (navList?.classList.contains('open') &&
        !navList.contains(e.target) &&
        !burger?.contains(e.target)) {
      navList.classList.remove('open');
      burger?.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ---- Mark active nav link by current page ---- */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-a[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('nav-active');
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const answerId = btn.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close others
      document.querySelectorAll('.faq-q').forEach(b => {
        if (b !== btn) {
          b.setAttribute('aria-expanded', 'false');
          const a = document.getElementById(b.getAttribute('aria-controls'));
          if (a) a.hidden = true;
        }
      });

      btn.setAttribute('aria-expanded', String(!expanded));
      if (answer) answer.hidden = expanded;
    });
  });

  /* ---- Reveal on scroll ---- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 5) * 70}ms`;
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  /* ---- Back to top ---- */
  document.getElementById('btt')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- Smooth hash scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = (header?.offsetHeight ?? 70) + 16;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });

})();
