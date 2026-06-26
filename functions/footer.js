document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");

    footer.innerHTML = `
    <div class="footer-grid">
      <div>
        <img src='images/home/log-pienso.png' alt='footer-logo' style='width: 130px; margin-bottoM' />
      </div>
      <div>
        <div class="footer-col-title">Explorar</div>
        <ul class="footer-links">
          <li><a href="#">Sobre Rosina</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Mi libro</a></li>
          <li><a href="#">Recursos gratuitos</a></li>
          <li><a href="#">Comunidad WhatsApp</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Conectar</div>
        <ul class="footer-links">
          <li><a href="#">Agendar sesión</a></li>
          <li><a href="#">Boletín de noticias</a></li>
          <li><a href="https://x.com/piensogrande">X / Twitter</a></li>
          <li><a href="#">Trabaja con Rosina</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bar">
      <span class="footer-copy">© 2026 Rosina Peñaranda, Psicologa. All rights reserved.</span>
      <span class="footer-copy" style="color:#202020;display: flex;gap: 20px"><a href='/terms.html'>Terms and services</a> <a href='/privacy.html'>Privacy policy</a></span>
    </div>
    `;
});
