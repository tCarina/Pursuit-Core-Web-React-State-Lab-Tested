import React from "react";

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0, increment: 1 };
  }

  plus = () => {
    this.setState({ score: this.state.score + this.state.increment });
  };

  increaseScore = () => {
    if (this.state.score >= 10) {
      this.setState({ score: this.state.score - 10 });
      this.setState({ increment: this.state.increment + 1 });
    } else {
      window.alert("You can't afford that!");
    }
  };

  reset = () => {
    this.setState({ score: (this.state.score = 0) });
    this.setState({ increment: (this.state.increment = 1) });
  };

  render() {
    
    if (this.state.score >= 100) {
      return (
        <div>
          <h2>You Win!</h2>
          <h1>Current Score: {this.state.score}</h1>
          <button onClick={this.reset}>Play again?</button>
        </div>
      )
    }
    else {
    return (
      <div>
        <h1>Current Score: {this.state.score}</h1>
        <button onClick={this.plus}> +{this.state.increment}</button>
        <button onClick={this.increaseScore}>
          Pay 10 points to change from +{this.state.increment} to +
          {this.state.increment + 1}
        </button>
      </div>
    );
  }
}}

export default Score;
