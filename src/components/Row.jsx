import React from "react";
import "./Row.css";

function Row() {
  return (
    <>
      <div className="containerImg">
        <div className="border"></div>
        <div className="ct">
          <h1 className="title">Yo soy un título</h1>
          <p className="description">
            Aquí vamos a hacer una breve descripción de los libros. A
            continuación procederemos a mandar txt falso.
          </p>
        </div>
        <div className="cb">
          <button>guardar</button>
          <button>editar</button>
          <button>eliminar</button>
        </div>
      </div>
    </>
  );
}

export default Row;
