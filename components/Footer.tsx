import React, { useState } from "react";
import bookshelves from "../assets/bookshelves.svg";
import person from "../assets/pessoa.svg";
import Image from "next/image";

const FooterDisplay = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container-footer">
      <div className="newsletter">
        <h2 className="title">Inscreva-se na nossa newsletter</h2>
        <p className="text">Receba notícias e as novidades que o esperas.</p>
        <div className="inscrever">
          <input
            className="input-email"
            type={"email"}
            placeholder="Email"
          ></input>
          <button
            className="inscrever-button"
            onClick={() => setOpenModal(true)}
          >
            Inscrever
          </button>
        </div>
      </div>

      <div className="images">
        <Image id="bookshelves" src={bookshelves} alt="" />
        <Image id="person" src={person} alt="" />
      </div>
      {openModal ? (
        <div className="backdrop" onClick={(event) => event.stopPropagation()}>
          <div
            className="modal-subscribe"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="registered-modal-container">
              <h1 className="registered-modal-title">Registo concluído</h1>
              <p className="registered-modal-text">
                Por favor, confirme o seu e-mail para validar o seu e-mail.
              </p>
            </div>
            <div className="button-modal-container">
              <button
                className="back-button"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FooterDisplay;
