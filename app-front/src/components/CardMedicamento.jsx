import React from "react";
export default function CardMedicamento(props) {
  return (
    <div className="cardMedicamento">
      <img src={props.imagem} alt={props.nome} />
      <h2>{props.nome}</h2>
      <p>{props.dosagem}</p>
    </div>
  );
}
