import { useState } from "react";

export default function Calculator() {
  const [calc, setCalc] = useState({
    current: 0,
    total: 0,
    isInitial: true,
    preOper: null,
  });

  // Handle numbers
  function handleNumber(value) {
    let newValue = calc.isInitial ? value : calc.current + value;
    setCalc({
      current: newValue,
      isInitial: false,
      total: calc.total,
      preOper: calc.preOper,
    });
  }

  // Handle Operator
  function handleOperator(value) {
    let total = calculate();
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOper: value,
    });
  }

  // Handle clear
  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOper: "",
    });
  }

  // Handle Calculation
  function calculate() {
    let newtotal = parseInt(calc.total);

    switch (calc.preOper) {
      case "+":
        newtotal += parseInt(calc.current);
        break;
      case "-":
        newtotal -= parseInt(calc.current);
        break;
      case "*":
        newtotal *= parseInt(calc.current);
        break;
      case "/":
        newtotal /= parseInt(calc.current);
        break;
      default:
        newtotal = parseInt(calc.current);
        break;
    }
    return newtotal;
  }

  // Display function
  function renderDisplay() {
    return calc.current;
  }

  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>

      <CalcButton value="7" onClick={handleNumber} />
      <CalcButton value="8" onClick={handleNumber} />
      <CalcButton value="9" onClick={handleNumber} />
      <CalcButton value="/" className="operator" onClick={handleOperator} />

      <CalcButton value="4" onClick={handleNumber} />
      <CalcButton value="5" onClick={handleNumber} />
      <CalcButton value="6" onClick={handleNumber} />
      <CalcButton value="*" className="operator" onClick={handleOperator} />

      <CalcButton value="1" onClick={handleNumber} />
      <CalcButton value="2" onClick={handleNumber} />
      <CalcButton value="3" onClick={handleNumber} />
      <CalcButton value="-" className="operator" onClick={handleOperator} />

      <CalcButton value="C" onClick={handleClear} />
      <CalcButton value="0" onClick={handleNumber} />
      <CalcButton value="=" onClick={handleOperator} />
      <CalcButton value="+" className="operator" onClick={handleOperator} />
    </div>
  );

  function CalcButton({ value, onClick, className }) {
    return (
      <button className={className} onClick={() => onClick(value)}>
        {value}
      </button>
    );
  }
}
