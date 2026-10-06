// GOo ExploRer - header, mobile menu, tours slider, search, reveal & lightbox
(function () {
  document.documentElement.classList.add('js');

  // Header: solid background once the page is scrolled
  const header = document.getElementById('header');
  const onScroll = function () {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    const setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open);
    };

    navToggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });
  }

  // Tours slider arrows
  const track = document.getElementById('tours-track');
  document.querySelectorAll('.slider-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const card = track.querySelector('.tour-card');
      const step = card ? card.getBoundingClientRect().width + 24 : 300;
      track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: 'smooth' });
    });
  });

  // Search: send the enquiry on WhatsApp
  const form = document.getElementById('search-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const place = document.getElementById('s-location').value;
      const from = document.getElementById('s-in').value;
      const to = document.getElementById('s-out').value;
      let msg = 'Hi GOo ExploRer! I am interested in a tour to ' + place;
      if (from) msg += ' from ' + from;
      if (to) msg += ' to ' + to;
      msg += '.';
      window.open('https://wa.me/923065500888?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }

  // Reveal on scroll, staggered within each group
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(function (el) {
    const siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
      return c.classList.contains('reveal');
    });
    el.style.setProperty('--d', (siblings.indexOf(el) * 0.08) + 's');
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Active nav link for the section in view
  const links = document.querySelectorAll('.nav-list a');
  const sections = Array.prototype.map.call(links, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });
  window.addEventListener('scroll', function () {
    const y = window.scrollY + window.innerHeight / 3;
    let current = 0;
    sections.forEach(function (s, i) {
      if (s && s.offsetTop <= y) current = i;
    });
    links.forEach(function (a, i) { a.classList.toggle('is-active', i === current); });
  }, { passive: true });

  // Gallery lightbox
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('img');
  const closeLightbox = function () { lightbox.hidden = true; };

  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      const img = item.querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.hidden = false;
    });
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target !== lbImg) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
