import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import next from "../assets/next.svg";
import book6 from "../assets/book6.png";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

// const RequestButton = () => {
//   <div>
//     <button id="request-button">Requisitar</button>
//   </div>;
// };

// const ReturnButton = () => {
//   <div>
//     <button id="return-button">Devolver</button>
//   </div>;
// };

const BookDisplay = () => {
  //   const [change, setChange] = useState(false);

  //   const handleClick = (event: React.MouseEvent) => {
  //     const onClick = () => {
  //       setChange(true);
  //       if (change == true) {
  //         setChange(false);
  //       }
  //     };
  //   };

  return (
    <div>
      <div className="category-path">
        <p className="text-category-path">A nossa biblioteca</p>
        <Image src={next} alt="" height={24} width={24} />
        <p className="text-category-title">Torne-se um decifrador de pessoas</p>
      </div>

      <div className="display-book">
        <figure>
          <Image src={book6} alt="" width={360} height={520} />
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
          <h1 id="title">
            Torne-se um decifrador de
            <br /> pessoas
          </h1>
          <div className="author-title">
            <p id="author">Alexandre Monteiro</p>
            <RxDotFilled color="#ffffff" />
            <p id="category">Desenvolvimento pessoal</p>
          </div>

          <div id="editor">
            <p id="text-editor">Editora: Planeta, junho de 2021</p>
          </div>

          <p id="rental">2€/semana</p>

          {/* {change ? (
            <button id="request-button" onClick={handleClick}></button>
          ) : (
            <button id="return-button" onClick={handleClick}></button>
          )} */}

          <button id="request-button"></button>
        </div>
      </div>
    </div>
  );
};

export default BookDisplay;
