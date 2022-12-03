import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

import logo from "../assets/decode_logo.svg";
import portugal from "../assets/portugal.svg";
import english from "../assets/english.svg";
import select from "../assets/select.svg";
import icon from "../assets/icon.svg";

const Header = () => {
  const router = useRouter();

  return (
    <div className="App-header">
      <Image src={logo} className="App-logo" alt="logo" />

      <nav>
        <ul className="header">
          <li className={router.pathname === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname === "/books" ? "active" : ""}>
            <Link href="/books">Livros</Link>
          </li>
          <li className={router.pathname === "/categories" ? "active" : ""}>
            <Link href="/categories">Categorias</Link>
          </li>
          <li className={router.pathname === "/about" ? "active" : ""}>
            <Link href="/about">Sobre Nós</Link>
          </li>
        </ul>
      </nav>

      <div className="user-login-container">
        <button className="login-button">
          <Link href="./login">Login</Link>
        </button>
        <div className="logged-in">
          <Image
            className="user-icon"
            src={icon}
            alt=""
            width={40}
            height={40}
          />
        </div>
      </div>

      <div id="country-select">
        <Image id="select" src={select} alt="" width={24} height={24} />

        <div className="select-lang">
          <div className="options">
            <div className="option" id="lang1">
              <input type="radio" name="flag" id="portugues" checked />
              <label htmlFor="portugues">
                <Image src={portugal} alt="" />
              </label>
            </div>
            <div className="option" id="lang2">
              <input type="radio" name="flag" id="english" />
              <label htmlFor="english">
                <Image src={english} alt="" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
