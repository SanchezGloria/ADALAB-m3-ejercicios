import React from 'react';

class TextInput extends React.Component {
  render() {
    return <textarea onChange={this.props.HandleSelect}></textarea>;
  }
}

export default TextInput;
