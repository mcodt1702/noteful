import React, { Component } from "react";

export default class ExecutionError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="errorpage">
          <h2>Could not execute your request.</h2>;
        </div>
      );
    }
    return this.props.children;
  }
}
