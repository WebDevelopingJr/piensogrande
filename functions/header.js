let imageLink = 'log-pienso-horiz-bco.png';

document.getElementById("site-header").innerHTML = `
  <nav class="nav" id="mainNav">
  <a href="/piensogrande" class="nav-logo"><img id="logoImg" src='images/home/${imageLink}' alt='logo-pienso' /></a>

    <ul class="nav-links">
      <li><a href="/piensogrande/aboutUs.html">Conócenos</a></li>
      <li><a href="/piensogrande/services.html">Servicios</a></li>
      <li><a href="/piensogrande/blog.html">Blog</a></li>
      <li><a href="/piensogrande/contact.html" class="nav-cta">Contactame</a></li>
    </ul>

    <button class="nav-hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="nav-mobile" id="mobileMenu">
    <ul>
      <li><a href="/piensogrande/aboutUs.html" class="mobile-link">Conocenos</a></li>
      <li><a href="/piensogrande/services.html" class="mobile-link">Servicios</a></li>
      <li><a href="/piensogrande/blog.html" class="mobile-link">Blog</a></li>
      <li><a href="/piensogrande/contact.html" class="mobile-link">Contactame</a></li>
    </ul>
  </div>
`;

const mainNav = document.getElementById("mainNav");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

const logoImg = document.getElementById("logoImg");

window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 50;

  mainNav.classList.toggle("scrolled", isScrolled);

  if (isScrolled) {
    logoImg.src = 'images/home/log-pienso-horiz.png';
  } else {
    logoImg.src = 'images/home/log-pienso-horiz-bco.png';
  }
});

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  });
});
