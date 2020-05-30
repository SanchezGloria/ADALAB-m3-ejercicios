// import React, { useState } from 'react';
import React from 'react';

const makeMeOlder = (props) => {
  const handleButton = function () {
    props.getNewAge();
  };
  console.log(props.number);

  const handleButtonPresents = function () {
    props.getNewPresent();
    props.getNewAge();
  };
  console.log(props.present);

  return (
    <div>
      <p>Hoy tengo {props.number} años de edad</p>
      <button onClick={handleButton}>Hazme más viejo</button>
      <p>Tengo {props.present} regalos</p>
      <button onClick={handleButtonPresents}>Dame regalos</button>
    </div>
  );
};

export default makeMeOlder;
