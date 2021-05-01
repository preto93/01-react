import React from "react";
import books from "../modE.svg";
import "./Row.css";

function Row() {
  return (
    <>
      <div className="Border"></div>
      <div className="ContainerImg">
        <div className="ct">
          <h1 className="title">Yo soy un título</h1>
          <p className="description">
            Aquí vamos a hacer una breve descripción de los libros. A
            continuación procederemos a mandar txt falso.
          </p>
        </div>
        {/* <img src={books} className="Img" alt="books" /> */}
      </div>
    </>
  );
}

export default Row;
