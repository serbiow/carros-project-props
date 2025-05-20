import React from "react";

export default function CarDetails({ marca, km, cor, ano }) {
  const isNovo = km < 1000;

  return (
    <div>
      <ul>
        <li>Marca: {marca}</li>
        <li>Quilometragem: {km} km</li>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Estado: {isNovo ? "Novo" : "Usado"}</li>
      </ul>
    </div>
  );
}
