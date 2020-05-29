import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(ev) {
    console.log(ev.currentTarget.value);
    this.setState({
      text: ev.currentTarget.value
    });
    //   this.setState(prevState => ({
    //     text: prevState.text === '' ? ev.currentTarget.value : ''
    //   }));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input type="text" onKeyUp={this.handleInput} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default TextInput;
