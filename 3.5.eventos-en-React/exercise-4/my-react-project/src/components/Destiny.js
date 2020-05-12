import React from 'react';
import CityImage from './CityImage';

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
        <select onChange={this.onChangeListener} name="" id="">
          <option>Selecciona una ciudad</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
        <CityImage city={this.city} />
      </div>
    );
  }
}

export default Destiny;
