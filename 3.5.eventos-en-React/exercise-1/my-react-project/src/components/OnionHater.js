import React from 'react';

const onChangeListener = ev => {
  if (ev.target.value.includes('cebolla')) {
    alert('ODIO LA CEBOLLA');
  }
};

class OnionHater extends React.Component {
  render() {
    const textarea = <textarea onChange={onChangeListener} name="" id="" cols="30" rows="2"></textarea>;
    return textarea;
  }
}

export default OnionHater;
