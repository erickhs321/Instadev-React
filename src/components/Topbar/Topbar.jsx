import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/img/instagram-logo.svg";

import "./Topbar.scss";

const Topbar = () => (
  <header className="topbar">
    <div className="container">
      <Link class="topbar__logo" to="/">
        <LogoSvg />
      </Link>
      <div className="topbar__group">
        <button class="topbar__icon">
          <Link to="/users">
            <i class="fas fa-users"></i>
            <span>Usuários</span>
          </Link>
        </button>
        <button class="topbar__icon">
          <Link to="/newuser">
            <i class="fas fa-user-plus"></i>
            <span>Nova Conta</span>
          </Link>
        </button>
      </div>
    </div>
  </header>
);

export default Topbar;
