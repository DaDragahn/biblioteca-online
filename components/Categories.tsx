import Link from "next/link";
import React, { useState } from "react";

const CategoriesDisplay = () => {
  const categories = [
    { cat: "Arte" },
    { cat: "Banda desenhada" },
    { cat: "Ciências exatas e naturais" },
    { cat: "Ciências sociais e humanas" },
    { cat: "Desenvolvimento pessoal" },
    { cat: "Desporto e lazer" },
    { cat: "Dicionários e enciclopédias" },
    { cat: "Direito" },
    { cat: "Economia e finanças" },
    { cat: "Engenharia" },
    { cat: "Ensino e educação" },
    { cat: "Gastronomia e vinhos" },
    { cat: "Gestão" },
    { cat: "Guias turísticos e mapas" },
    { cat: "História" },
    { cat: "Infantis e juvenis" },
    { cat: "Informática" },
    { cat: "Literatura" },
    { cat: "Medicina" },
    { cat: "Plano nacional de leitura" },
    { cat: "Política" },
    { cat: "Saúde e bem-estar" },
    { cat: "Religião e moral" },
    { cat: "Vida prática" },
  ];

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
        {categories.map((category) => {
          if (category.cat === "Desenvolvimento pessoal") {
            return (
              <button className="category">
                <Link href="/category">{category.cat}</Link>
              </button>
            );
          }

          if (category.cat === "História") {
            return (
              <button className="category">
                <Link href="/category">{category.cat}</Link>
              </button>
            );
          }

          return <button className="category">{category.cat}</button>;
        })}
      </div>
    </div>
  );
};

export default CategoriesDisplay;
