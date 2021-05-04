import React from "react";
import Buttons from "./ButtonB";
import "./RowB.css";
import "bootstrap/dist/css/bootstrap.min.css";

function RowB() {
  return (
    <>
      <div className="containerImgB">
        <div className="borders"></div>
        <div className="ct">
          <h2 className="h2 fw-light text-white">Yo soy un título</h2>
          <p className="fs-6 fw-light text-white">
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

export default RowB;
