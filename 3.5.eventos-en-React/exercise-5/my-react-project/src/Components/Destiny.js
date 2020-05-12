import React from 'react';
import CityImage from './CityImage';
import CitySelector from './CitySelector';

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.city = '';
    this.onChangeListener = this.onChangeListener.bind(this);
  }

  onChangeListener = ev => {
    this.city = ev.target.value;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <CitySelector onChangeListener={this.onChangeListener} />
        <CityImage city={this.city} />
      </div>
    );
  }
}

export default Destiny;
