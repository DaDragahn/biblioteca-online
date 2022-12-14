import Image from "next/image";
import Link from "next/link";
import React from "react";
const LoginDisplay = () => {
  return (
    <div className="container">
      <div className="showcase">
        <h1 className="title-request">
          Comece a viajar <br /> pelos livros
        </h1>
        <Image src={"/book3.png"} alt="book3" width={212} height={326} />
        <Image
          id="book2"
          src={"/book4.png"}
          alt="book4"
          width={211}
          height={326}
        />
        <Image
          id="book3"
          src={"/book1.png"}
          alt="book1"
          width={211}
          height={326}
        />
        <Image
          id="book4"
          src={"/book2.png"}
          alt="book2"
          width={220}
          height={326}
        />

        <p id="quote">
          “Há livros escritos para evitar espaços vazios na estante.”
        </p>
        <p id="author">Carlos Drummond de Andrade</p>
      </div>

      <div className="login">
        <h2 className="title-login">Login</h2>
        <input className="input-text" type={"email"} placeholder="Email" />
        <input
          className="input-text"
          type={"password"}
          placeholder="Password"
        />

        <div className="checkbox">
          <input className="check" type="checkbox" name="check" />
          <label className="text-check">Lembrar-me nas próximas sessões</label>
        </div>

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
