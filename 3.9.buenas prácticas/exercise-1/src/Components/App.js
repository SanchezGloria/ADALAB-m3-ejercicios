import React from 'react';
import Form from './Form';

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: numbers,
      input: '',
      isClicked: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.searchEven = this.searchEven.bind(this);
  }
  handleInput = (data) => {
    this.setState({ input: data || 0 });
  };
  searchEven() {
    this.setState((prevState) => ({
      isClicked: !prevState.ischecked,
    }));
  }
  // searchEven(checked) {
  //   this.setState({
  //     isClicked: !checked,
  //   });
  // }

  render() {
    const { input, isClicked } = this.state;
    return (
      <div className="App">
        <Form handleInput={this.handleInput} searchEven={this.searchEven} input={input} isClicked={isClicked} numbers={numbers} />
      </div>
    );
  }
}

export default App;
