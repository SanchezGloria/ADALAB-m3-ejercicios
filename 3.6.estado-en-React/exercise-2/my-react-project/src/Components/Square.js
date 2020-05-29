import React from 'react';
// import '../stylesheets/App.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue'
    };
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(ev) {
    this.setState((prevState, props) => ({
      color: prevState.color === 'blue' ? 'red' : 'blue'
    }));
  }

  render() {
    return (
      <div className={this.state.color} onClick={this.handleSquareClick}>
        Click me!
      </div>
    );
  }
}

export default Square;
