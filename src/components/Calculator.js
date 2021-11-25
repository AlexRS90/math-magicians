import React, { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: '0',
        next: '',
        operation: '',
      },
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData = (obj, btnValue) => {
    const newObj = calculate(obj, btnValue);
    if (!newObj.next && !newObj.total) {
      newObj.next = 0;
    }
    this.setState({obj: newObj});
  };

  render() {
    const {obj} = this.state;
    return (
      <div className="calculator-container">
        <p className="display-result">
            {obj.total}
            {obj.operation}
            {obj.next}
        </p>
        <button onClick={() => this.sendData(obj, 'AC')} type="button">AC</button>
        <button onClick={() => this.sendData(obj, '+/-')} type="button">+/-</button>
        <button onClick={() => this.sendData(obj, '%')} type="button">%</button>
        <button onClick={() => this.sendData(obj, '÷')} type="button" className="operations">&divide;</button>
        <button onClick={() => this.sendData(obj, '7')} type="button" className="numbers">7</button>
        <button onClick={() => this.sendData(obj, '8')} type="button" className="numbers">8</button>
        <button onClick={() => this.sendData(obj, '9')} type="button" className="numbers">9</button>
        <button onClick={() => this.sendData(obj, 'x')} type="button" className="operations">X</button>
        <button onClick={() => this.sendData(obj, '4')} type="button" className="numbers">4</button>
        <button onClick={() => this.sendData(obj, '5')} type="button" className="numbers">5</button>
        <button onClick={() => this.sendData(obj, '6')} type="button" className="numbers">6</button>
        <button onClick={() => this.sendData(obj, '-')} type="button" className="operations">-</button>
        <button onClick={() => this.sendData(obj, '1')} type="button" className="numbers">1</button>
        <button onClick={() => this.sendData(obj, '2')} type="button" className="numbers">2</button>
        <button onClick={() => this.sendData(obj, '3')} type="button" className="numbers">3</button>
        <button onClick={() => this.sendData(obj, '+')} type="button" className="operations">+</button>
        <button onClick={() => this.sendData(obj, '0')} type="button" className="numbers zero">0</button>
        <button onClick={() => this.sendData(obj, '.')} type="button" className="numbers">.</button>
        <button onClick={() => this.sendData(obj, '=')} type="button" className="operations">=</button>
      </div>
    );
  }
}

export default Calculator;
