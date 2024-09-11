import React, { useState } from 'react';
import styles from './InvestmentCalculator.module.css'; // Importar los estilos del CSS Module

const InvestmentCalculator = () => {
  const [years, setYears] = useState(0);
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(15.01);
  const [result, setResult] = useState(0);

  const calculateInvestment = () => {
    const periodsPerYear = 24; // Quincenales
    const interestRatePerPeriod = rate / 100 / periodsPerYear;
    const totalPeriods = years * periodsPerYear;

    let futureValue = 0;

    for (let i = 0; i < totalPeriods; i++) {
      futureValue += amount * Math.pow(1 + interestRatePerPeriod, totalPeriods - i);
    }

    setResult(futureValue.toFixed(2));
  };

  return (
    <div className={styles.calculatorContainer}>
      <h1 className={styles.title}>¿Sabías que?</h1>
      <p>
        Si hace 
        <input 
          type="number" 
          value={years} 
          onChange={(e) => setYears(e.target.value)} 
        /> 
        años hubieras invertido 
        $<input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        /> quincenales a una tasa anual fija del 
        <input 
          type="text" 
          value={rate} 
          onChange={(e) => setRate(e.target.value)} 
        />%, hoy tendrías:
      </p>

      <div className={styles.result}>${result}</div>

      <button onClick={calculateInvestment}>Calcular</button>

      <p style={{ fontSize: '12px', color: 'gray' }}>
        *Con interés compuesto, sin retirar y volviendo a invertir.
      </p>

      {/* Tabla Comparativa */}
      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Tasa anual (%)</th>
            <th>Pago Total (Aprox.)</th>
            <th>¡Lo quiero!</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Finsus</td>
            <td>15.01%</td>
            <td>$0</td>
            <td><a href="https://finsus.mx/inversion/" target="_blank" rel="noreferrer">Solicitar</a></td>
          </tr>
          <tr>
            <td>Klar</td>
            <td>15.00%</td>
            <td>$0</td>
            <td><a href="https://www.klar.mx/inversion" target="_blank" rel="noreferrer">Solicitar</a></td>
          </tr>
          <tr>
            <td>Ualá</td>
            <td>15.00%</td>
            <td>$0</td>
            <td><a href="https://www.uala.mx/cuenta-con-rendimiento" target="_blank" rel="noreferrer">Solicitar</a></td>
          </tr>
          <tr>
            <td>Nubank</td>
            <td>13.50%</td>
            <td>$0</td>
            <td><a href="https://nu.com.mx/cuenta/" target="_blank" rel="noreferrer">Solicitar</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentCalculator;
