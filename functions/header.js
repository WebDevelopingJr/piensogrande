document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");

    header.innerHTML = `
    <a href='/piensogrande' style="text-style: none; color: black;"><img src='images/home/log-pienso-horiz.png' alt='log-pienso' style='width: 110px;' /></a>
      <ul class="nav-links">
          <li><a href="/piensogrande/aboutUs.html">Conócenos</a></li>
          <li><a href="/piensogrande/blog.html">Blog</a></li>
          <li><a href="/piensogrande/services.html">Como puedo ayudarte</a></li>
      </ul>
    <a class="btn btn-primary nav-cta" href="/piensogrande/contact.html">Agenda una sesión</a>
    `;
});

const nav = document.querySelector('.siteNav');
  function onScrollNav(){
    nav.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScrollNav, { passive:true });
  onScrollNav();