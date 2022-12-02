import React, { useState } from "react";
import Image from "next/image";

const CategoryDisplay = () => {
  return (
    <div>
      <div className="category-text">
        <h1 className="title-category">Desenvolvimento pessoal</h1>
        <p className="text-books-list">
          Estes são os livros que temos desta categoria:
        </p>
      </div>
      <div className="display-category-books">
        <figure>
          <Image src="" alt="" />
          <figcaption></figcaption>
          <figcaption></figcaption>
          <figcaption></figcaption>
        </figure>
      </div>
    </div>
  );
};

export default CategoryDisplay;
