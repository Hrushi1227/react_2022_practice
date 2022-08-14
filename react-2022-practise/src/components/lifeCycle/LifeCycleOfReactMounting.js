import React, { Component } from "react";

export default class LifeCycleOfReactMounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: "Ghatol",
    };
    console.log("get Props from compoennt props ", this.props.name);
  }
  static getDerivedStateFromProps(props, state) {
    if (props !== state) {
      console.log("getDerivedStateFromProps props & state", props, state);
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== nextState) {
      console.log(
        "getDerivedStateFromProps nextProps & nextState",
        nextProps,
        nextState
      );
    }
    return null;
  }
  render() {
    return <div>{console.log("From State", this.state.surname)}</div>;
  }
  componentDidMount() {
    this.setState((prevState) => {
      return {
        surname: "waghmare",
      };
    });
  }
}
