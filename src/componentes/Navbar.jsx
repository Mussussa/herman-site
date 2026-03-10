import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        {/* 1. LOGO E LOCALIZAÇÃO (Esquerda) */}
        <a
          className="navbar-brand d-flex flex-column align-items-center"
          href="#"
        >
          <span className="fs-4 " style={{color: "#b45309", borderColor: "#b45309" }}>Hotel Castelo Branco</span>
          <small
            className="text-muted animate__animated animate__fadeIn animate__delay-1s"
            style={{ fontSize: "0.6em", lineHeight: "1" }}
          >
            Chimoio
          </small>
        </a>

        {/* BOTÃO HAMBÚRGUER (Apenas para Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 2. CONTEÚDO QUE COLAPSA */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* MENU CENTRALIZADO: mx-auto empurra o menu para o centro */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fs-5" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Comodidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Quartos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Galeria</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Contactos</a>
            </li>
          </ul>

          {/* 3. BOTÃO DE RESERVA (Direita) */}
          <div className="d-flex">
            <button className="btn btn-primary animate__animated animate__pulse animate__infinite" style={{ backgroundColor: "#b45309", borderColor: "#b45309" }}>
              Reservar Agora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;