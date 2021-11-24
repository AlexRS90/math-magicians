import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calculator-container">
        <p className="display-result">0</p>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operations">&divide;</button>
        <button type="button" className="numbers">7</button>
        <button type="button" className="numbers">8</button>
        <button type="button" className="numbers">9</button>
        <button type="button" className="operations">X</button>
        <button type="button" className="numbers">4</button>
        <button type="button" className="numbers">5</button>
        <button type="button" className="numbers">6</button>
        <button type="button" className="operations">-</button>
        <button type="button" className="numbers">1</button>
        <button type="button" className="numbers">2</button>
        <button type="button" className="numbers">3</button>
        <button type="button" className="operations">+</button>
        <button type="button" className="numbers zero">0</button>
        <button type="button" className="numbers">.</button>
        <button type="button" className="operations">=</button>
      </div>
    );
  }
}

export default Calculator;
