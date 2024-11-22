import React from "react";
import "./../../Style/Programas.css"; 
import { programas } from "./../../Utils/mocks/programas"; 

function Programas() {
  return (
    <div className="programas-container">
      {programas.map((programa) => (
        <div key={programa.id} className="programa-card">
          <a href={programa.link} target="_blank" rel="noopener noreferrer">
            <img
              src={programa.srcImage}
              alt={programa.name}
              className="programa-image"
            />
            <h3 className="programa-name">{programa.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Programas;
