/* ================================================
   FUNDACIÓN EJÉRCITO DE LOS ANDES — main.js
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAV SCROLL ─────────────────────────────
     Agrega .is-scrolled al nav cuando se scrollea
     más de 60px, cambiando el fondo a marino sólido.
  ─────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
  }, { passive: true });


  /* ── 2. MENÚ HAMBURGUESA ───────────────────────
     Toggle del menú mobile al hacer click en la
     hamburguesa. Bloquea el scroll del body cuando
     el menú está abierto.
  ─────────────────────────────────────────────── */
  const burger     = document.getElementById('burger');
  const navMobile  = document.getElementById('navMobile');

  if (burger && navMobile) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('is-open');
      navMobile.classList.toggle('is-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar al hacer click en un link del menú mobile
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-open');
        navMobile.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }


  /* ── 3. CARRUSEL DE ACTIVIDADES ────────────────
     Auto-play cada 3.5s. Drag/swipe. Dots + flechas.
     Cantidad de slides visibles según ancho de pantalla.
  ─────────────────────────────────────────────── */
  const track   = document.getElementById('carruselTrack');
  const dotsEl  = document.getElementById('carruselDots');
  const prevEl  = document.getElementById('carruselPrev');
  const nextEl  = document.getElementById('carruselNext');

  if (track) {
    const slides  = track.querySelectorAll('.carrusel-slide');
    const total   = slides.length;
    let current   = 0;
    let timer     = null;

    /* Slides visibles según ancho */
    function perView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768)  return 2;
      return 1;
    }

    /* Máximo índice desplazable */
    function maxIdx() { return Math.max(0, total - perView()); }

    /* Construir dots */
    function buildDots() {
      dotsEl.innerHTML = '';
      for (let i = 0; i <= maxIdx(); i++) {
        const d = document.createElement('button');
        d.className = 'c-dot' + (i === current ? ' active' : '');
        d.setAttribute('aria-label', `Slide ${i + 1}`);
        d.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
        dotsEl.appendChild(d);
      }
    }

    /* Ir a un slide */
    function goTo(idx) {
      current = Math.max(0, Math.min(idx, maxIdx()));
      /* Desplaza el porcentaje relativo al total de slides */
      track.style.transform = `translateX(-${(current / total) * 100}%)`;
      /* Actualizar dots */
      dotsEl.querySelectorAll('.c-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
      /* Actualizar flechas */
      if (prevEl) prevEl.disabled = current === 0;
      if (nextEl) nextEl.disabled = current >= maxIdx();
    }

    function next() { goTo(current >= maxIdx() ? 0 : current + 1); }
    function prev() { goTo(current - 1); }

    /* Auto-play */
    function startAuto() {
      timer = setInterval(next, 3500);
    }
    function stopAuto() {
      clearInterval(timer);
    }

    /* Eventos de flechas */
    if (prevEl) prevEl.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
    if (nextEl) nextEl.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

    /* Drag / swipe con mouse */
    let dragX = 0;
    track.addEventListener('mousedown', e => { dragX = e.clientX; });
    track.addEventListener('mouseup',   e => {
      const diff = dragX - e.clientX;
      if (Math.abs(diff) > 50) { stopAuto(); diff > 0 ? next() : prev(); startAuto(); }
    });

    /* Swipe táctil */
    track.addEventListener('touchstart', e => { dragX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   e => {
      const diff = dragX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { stopAuto(); diff > 0 ? next() : prev(); startAuto(); }
    });

    /* Pausar al hacer hover */
    track.parentElement.addEventListener('mouseenter', stopAuto);
    track.parentElement.addEventListener('mouseleave', startAuto);

    /* Recalcular al cambiar tamaño */
    window.addEventListener('resize', () => {
      buildDots();
      goTo(Math.min(current, maxIdx()));
    });

    /* Inicializar */
    buildDots();
    goTo(0);

    /* Arrancar auto-play solo si no hay prefers-reduced-motion */
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      startAuto();
    }
  }


  /* ── 4. SCROLL REVEAL ──────────────────────────
     Agrega .in-view a elementos .reveal cuando
     entran en el viewport, activando la animación CSS.
  ─────────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

});
