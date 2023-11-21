import React, { useState, useEffect } from 'react';

const ContadorSenior = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const contadorSalvo = localStorage.getItem('contadorSenior');
    if (contadorSalvo) {
      setContador(parseInt(contadorSalvo, 10));
    }
  }, []);

  const incrementarContador = () => {
    setContador((contadorAnterior) => {
      const novoContador = contadorAnterior + 1;
      localStorage.setItem('contadorSenior', novoContador.toString());
      return novoContador;
    });
  };

  const decrementarContador = () => {
    setContador((contadorAnterior) => {
      const novoContador = contadorAnterior - 1;
      localStorage.setItem('contadorSenior', novoContador.toString());
      return novoContador;
    });
  };

  const zerarContador = () => {
    setContador(0);
    localStorage.removeItem('contadorSenior');
  };

  return (
    <div>
      <h2>Contador Sênior</h2>
      <p>Contagem: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
      <button onClick={zerarContador}>Zerar Contagem</button>
    </div>
  );
};

export default ContadorSenior;
