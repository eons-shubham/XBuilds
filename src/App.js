import React, { Component } from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  inc = () => {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  };
  dec = () => {
    this.setState((state) => {
      return { counter: state.counter - 1 };
    });
  };
  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.counter}</p>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
      </>
    );
  }
}
