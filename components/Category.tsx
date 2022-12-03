import React, { useState } from "react";
import Image from "next/image";
import { Category } from "../db/categories";
import books from "../db/books";
import Link from "next/link";

export interface CategoryDisplayProps {
  category: Category;
}

const CategoryDisplay = ({ category }: CategoryDisplayProps) => {
  const bookDisplay = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="category-text">
        <h1 className="title-category">{category.cat}</h1>
        <p className="text-books-list">
          Estes são os livros que temos desta categoria:
        </p>
      </div>
      <div className="display-category-books">
        {bookDisplay.map((bookId) => {
          const book = books[bookId];
          if (book.tag === category.cat) {
            return (
              <div>
                <Link href={`/book/${bookId}`}>
                  <figure>
                    <Image src={book.img} alt="" width={264} height={381} />
                    <figcaption className="title-book-category">
                      {book.title}
                    </figcaption>
                    <figcaption className="author-book-category">
                      {book.author}
                    </figcaption>
                    <figcaption className="rental-price-category">
                      {book.rental}€/semana
                    </figcaption>
                  </figure>
                </Link>
              </div>
            );
          }
        })}
        {show ? (
          <div className="no-book-found">
            <p className="no-book-found-text">
              Parece que não temos livros da categoria que escolheu
            </p>
            <button className="back-categories-button">Voltar</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CategoryDisplay;
