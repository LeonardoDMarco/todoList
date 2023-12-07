import React from "react";
import Button from "./button";

const Evento = () => {
  const meuEvento = () => {
    console.log("Ativando primeiro evento!");
  };

  const segundoEvento = () => {
    console.log("Ativando o segundo evento!");
  };

  return (
    <>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="segundo Evento" />
    </>
  );
};

export default Evento;
