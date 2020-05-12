import React from 'react';

class MIMIMITranslator extends React.Component {
  translate = text => {
    return text.replace(/[aAeEoOuU]/gi, 'i');
  };

  render() {
    const translation = this.translate(this.props.mimimi);
    return <p>{translation}</p>;
  }
}

export default MIMIMITranslator;
