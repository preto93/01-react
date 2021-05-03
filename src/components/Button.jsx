import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Row.css";

function Buttons() {
  return (
    <>
      {/* <div className="cb"> */}
      <div className="btn-group">
        <button className="btn btn-primary">editar</button>
        <button className="btn btn-danger">eliminar</button>
        <button className="btn btn-primary">guardar</button>
      </div>
      {/* </div> */}
    </>
  );
}

export default Buttons;
