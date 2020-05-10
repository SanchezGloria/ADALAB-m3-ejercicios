import React from 'react';

const getRandomNumber = maxNumber => Math.floor(Math.random() * maxNumber);

const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomNumber(NUMBER_OF_CATS);
    return (
      <a href="http://lorempixel.com">
        <img src={`http://lorempixel.com/${this.props.width}/${this.props.height}/cats/${randomCat}`} alt="Random cat" />
      </a>
    );
  }
}

export default RandomCat;
