// GOo ExploRer - Mobile menu & search tabs
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });

    document.querySelectorAll('.nav-list a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
      });
    });
  }

})();
