import React from 'react';
import TextInput from './TextInput';
import MIMIMITranslator from './MIMIMITranslator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = '';
    this.HandleSelect = this.HandleSelect.bind(this);
  }
  HandleSelect = ev => {
    this.text = ev.currentTarget.value;
    console.log('Holi');
    this.forceUpdate();
  };
  render() {
    return (
      <div className="App">
        <TextInput HandleSelect={this.HandleSelect} />
        <MIMIMITranslator mimimi={this.text} />
      </div>
    );
  }
}

export default App;
