import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

import plus from "../assets/plus-square.svg";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
import book8 from "../assets/book8.png";
import prev from "../assets/previous.svg";
import next from "../assets/next.svg";

const BooksDisplay = () => {
  // const [books, setBooks] = useState([
  const books = [
    {
      img: book6,
      title: "Torne-se um decifrador de pessoas",
      author: "Alexandre Monteiro",
      rental: "2€/semana",
      tag: "Desenvolvimento Pessoal",
    },
    {
      img: book7,
      title: "A Powerful Path",
      author: "Haven Obrien",
      rental: "1,5€/semana",
    },
    {
      img: book8,
      title: "Grandes Palavras Pequenas Ações",
      author: "Joana Santos",
      rental: "1,3€/semana",
      tag: "Desenvolvimento Pessoal",
    },
    {
      img: book5,
      title: "War & Peace",
      author: "Leo Tolstoy",
      rental: "2€/semana",
    },
    {
      img: book1,
      title: "Tudo o que somos juntos",
      author: "Alice Kellen",
      rental: "2€/semana",
    },
    {
      img: book2,
      title: "O Sanatório",
      author: "Richard Osman",
      rental: "2€/semana",
    },
    {
      img: book4,
      title: "Vidas Seguintes",
      author: "Abdulrazak Gurnah",
      rental: "2€/semana",
    },
  ];

  return (
    <div>
      <div className="search">
        <h1 className="library-title">A nossa biblioteca</h1>
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
        {books.map((book) => (
          <figure>
            {/* <AiOutlineHeart size="24px" color="#ff4e16" /> */}
            <Image
              src={book.img}
              className="plus"
              width="264"
              height="381"
              alt=""
            />
            <figcaption className="title-book-library">{book.title}</figcaption>
            <figcaption className="author-book-library">
              {book.author}
            </figcaption>
            <figcaption className="rental-price">{book.rental}</figcaption>
          </figure>
        ))}
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
