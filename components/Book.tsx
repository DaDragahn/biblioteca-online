import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book } from "../db/books";

import next from "../assets/next.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";

export interface BookDisplayProps {
  book: Book;
}
const BookDisplay = ({ book }: BookDisplayProps) => {
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [back, setBack] = useState(false);

  return (
    <div>
      <div className="category-path">
        <p className="text-category-path">A nossa biblioteca</p>
        <Image src={next} alt="" height={24} width={24} />
        <p className="text-category-title">{book.title}</p>
      </div>

      <div className="display-book">
        <figure>
          <Image src={book.img} alt="" width={360} height={520} />
        </figure>
        <div className="icons">
          <AiOutlineHeart size={24} color="#ff4e16" />
          <div className="review">
            <Image src={like} alt="" width={24} height={24} />
            <p className="number-review">40</p>
          </div>
          <div className="review">
            <Image src={dislike} alt="" width={24} height={24} />
            <p className="number-review">6</p>
          </div>
        </div>
        <div className="book-info">
          <h1 id="title">{book.title}</h1>
          <div className="author-title">
            <p id="author">{book.author}</p>
            <RxDotFilled color="#ffffff" />
            <p id="category">{book.tag}</p>
          </div>

          <div id="editor">
            <p id="text-editor">Editora: Planeta, junho de 2021</p>
          </div>

          <p id="rental">{book.rental}€/semana</p>

          <button
            id={submit ? "return-button" : "request-button"}
            onClick={() => setOpen(true)}
          >
            {submit ? "Devolver" : "Requisitar"}
          </button>
        </div>
      </div>
      {open ? (
        <div className="backdrop" onClick={() => setOpen(false)}>
          <div
            className="modal-request"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <h1 className="request-title">Requisitar Livro</h1>
              <div className="close-icon" onClick={() => setOpen(false)}>
                <IoCloseCircleOutline size={24} color="#ffffff" />
              </div>
            </div>
            <div className="rent-book">
              <div className="selector">
                <select className="weeks-select">
                  {/* <optgroup className="placeholder"> */}
                  <option>Quantas semanas? </option>
                  {/* </optgroup> */}
                  {/* <optgroup className="options"> */}
                  <option value={book.rental}>1 semanas</option>
                  <option value={book.rental * 2}>2 semanas</option>
                  <option value={book.rental * 3}>3 semanas</option>
                  {/* </optgroup> */}
                </select>
              </div>
              <label className="price-week">
                Este livro tem um custo de {book.rental}€/semana{" "}
              </label>
              <div className="total-price">
                <p className="total">Total:</p>
                <h1 className="price">0.00€</h1>
              </div>
            </div>
            <div className="button-container">
              <button
                id="request-button"
                onClick={() => {
                  setOpen(false);
                  setSubmit(true);
                }}
              >
                Requisitar
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {submit && !back ? (
        <div className="backdrop" onClick={(event) => event.stopPropagation()}>
          <div
            className="modal-confirmed"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="confirmed-container">
              <h1 className="request-title">Livro requisitado</h1>
              <p className="confirmed-text">Requisitou o livro com sucesso</p>
            </div>
            <div className="button-container">
              <button className="back-button" onClick={() => setBack(true)}>
                Voltar
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {/* {submit && back && !open ? <div className="backdrop"></div> : null} */}
    </div>
  );
};

export default BookDisplay;
