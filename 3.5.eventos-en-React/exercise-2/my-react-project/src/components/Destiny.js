import React from 'react';

const onChangeListener = ev => {
  alert(`Tu destino es viajar a ${ev.currentTarget.value}, siendo ${ev.currentTarget.value} la ciudad seleccionada`);
};

class Destiny extends React.Component {
  render() {
    // const select = <textarea onChange={onChangeListener} name="" id="" cols="30" rows="2"></textarea>;
    const select = (
      <select onChange={onChangeListener} name="" id="">
        <option>Selecciona una ciudad</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
    return select;
  }
}

export default Destiny;
