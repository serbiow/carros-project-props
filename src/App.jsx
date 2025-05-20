import React from "react";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    { id: 1, marca: "Toyota", km: 500, cor: "Prata", ano: 2024 },
    { id: 2, marca: "Honda", km: 30000, cor: "Preto", ano: 2020 },
    { id: 3, marca: "Fiat", km: 150, cor: "Branco", ano: 2023 },
    { id: 4, marca: "Chevrolet", km: 40000, cor: "Vermelho", ano: 2018 }
  ];

  return (
    <div>
      <h1>Detalhes dos Carros</h1>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          marca={car.marca}
          km={car.km}
          cor={car.cor}
          ano={car.ano}
        />
      ))}
    </div>
  );
}

export default App;
