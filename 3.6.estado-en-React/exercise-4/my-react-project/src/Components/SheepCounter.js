import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleButtonCount = this.handleButtonCount.bind(this);
  }
  handleButtonCount(ev) {
    this.setState((prevState, props) => {
      if (prevState.count === 0 || prevState.count) {
      }
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonCount}>Contador de ovejas</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default SheepCounter;
