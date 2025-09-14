import React from "react";
import icon from "../assets/icon.png";
import LoginButton from "./login/LoginButton";
import "../styles/Header.css";

export default function Header() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header className="Encabezado">
      <nav className="nav-container">
        <div
          className="logo-name"
          onClick={scrollToTop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
          style={{ cursor: "pointer" }}
        >
          <img className="icon" src={icon} alt="Hospital Icon" />
          <p className="name-hospital">SANTA ROSA</p>
        </div>

        <div className="nav-links">
          <a href="#staff">Staff Medicos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          {/* Reservas link eliminado */}
        </div>

        <div className="nav-auth">
          <LoginButton />
        </div>
      </nav>
    </header>
  );
}
