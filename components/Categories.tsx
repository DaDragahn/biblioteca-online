import Link from "next/link";
import React, { useState } from "react";
import categories from "../db/categories";

const CategoriesDisplay = () => {
  return (
    <div>
      <h1 className="title-categories">Que categorias é que procura?</h1>
      <div className="search">
        <input
          className="search-bar-cat"
          type="text"
          placeholder="Pesquise um livro"
        />
      </div>

      <div className="categories">
        {Object.keys(categories).map((categoryId) => {
          const category = categories[categoryId];
          if (category.cat === "Desenvolvimento pessoal") {
            return (
              <button className="category">
                <Link href={`/category/${categoryId}`}>{category.cat}</Link>
              </button>
            );
          }
          return (
            <button className="category">
              <Link href={`/category/${categoryId}`}>{category.cat}</Link>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesDisplay;
