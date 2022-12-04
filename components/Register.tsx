import React, { useState } from "react";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import facebook from "../assets/facebook.png";
import Link from "next/link";
import Image from "next/image";

const RegisterDisplay = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="showcase">
        <h1 className="title-request">
          Requisite, adicione <br /> e partilhe livros!
        </h1>
        <Image src={"/book1.png"} alt="book1" width={211} height={326} />
        <Image
          id="book2"
          src={"/book2.png"}
          alt="book2"
          width={220}
          height={326}
        />
        <Image
          id="book3"
          src={"/book3.png"}
          alt="book3"
          width={212}
          height={326}
        />
        <Image
          id="book4"
          src={"/book4.png"}
          alt="book4"
          width={211}
          height={326}
        />
        <p id="quote">
          “Respirei fundo e escutei o velho e orgulhoso som do meu <br />
          coração. Eu sou, eu sou, eu sou.”
        </p>
        <p id="author">Sylvia Plath</p>
      </div>

      <div className="register">
        <h2 className="title-register">Registar</h2>
        <input className="input-text" type={"email"} placeholder="Email" />
        <input
          className="input-text"
          type={"password"}
          placeholder="Password"
        />
        <input
          className="input-text"
          type={"password"}
          placeholder="Confirmar Password"
        />

        <div>
          <label className="text-check">
            <input className="check" type="checkbox" name="check" />
            Inscrever-me na newsletter
          </label>
        </div>

        <button className="register-button" onClick={() => setOpen(true)}>
          Registar
        </button>

        <p className="text-other">Registar com a sua conta</p>
        <div className="buttons-login">
          <button className="other-login">
            <Image className="logo" src={google} width="22" alt="google-logo" />
          </button>
          <button className="other-login">
            <Image className="logo" src={apple} width="24" alt="apple-logo" />
          </button>
          <button className="other-login">
            <Image
              className="logo"
              src={facebook}
              width="24"
              alt="facebook-logo"
            />
          </button>
        </div>

        <hr className="line" />
        <button className="already-registered-button">
          <Link href="./login">Já tem conta? Faça Login</Link>
        </button>
      </div>
      {open ? (
        <div className="backdrop" onClick={(event) => event.stopPropagation()}>
          <div
            className="modal-registered"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="registered-container">
              <h1 className="registered-title">Registo concluído</h1>
              <p className="registered-text">
                Por favor, confirme o seu e-mail para validar o seu e-mail.
              </p>
            </div>
            <div className="button-container">
              <Link href={"/"}>
                <button
                  className="continue-button"
                  onClick={() => setOpen(false)}
                >
                  Continuar
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RegisterDisplay;
