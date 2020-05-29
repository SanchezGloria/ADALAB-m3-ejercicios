import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      image: ''
    };
    this.handleButtonCount = this.handleButtonCount.bind(this);
  }
  handleButtonCount(ev) {
    this.setState((prevState, props) => {
      if (prevState.count === 0 || prevState.count) {
      }
      return {
        count: prevState.count + 1,
        image: 'http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon Sheep.svg.hi.png'
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonCount}>Contador de ovejas</button>
        <p>{this.state.count}</p>
        <img src={this.state.image} alt="Oveja"></img>
      </div>
    );
  }
}

export default SheepCounter;
