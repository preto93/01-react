import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Buttons() {
  return (
    <>
      {/* <div className="cb"> */}
      <div className="btn-group">
        <button className="btn btn-primary btn-sm">editar</button>
        <button className="btn btn-danger btn-sm">eliminar</button>
        <button className="btn btn-light btn-sm">prestado</button>
      </div>
      {/* </div> */}
    </>
  );
}

export default Buttons;
