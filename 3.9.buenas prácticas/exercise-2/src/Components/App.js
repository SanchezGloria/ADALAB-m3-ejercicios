import React from 'react';
import data from '../Data/Data.js';
import Collapsibles from './Collapsibles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: data,
      content: false,
      clickedName: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (name) => {
    //   this.setState({ content: true });
    // };
    this.setState((prevState, props) => {
      let collapse;
      if (prevState.content === true) {
        collapse = false;
      } else {
        collapse = true;
      }

      return {
        content: collapse,
        clickedName: name,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Collapsibles palettes={this.state.palettes} handleClick={this.handleClick} content={this.state.content} clickedName={this.state.clickedName} />
      </div>
    );
  }
}

export default App;
