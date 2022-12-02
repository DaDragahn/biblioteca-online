import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import book from "../assets/book.svg";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
import book8 from "../assets/book8.png";

const HomeDisplay = () => {
  const [bookDisplay, setBookDisplay] = useState([
    {
      img: book5,
      title: "War & Peace",
      author: "Leo Tolstoy",
    },
    {
      img: book6,
      title: "Torne-se um decifrador de pessoas",
      author: "Alexandre Monteiro",
    },
    {
      img: book7,
      title: "A Powerful Path",
      author: "Haven Obrien",
    },
    {
      img: book8,
      title: "Grandes Palavras Pequenas Ações",
      author: "Joana Santos",
    },
  ]);

  return (
    <div>
      <div className="top">
        <div className="info">
          <h1 className="title-welcome">
            Bem-vindo à nossa <br />
            biblioteca online
          </h1>
          <p className="text-welcome">
            Descruba os romances,histórias míticas, biografias e muito <br />
            mais na nossa biblioteca. Requisite o seu próximo livro de <br />
            uma forma fácil e em poucos passos
          </p>
          <button className="request-button">
            <Link href={"/books"}>Requisite já um livro</Link>
          </button>
        </div>
        <div>
          <Image className="book" src={book} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="news">
          <h2 className="title-news">Sempre com novidades</h2>
          <p className="text-news">Veja os novos livros que apareceram!</p>
        </div>

        <div className="display">
          {bookDisplay.map((book) => (
            <figure>
              <Image src={book.img} width="264" height="381" alt="" />
              <figcaption className="book-title">{book.title}</figcaption>
              <figcaption className="book-author">{book.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDisplay;
