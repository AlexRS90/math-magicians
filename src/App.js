import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

// eslint-disable-next-line
class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>Math Magicians</h1>
      <Calculator />
    </div>
    );
  }
}

export default App;
