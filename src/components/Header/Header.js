/* @jsxImportSource next/client */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import "./Header.css";
import logo from "../../images/logotipo.png";
import exit from "../../images/exit.png";
import menu from "../../images/menu.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div className="contentHeader">
      <div className={`boxHeader borderCard ${menuOpen ? "menuOpen" : ""}`}>
        <Link
          to="/jokes"
          onClick={closeMenu}
          className="imgLogo contenedor-rotacion"
        >
          <img className="imgLogo rotacion" src={logo} title="Inicio" alt="" />
        </Link>
        <div className="menuButton" onClick={toggleMenu}>
          <img src={menu} title="Menu" width="35px" alt="menu" />
        </div>
        <ul className="navBar">
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/jokes") ? "active" : ""}`}
            to="/jokes"
          >
            Inicio
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/jokes/create") ? "active" : ""}`}
            to="/jokes/create"
          >
            Añadir
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/user") ? "active" : ""}`}
            to="/user"
          >
            Perfil
          </Link>
          <hr className="line" />
          <Link
            onClick={closeMenu}
            className={`myBtn ${isActive("/top") ? "active" : ""}`}
            to="/top"
          >
            Top
          </Link>
        </ul>
        <div className="socialNetworkIcons">
          <div className="boxBtnExit" onClick={() => setConfirmLogout(true)}>
            <img className="btnExit" src={exit} alt="" />
          </div>
        </div>
        {confirmLogout && (
          <div className="overlay" onClick={() => setConfirmLogout(false)}>
            <div className="logoutConfirm" onClick={(e) => e.stopPropagation()}>
              <p>¿Estás seguro de que quieres cerrar sesión?</p>
              <div className="flexBtw">
                <button className="myBtn" onClick={handleLogout}>
                  Aceptar
                </button>
                <button
                  className="myBtn"
                  onClick={() => setConfirmLogout(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="empyHeader"> </div>
      <div className="spaceHeader"> </div>
    </div>
  );
}
