document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");

    footer.innerHTML = `
      <div class="wrap">
          <div class="footer-grid">
          <a class="logo" href="#top"><span class="dot"></span>Rosina Peñaranda, MD</a>
          <div class="footer-links">
              <a href="#services">Focus areas</a>
              <a href="#about">About</a>
              <a href="#process">Process</a>
              <a href="#book">Book a session</a>
          </div>
          </div>
          <div class="footer-bottom">
          <span>hello@rosinapenaranda.com — placeholder</span>
          <span>© 2026 Rosina Peñaranda, MD. All rights reserved.</span>
          </div>
      </div>
    `;
});

document.addEventListener("DOMContentLoaded", () => {
    const cta = document.getElementById("cta");

    cta.innerHTML = `
        <section class="final-cta" id="book">
            <div class="cta-panel reveal">
                <h2>Ready when you are.</h2>

                <div class="cta-right">
                    <p>
                        In-person and virtual sessions available.
                        Most people hear back within one business day.
                    </p>

                    <a class="btn-light" href="#">
                        Book your first session →
                    </a>
                </div>
            </div>
        </section>
    `;
});