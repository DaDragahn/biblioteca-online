import React from "react";
import bookshelves from "../assets/bookshelves.svg";
import person from "../assets/pessoa.svg";
import Image from "next/image";

const FooterDisplay = () => {
  return (
    <div className="container-footer">
      <div className="newsletter">
        <h2 className="title">Inscreva-se na nossa newsletter</h2>
        <p className="text">Receba notícias e as novidades que o esperas.</p>
        <div className="inscrever">
          <input
            className="input-email"
            type="text"
            placeholder="Email"
          ></input>
          <button className="inscrever-button">Inscrever</button>
        </div>
      </div>

      <div className="images">
        <Image id="bookshelves" src={bookshelves} alt="" />
        <Image id="person" src={person} alt="" />
      </div>
    </div>
  );
};

export default FooterDisplay;
