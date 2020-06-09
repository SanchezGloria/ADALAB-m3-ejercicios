import React from 'react';

class Form extends React.Component {
  handleInput = (ev) => {
    console.log(ev.currentTarget.value);
    let value = parseInt(ev.currentTarget.value);
    this.props.handleInput(value);
  };

  searchEven = (ev) => {
    this.props.searchEven();
    // this.props.searchEven(ev.currentTarget.checked);
  };

  handleNumbers = () => {
    const numbers = this.props.numbers
      .filter((number) => number > this.props.input)
      // .filter((number) => (this.props.isClicked ? false : number % 2 === 0))
      .filter((number) => (this.props.isClicked ? number % 2 === 0 : true))
      .map((number, index) => (
        <li className="list__item" key={index}>
          {number}
        </li>
      ));
    return numbers;
  };

  render() {
    console.log(this.props.numbers);

    return (
      <>
        <input onChange={this.handleInput} type="number" value={this.props.input} id="" name="" />
        <label>Números pares</label>
        <input type="checkbox" onClick={this.searchEven} checked={this.props.isClicked} />
        <p>El número escrito es {this.props.input || ''}</p>
        <ul>{this.handleNumbers()}</ul>
      </>
    );
  }
}

export default Form;

{
  /* {this.props.numbers
  .filter((number) => number > this.props.input)
  .filter((number) => (this.props.isClicked ? number % 2 === 0 : true))
  .map((number, index) => (
    <li className="list__item" key={index}>
      {number}
    </li>
  ))} */
}
