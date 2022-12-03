import React, { useState } from "react";
import Image from "next/image";
import { Category } from "../db/categories";
import books from "../db/books";

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
          console.log(book.tag);
          if (book.tag === category.cat) {
            return (
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
            );
          }
        })}
      </div>
    </div>
  );
};

export default CategoryDisplay;
