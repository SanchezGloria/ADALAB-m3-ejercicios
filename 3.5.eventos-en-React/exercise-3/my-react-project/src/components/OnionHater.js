import React from 'react';
import '../stylesheets/App.css';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.style = '';
    this.onChangeListener = this.onChangeListener.bind(this);
  }
  onChangeListener(event) {
    if (event.target.value.includes('cebolla')) {
      this.isHating = true;
      this.style = 'screen-color';
      this.forceUpdate();
    } else {
      this.style = '';
    }
  }

  render() {
    return (
      <div className={this.style}>
        <textarea onChange={this.onChangeListener} name="" id="" cols="30" rows="2"></textarea>;
      </div>
    );
  }
}

export default OnionHater;
