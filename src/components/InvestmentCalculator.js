import React, { useState } from 'react';
import Box from '@mui/material/Box'; // Componente de estilo de MUI
import AppSlider from "./styled/Slider/Slider"; // Slider ya existente en tu proyecto
import AppButton from "./styled/ConfirmButton/AppButton"; // Botón existente
import * as style from './calculator.module.css'; // Archivo CSS del componente

// Componente de la Calculadora de Inversión
const InvestmentCalculator = () => {
  const [years, setYears] = useState(0);
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(15.01);
  const [result, setResult] = useState(0);

  // Función para calcular el valor futuro con interés compuesto
  const calculateInvestment = () => {
    const periodsPerYear = 24; // Quincenales (24 periodos por año)
    const interestRatePerPeriod = rate / 100 / periodsPerYear; // Tasa de interés por periodo
    const totalPeriods = years * periodsPerYear; // Total de periodos (años * quincenas)

    let futureValue = 0;

    // Calcular el valor futuro acumulado
    for (let i = 0; i < totalPeriods; i++) {
      futureValue += amount * Math.pow(1 + interestRatePerPeriod, totalPeriods - i);
    }

    setResult(futureValue.toFixed(2)); // Resultado redondeado a 2 decimales
  };

  return (
    <Box className={style.calculatorBox}>
      <h1 className={style.title}>Calculadora de Inversión</h1>
      
      {/* Slider para seleccionar los años de inversión */}
      <AppSlider
        title="Años de inversión"
        coin={false}
        value={years}
        onValueChange={setYears}
        limit={30}
        step={1}
      />
      
      {/* Slider para seleccionar la cantidad a invertir quincenalmente */}
      <AppSlider
        title="Cantidad a invertir quincenalmente"
        coin={true}
        value={amount}
        onValueChange={setAmount}
        limit={50000}
        step={500}
      />
      
      {/* Slider para seleccionar la tasa de interés anual */}
      <AppSlider
        title="Tasa de interés anual (%)"
        coin={false}
        value={rate}
        onValueChange={setRate}
        limit={20}
        step={0.01}
        min={1}
      />
      
      {/* Mostrar el resultado */}
      <div className={style.resultDisplay}>
        <h2>Valor futuro: ${result}</h2>
      </div>
      
      {/* Botón para calcular */}
      <AppButton tag="Calcular inversión" onClick={calculateInvestment} />
    </Box>
  );
};

export default InvestmentCalculator;
