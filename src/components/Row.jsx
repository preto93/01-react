import React from "react";
import Buttons from "./Button";
import "./Row.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Row() {
  return (
    <>
      <div className="containerImg">
        <div className="borders"></div>
        <div className="ct">
          <h2 className="display-5">Yo soy un título</h2>
          <p className="p">
            Aquí vamos a hacer una breve descripción de los libros. A
            continuación procederemos a mandar txt falso.
          </p>
        </div>
        <div className="cb">
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default Row;
