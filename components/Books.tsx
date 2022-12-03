import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import books from "../db/books";

import plus from "../assets/plus-square.svg";
import prev from "../assets/previous.svg";
import next from "../assets/next.svg";
import Link from "next/link";

const BooksDisplay = () => {
  const bookDisplay = ["6", "7", "8", "5", "1", "2", "4"];

  return (
    <div>
      <h1 className="library-title">A nossa biblioteca</h1>
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Pesquise um livro"
        />
      </div>

      <div className="display-books">
        <figure className="add">
          <Image src={plus} className="plus" alt="" />
          <figcaption className="add-book">Adicionar um livro</figcaption>
        </figure>
        {bookDisplay.map((bookId) => {
          const book = books[bookId];
          return (
            <Link href={`/book/${bookId}`}>
              <figure>
                <div className="icon">
                  <AiOutlineHeart size="24px" color="#ff4e16" />
                </div>

                <Image
                  src={book.img}
                  className="plus"
                  width="264"
                  height="381"
                  alt=""
                />
                <figcaption className="title-book-library">
                  {book.title}
                </figcaption>
                <figcaption className="author-book-library">
                  {book.author}
                </figcaption>
                <figcaption className="rental-price">
                  {book.rental}€/semana
                </figcaption>
              </figure>
            </Link>
          );
        })}
      </div>

      <div>
        <ul className="bottom-nav">
          <li>
            <Image src={prev} alt="" />
          </li>
          <li className="selected">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>
            <Image src={next} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BooksDisplay;
