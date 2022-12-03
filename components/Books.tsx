import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import books from "../db/books";

import plus from "../assets/plus-square.svg";
import prev from "../assets/previous.svg";
import next from "../assets/next.svg";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";

const BooksDisplay = () => {
  const bookDisplay = ["6", "7", "8", "5", "1", "2", "4"];
  const [openModal, setOpenModal] = useState(false);
  const [bookAdded, setBookAdded] = useState(false);

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
          <Image
            src={plus}
            className="plus"
            alt=""
            onClick={() => setOpenModal(true)}
          />
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
      {openModal ? (
        <div className="backdrop" onClick={() => setOpenModal(false)}>
          <div
            className="modal-add-book"
            onClick={(event) => event.stopPropagation}
          >
            <div className="modal-header">
              <h1 className="request-title">Requisitar Livro</h1>
              <div className="close-icon" onClick={() => setOpenModal(false)}>
                <IoCloseCircleOutline size={24} color="#ffffff" />
              </div>
            </div>
            <div className="modal-input-container">
              <input
                className="input-text-modal"
                type={"text"}
                placeholder="Título do livro"
              />
              <input
                className="input-text-modal"
                type={"text"}
                placeholder="Autor"
              />
              <input
                className="input-text-modal"
                type={"text"}
                placeholder="Categoria"
              />
              <input
                className="input-text-modal"
                type={"text"}
                placeholder="Editora"
              />
              <div>
                <div className="modal-text-image">
                  <p className="text-load-image">
                    Carregar imagem do seu computador
                  </p>
                  {/* <p className="text-load-image">Carregar nova imagem</p> */}
                </div>
                <div className="modal-btn-container">
                  <button
                    className="modal-btn"
                    onClick={() => {
                      setOpenModal(false);
                      setBookAdded(true);
                    }}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {bookAdded ? (
        <div className="backdrop" onClick={(event) => event.stopPropagation()}>
          <div
            className="modal-confirmed"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="confirmed-container">
              <h1 className="request-title">Adicionou um livro</h1>
              <p className="confirmed-text">
                Obrigado por adicionar mais um livro à nossa biblioteca.
              </p>
            </div>
            <div className="button-container">
              <button
                className="back-button"
                onClick={() => {
                  setBookAdded(false);
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

export default BooksDisplay;
