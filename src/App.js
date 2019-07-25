import React, { Component } from 'react';
import './styles/App.css';
import Input from './components/Input';
import Button from './components/Button';
import ClearButton from './components/ClearButton.jsx';
import { evaluate } from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

  }
  // don't need to bind when you write as arrow function
  addToInput = val => {
    let input = this.state.input;
    let length = input.length;
    if (val === 'string' && input[length-1] === 'string'){
      this.setState({ input: input }); 
      } else {
      this.setState({ input: input + val });
      };
  };

  handleEqual = () => {
    let input = this.state.input;
    let length = input.length;
    if ( input[length-1] === 'string') {
      this.setState({ input: this.state.input });     
      } else {
      this.setState({ input: evaluate(this.state.input) });
      };
  }

  handleClear = () => {
    this.setState({ input: "" });
  }

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
            <Button handleClick={this.addToInput}>*</Button>
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
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton 
            handleClear={this.handleClear}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
