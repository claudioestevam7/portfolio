import React from "react";
import './footer.css'


const Footer = () => {
  var altura = window.screen.height;
  var largura = window.screen.width;
  console.log(altura);
  console.log(largura);
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Cláudio Estevam</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link cor">
              Sobre
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link cor">
              Projetos
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link cor">
              Recomendações
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/claudioestevam"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin" style={{ color: '#fff' }}></i>
          </a>
          <a
            href="https://github.com/claudioestevam7"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github" style={{ color: '#fff' }}></i>
          </a>

        </div>

        <span className="footer__copy">&#169; Cláudio Estevam. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
