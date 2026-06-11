(function () {
  var header = document.querySelector('#header');
  if (!header || document.querySelector('.site-mobile-nav-toggle')) return;

  document.querySelectorAll('.header-burger').forEach(function (burger) {
    burger.remove();
  });

  var stylesheet = document.querySelector('link[href*="assets/static/site-fixes.css"]');
  var stylesheetHref = stylesheet ? stylesheet.getAttribute('href') : 'assets/static/site-fixes.css';
  var root = stylesheetHref.replace(/assets\/static\/site-fixes\.css.*$/, '');

  var toggle = document.createElement('button');
  toggle.className = 'site-mobile-nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.innerHTML = '<span></span><span></span>';

  var menu = document.createElement('nav');
  menu.className = 'site-mobile-nav';
  menu.setAttribute('aria-label', 'Mobile navigation');
  menu.innerHTML =
    '<a href="' + root + 'about.html">About</a>' +
    '<a href="' + root + 'writing/index.html">Writing</a>' +
    '<a href="' + root + 'engineering/index.html">Engineering</a>' +
    '<a href="' + root + 'arting/index.html">Arting</a>';

  function setOpen(open) {
    document.body.classList.toggle('site-mobile-nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!document.body.classList.contains('site-mobile-nav-open'));
  });
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setOpen(false);
  });

  header.appendChild(toggle);
  header.appendChild(menu);
})();
