import Image from "next/image";
import Link from "next/link";
import React from "react";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";

const LoginDisplay = () => {
  return (
    <div className="container">
      <div className="showcase">
        <h1 className="title-request">
          Comece a viajar <br /> pelos livros
        </h1>
        <Image src={book3} alt="book3" width={212} />
        <Image id="book2" src={book4} alt="book4" width={211} />
        <Image id="book3" src={book1} alt="book1" width={211} />
        <Image id="book4" src={book2} alt="book2" width={220} />

        <p id="quote">
          “Há livros escritos para evitar espaços vazios na estante.”
        </p>
        <p id="author">Carlos Drummond de Andrade</p>
      </div>

      <div className="login">
        <h2 className="title-login">Login</h2>
        <input className="input-text" placeholder="Email" />
        <input className="input-text" placeholder="Password" />

        <label className="text-check">
          <input className="check" type="checkbox" name="check" />
          Lembrar-me nas próximas sessões
        </label>
        <button className="sign-in-button">
          <Link href={"/home"}>Login</Link>
        </button>

        <hr className="line" />
        <button className="not-registered-button">
          <Link href="./register">Não tem conta? Registe-se aqui</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginDisplay;
