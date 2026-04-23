function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

function toggleAccordion(btn) {
  var body = btn.nextElementSibling;
  var arrow = btn.querySelector('span:first-child');
  if (body.classList.contains('open')) {
    body.classList.remove('open');
    if (arrow) arrow.textContent = '▶';
  } else {
    body.classList.add('open');
    if (arrow) arrow.textContent = '▼';
  }
}
