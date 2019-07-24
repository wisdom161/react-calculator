import React, { Component } from 'react';
import './styles/App.css';
import Input from './components/Input';
import Button from './components/Button';
import ClearButton from './components/ClearButton.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }
  // don't need to bind when you write as arrow function
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
           <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>X</Button>
          </div>
           <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
           <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton 
            handleClear={() => this.setState({ input: " " })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
