import React, { Component } from "react";

export default class ConditionalClassBasedState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  changeValue = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.changeValue}>
            Click Me to Increase Count class compoent{" "}
          </button>
          <label>Count is --- {this.state.count}</label>
        </div>
      </>
    );
  }
}
