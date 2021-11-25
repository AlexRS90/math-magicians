import React, { useState } from 'react';
import calculate from '../logic/calculate';


const initial = {
    total: '0',
    next: '',
    operation: '',
};

const Calculator = () => {
  const [obj, newNumbers ] = useState(initial);

  const handleClick = (obj2, btnValue) => {
    const newObj = calculate(obj2, btnValue);
    if (!newObj.next && !newObj.total) {
        newObj.next = '0';
    }
    newNumbers(newObj);
  };

    return (
      <div className="calculator-container">
        <p className="display-result">
          {obj.total}
          {obj.operation}
          {obj.next}
        </p>
        <button onClick={() => handleClick(obj, 'AC')} type="button">AC</button>
        <button onClick={() => handleClick(obj, '+/-')} type="button">+/-</button>
        <button onClick={() => handleClick(obj, '%')} type="button">%</button>
        <button onClick={() => handleClick(obj, '÷')} type="button" className="operations">&divide;</button>
        <button onClick={() => handleClick(obj, '7')} type="button" className="numbers">7</button>
        <button onClick={() => handleClick(obj, '8')} type="button" className="numbers">8</button>
        <button onClick={() => handleClick(obj, '9')} type="button" className="numbers">9</button>
        <button onClick={() => handleClick(obj, 'x')} type="button" className="operations">X</button>
        <button onClick={() => handleClick(obj, '4')} type="button" className="numbers">4</button>
        <button onClick={() => handleClick(obj, '5')} type="button" className="numbers">5</button>
        <button onClick={() => handleClick(obj, '6')} type="button" className="numbers">6</button>
        <button onClick={() => handleClick(obj, '-')} type="button" className="operations">-</button>
        <button onClick={() => handleClick(obj, '1')} type="button" className="numbers">1</button>
        <button onClick={() => handleClick(obj, '2')} type="button" className="numbers">2</button>
        <button onClick={() => handleClick(obj, '3')} type="button" className="numbers">3</button>
        <button onClick={() => handleClick(obj, '+')} type="button" className="operations">+</button>
        <button onClick={() => handleClick(obj, '0')} type="button" className="numbers zero">0</button>
        <button onClick={() => handleClick(obj, '.')} type="button" className="numbers">.</button>
        <button onClick={() => handleClick(obj, '=')} type="button" className="operations">=</button>
      </div>
    );
}

export default Calculator;
