// Contato.jsx
import React from 'react';

const Contato = () => {
  return <div><h2>Contato</h2><p>Entre em contato conosco.</p></div>;
};

export default Contato;

// Destino.jsx
const Destino = ({ nome, descricao }) => {
  return (
    <div className="destino">
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
};

export default Destino;
