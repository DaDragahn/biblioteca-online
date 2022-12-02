import logo from "../assets/decode_logo.svg";
import portugal from "../assets/portugal.svg";
import english from "../assets/english.svg";
import select from "../assets/select.svg";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    // if (event.currentTarget.className != "active") {
    // console.log(true);
    // event.currentTarget.classList.remove("active");
    //   event.currentTarget.classList.add("active");
    // }
    // event.currentTarget.classList.add("active");
    // setIsActive((current) => !current);
  };

  return (
    <div className="App-header">
      <Image src={logo} className="App-logo" alt="logo" />

      <nav>
        <ul className="header">
          <li className={"active"} onClick={handleClick}>
            <Link href="/">Home</Link>
          </li>
          <li className={"active"} onClick={handleClick}>
            <Link href="/books">Livros</Link>
          </li>
          <li className={"active"} onClick={handleClick}>
            <Link href="/categories">Categorias</Link>
          </li>
          <li className={"active"} onClick={handleClick}>
            <Link href="/about">Sobre Nós</Link>
          </li>
          {/* <li className={isActive ? "active" : " "} onClick={handleClick}>
            <Link href="/">Home</Link>
          </li>
          <li className={isActive ? "active" : " "} onClick={handleClick}>
            <Link href="/books">Livros</Link>
          </li>
          <li className={isActive ? "active" : " "} onClick={handleClick}>
            <Link href="/categories">Categorias</Link>
          </li>
          <li className={isActive ? "active" : " "} onClick={handleClick}>
            <Link href="/about">Sobre Nós</Link>
          </li> */}
        </ul>
      </nav>

      <button className="login-button">
        <Link href="./login">Login</Link>
      </button>

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
