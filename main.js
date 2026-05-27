/* ================================================
   FUNDACIÓN EJÉRCITO DE LOS ANDES — main.js v2.1
   ================================================ */

/* ── DATOS DE EJES (para los modales) ─────────────
   Reemplazá los video IDs de YouTube con los reales.
   Ej: https://youtu.be/ABC123 → id: 'ABC123'
─────────────────────────────────────────────────── */
const EJES_DATA = {
  '01': {
    num: '01',
    nombre: 'Comunicación Territorial',
    desc: 'Contamos la realidad del barrio desde adentro. A través de entrevistas, streaming en vivo, documentales, recorridas barriales y mesas de debate, ponemos en foco las historias y necesidades del territorio.',
    actividades: [
      'Entrevistas a vecinos y referentes',
      'Transmisiones en vivo desde el barrio',
      'Documentales comunitarios',
      'Recorridas y coberturas barriales',
      'Mesas de debate sobre temas locales',
      'Notas periodísticas territoriales',
    ],
    fotos: ['assets/img/A7409533.jpg', 'assets/img/A7409544.jpg', null],
    videos: [
      { id: 'fRrEFt1HJ2M', label: 'Cobertura territorial — Fuerte Apache' },
      { id: 'fRrEFt1HJ2M', label: 'Mesa de debate comunitario' },
      { id: 'fRrEFt1HJ2M', label: 'Entrevista referente barrial' },
    ],
  },
  '02': {
    num: '02',
    nombre: 'Educación y Tecnología',
    desc: 'Formamos a los vecinos del barrio en habilidades digitales del presente y el futuro: inteligencia artificial, producción de contenido, herramientas tecnológicas y formación laboral con salida real.',
    actividades: [
      'Talleres de alfabetización digital',
      'Formación en inteligencia artificial',
      'Producción audiovisual y edición',
      'Programación básica y web',
      'Formación para el trabajo tecnológico',
      'Mentorías a jóvenes emprendedores',
    ],
    fotos: ['assets/img/A7409618.jpg', 'assets/img/A7409628.jpg', null],
    videos: [
      { id: 'fRrEFt1HJ2M', label: 'Taller de IA en el barrio' },
      { id: 'fRrEFt1HJ2M', label: 'Formación digital — cierre de ciclo' },
      { id: 'fRrEFt1HJ2M', label: 'Emprendedores digitales del territorio' },
    ],
  },
  '03': {
    num: '03',
    nombre: 'Deporte y Clubes',
    desc: 'El deporte como herramienta de contención e integración social. Trabajamos con y para los clubes de barrio, potenciando actividades deportivas y recreativas que generan pertenencia.',
    actividades: [
      'Torneos deportivos barriales',
      'Apoyo a clubes de barrio',
      'Actividades recreativas infantiles',
      'Integración deportiva inter-barrial',
      'Formación de entrenadores comunitarios',
      'Recuperación de espacios deportivos',
    ],
    fotos: ['assets/img/patria_ingenieros.jpeg', 'assets/img/A7409771.jpg', null],
    videos: [
      { id: 'fRrEFt1HJ2M', label: 'Torneo barrial — EDA Cup' },
      { id: 'fRrEFt1HJ2M', label: 'Inauguración cancha recuperada' },
      { id: 'fRrEFt1HJ2M', label: 'Niños en acción — deporte e identidad' },
    ],
  },
  '04': {
    num: '04',
    nombre: 'Fe y Comunidad',
    desc: 'Las organizaciones religiosas y sociales del territorio son aliados fundamentales. Articulamos redes de contención y trabajo comunitario con iglesias, parroquias y organizaciones barriales.',
    actividades: [
      'Articulación con iglesias y parroquias',
      'Redes de contención barrial',
      'Trabajo con organizaciones sociales',
      'Eventos comunitarios interreligiosos',
      'Asistencia en emergencias sociales',
      'Proyectos de cohesión social',
    ],
    fotos: ['assets/img/A7409791.jpg', 'assets/img/A7409480.jpg', null],
    videos: [
      { id: 'fRrEFt1HJ2M', label: 'Comunidad unida — jornada de integración' },
      { id: 'fRrEFt1HJ2M', label: 'Red de contención barrial' },
      { id: 'fRrEFt1HJ2M', label: 'Encuentro inter-comunitario' },
    ],
  },
  '05': {
    num: '05',
    nombre: 'Medio Ambiente',
    desc: 'Transformamos el entorno verde del barrio a través de educación ambiental, campañas de reciclaje, forestación y recuperación de espacios públicos. El territorio como patrimonio colectivo.',
    actividades: [
      'Campañas de reciclaje comunitario',
      'Forestación y arborización urbana',
      'Recuperación de plazas y espacios',
      'Educación ambiental en escuelas',
      'Huertos comunitarios',
      'Sensibilización sobre residuos',
    ],
    fotos: ['assets/img/A7409507.jpg', 'assets/img/A7409533.jpg', null],
    videos: [
      { id: 'fRrEFt1HJ2M', label: 'Jornada de plantación — barrio verde' },
      { id: 'fRrEFt1HJ2M', label: 'Reciclaje comunitario en acción' },
      { id: 'fRrEFt1HJ2M', label: 'Plaza recuperada — antes y después' },
    ],
  },
  '06': {
    num: '06',
    nombre: 'Juventud y Cultura',
    desc: 'Los jóvenes del barrio son artistas, músicos, streamers y emprendedores. Los acompañamos en su desarrollo creativo y digital, promoviendo la cultura como motor de transformación.',
    actividades: [
      'Acompañamiento a artistas locales',
      'Talleres de música y producción',
      'Apoyo a streamers y creadores digitales',
      'Muralismo y arte urbano',
      'Emprendimientos culturales juveniles',
      'Festivales y muestras de arte barrial',
    ],
    fotos: ['assets/img/A7409480.jpg', 'assets/img/A7409628.jpg', null],
    videos: [
      { id: 'fRrEFt1HJ2M', label: 'Artistas del barrio — showcase' },
      { id: 'fRrEFt1HJ2M', label: 'Jóvenes emprendedores digitales' },
      { id: 'fRrEFt1HJ2M', label: 'Festival cultural EDA 2024' },
    ],
  },
  '07': {
    num: '07',
    nombre: 'Relaciones Institucionales',
    desc: 'Construimos puentes entre el barrio y el mundo. Trabajamos con embajadas, universidades y redes latinoamericanas para generar cooperación, intercambio y visibilidad internacional.',
    actividades: [
      'Vinculación con embajadas',
      'Convenios con universidades',
      'Redes de cooperación latinoamericana',
      'Intercambios internacionales',
      'Participación en foros sociales',
      'Alianzas estratégicas institucionales',
    ],
    fotos: ['assets/img/A7409544.jpg', 'assets/img/A7409771.jpg', null],
    videos: [
      { id: 'fRrEFt1HJ2M', label: 'Encuentro con embajada — cooperación' },
      { id: 'fRrEFt1HJ2M', label: 'Red latinoamericana de fundaciones' },
      { id: 'fRrEFt1HJ2M', label: 'Convenio universitario — firma' },
    ],
  },
};

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAV SCROLL ───────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* ── 2. MENÚ HAMBURGUESA ─────────────────────── */
  const burger    = document.getElementById('burger');
  const navMobile = document.getElementById('navMobile');

  function openMenu() {
    burger.classList.add('is-open');
    navMobile.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    navMobile.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    burger.classList.remove('is-open');
    navMobile.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    navMobile.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  if (burger && navMobile) {
    burger.addEventListener('click', () =>
      burger.classList.contains('is-open') ? closeMenu() : openMenu()
    );
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navMobile.classList.contains('is-open')) closeMenu();
    });
    navMobile.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMenu));
  }


  /* ── 3. MODALES DE EJES ──────────────────────── */
  const overlay    = document.getElementById('modalOverlay');
  const modalPanel = document.getElementById('modalPanel');
  const modalCont  = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  function buildModal(data) {
    const fotosHtml = data.fotos.map(f =>
      f
        ? `<div class="modal-foto"><img src="${f}" alt="" loading="lazy"></div>`
        : `<div class="modal-foto-placeholder"><span>foto próximamente</span></div>`
    ).join('');

    const actHtml = data.actividades.map(a =>
      `<div class="modal-act-item">${a}</div>`
    ).join('');

    const videosHtml = data.videos.map(v => `
      <div>
        <div class="modal-video-wrap">
          <iframe src="https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1"
            title="${v.label}" allow="encrypted-media" allowfullscreen loading="lazy"></iframe>
        </div>
        <div class="modal-video-label">▶ ${v.label}</div>
      </div>`
    ).join('');

    return `
      <div class="modal-header">
        <div class="modal-eyebrow">Eje ${data.num}</div>
        <h2 class="modal-titulo">${data.nombre.replace(' y ', '<br><em>y</em> ')}</h2>
        <p class="modal-desc">${data.desc}</p>
      </div>

      <div class="modal-actividades-titulo">Actividades realizadas</div>
      <div class="modal-actividades-grid">${actHtml}</div>

      <div class="modal-actividades-titulo">Fotografías</div>
      <div class="modal-fotos">${fotosHtml}</div>

      <div class="modal-videos-titulo">Videos del eje</div>
      <div class="modal-videos-grid">${videosHtml}</div>
    `;
  }

  function openModal(ejeId) {
    const data = EJES_DATA[ejeId];
    if (!data) return;
    modalCont.innerHTML = buildModal(data);
    overlay.classList.add('is-open');
    overlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    modalPanel.scrollTop = 0;
    modalClose.focus();
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Detener videos al cerrar
    modalCont.querySelectorAll('iframe').forEach(f => {
      f.src = f.src; // reload → detiene el video
    });
  }

  if (overlay) {
    modalClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
  }

  // Click en cada eje
  document.querySelectorAll('.eje-fila[data-eje]').forEach(el => {
    el.addEventListener('click', () => openModal(el.dataset.eje));
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `Ver detalles del eje ${el.querySelector('.eje-nombre')?.textContent}`);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(el.dataset.eje); }
    });
  });


  /* ── 4. CARRUSEL ─────────────────────────────── */
  const track  = document.getElementById('carruselTrack');
  const dotsEl = document.getElementById('carruselDots');
  const prevEl = document.getElementById('carruselPrev');
  const nextEl = document.getElementById('carruselNext');

  if (track) {
    const slides = track.querySelectorAll('.carrusel-slide');
    const total  = slides.length;
    let current  = 0, timer = null;

    const perView = () => window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const maxIdx  = () => Math.max(0, total - perView());

    function buildDots() {
      dotsEl.innerHTML = '';
      for (let i = 0; i <= maxIdx(); i++) {
        const d = document.createElement('button');
        d.className = 'c-dot' + (i === current ? ' active' : '');
        d.setAttribute('aria-label', `Ir al slide ${i + 1}`);
        d.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
        dotsEl.appendChild(d);
      }
    }
    function goTo(idx) {
      current = Math.max(0, Math.min(idx, maxIdx()));
      track.style.transform = `translateX(-${(current / total) * 100}%)`;
      dotsEl.querySelectorAll('.c-dot').forEach((d, i) => d.classList.toggle('active', i === current));
      if (prevEl) prevEl.disabled = current === 0;
      if (nextEl) nextEl.disabled = current >= maxIdx();
    }
    const next = () => goTo(current >= maxIdx() ? 0 : current + 1);
    const prev = () => goTo(current - 1);
    function startAuto() { stopAuto(); timer = setInterval(next, 4000); }
    function stopAuto()  { clearInterval(timer); }

    if (prevEl) prevEl.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
    if (nextEl) nextEl.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

    let dragX = 0, dragging = false;
    track.addEventListener('mousedown',  e => { dragX = e.clientX; dragging = true; });
    track.addEventListener('mouseup',    e => { if (!dragging) return; dragging = false; const d = dragX - e.clientX; if (Math.abs(d) > 50) { stopAuto(); d > 0 ? next() : prev(); startAuto(); } });
    track.addEventListener('mouseleave', () => { dragging = false; });
    track.addEventListener('touchstart', e => { dragX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   e => { const d = dragX - e.changedTouches[0].clientX; if (Math.abs(d) > 50) { stopAuto(); d > 0 ? next() : prev(); startAuto(); } });
    track.parentElement.addEventListener('mouseenter', stopAuto);
    track.parentElement.addEventListener('mouseleave', startAuto);
    document.addEventListener('visibilitychange', () => document.hidden ? stopAuto() : startAuto());

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { buildDots(); goTo(Math.min(current, maxIdx())); }, 150);
    });

    buildDots(); goTo(0);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) startAuto();
  }


  /* ── 5. SCROLL REVEAL ────────────────────────── */
  const revealObs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        revealObs.unobserve(e.target);
      }
    }),
    { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  /* ── 6. NAV: siempre visible (no ocultar al scrollear) ── */
  // No ocultamos el nav en mobile para no perder la hamburguesa.


  /* ── 7. ACTIVE NAV LINKS ─────────────────────── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (navLinks.length) {
    const activeObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
      }),
      { threshold: 0.35 }
    );
    sections.forEach(s => activeObs.observe(s));
  }

});
