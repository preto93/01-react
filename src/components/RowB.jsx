import React from "react";
import Buttons from "./Button";
import "./Row.css";

function Row() {
  return (
    <>
      <div className="containerImg row_prestado">
        <div className="ct">
          <div className="ctxt">
            <h2 className="titles">Yo soy un título</h2>
            <p className="description">
              Aquí vamos a hacer una breve descripción de los libros. A
              continuación procederemos a mandar txt falso.
            </p>
          </div>
          <div className="cb">
            <Buttons />
          </div>
        </div>
        <div className="borders"></div>
      </div>
    </>
  );
}

export default Row;
