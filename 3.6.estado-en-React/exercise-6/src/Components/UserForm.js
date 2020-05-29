import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthDate: {
        day: 10,
        month: 'diciembre',
        year: 1815,
      },
    };
    this.HandleInputName = this.HandleInputName.bind(this);
    this.HandleInputSurname = this.HandleInputSurname.bind(this);
    this.HandleInput = this.HandleInput.bind(this);
  }
  HandleInputName(ev) {
    this.setState({ firstName: ev.target.value });
  }
  HandleInputSurname(ev) {
    this.setState({ lastName: ev.target.value });
  }
  HandleInput(ev) {
    this.setState((prevState) => {
      console.log(ev.target);

      return {
        birthDate: {
          ...prevState.birthDate,
          day: 9,
        },
      };
    });
    // this.setState((prevState) => {
    //   return {birthDate: {
    //     ...prevState.birthDate,
    //     day: ev.currentTarget.value,
    //   };
    // })};
  }

  render() {
    return (
      <div>
        <form action="" method="POST">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.HandleInputName} />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.HandleInputSurname} />
          <label>Birth Date:</label>
          <input type="number" name="day" placeholder="" onChange={this.HandleInput} />
          <input type="text" name="month" placeholder="month" />
          <input type="number" name="year" placeholder="" />
        </form>
      </div>
    );
  }
}

export default UserForm;

// // value={this.state.birdthDate.day
// // value={this.state.birdthDate.month}
// // value={this.state.birdthDate.year}
