import React from 'react';
import users from '../Data/Data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      winners: [],
    };
  }

  render() {
    // EJERCICIO 4

    // const [first, second, third] = this.state.users;
    // en el return iría
    //     <div>
    //         <p>The third position is for {third.name}.</p>
    //         <p>The second one is for {second.name}.</p>
    //         <p>And the winner is... {first.name}</p>
    //     </div>

    // EJERCICIO 5

    const [{ name: firstName, time: timeFirst }, { name: secondName, time: timeSecond }, { name: thirdName, time: timeThird }] = this.state.users;

    // console.log(`Primer lugar para ${firstName} que hizo un tiempo de ${timeFirst}, segundo lugar para ${secondName}, con un tiempo de ${timeSecond}; y tercer lugar para ${thirdName}, con un tiempo de ${timeThird}`);

    // console.log(name);
    return (
      <div className="App">
        <p>The winners are:</p>
        <p>{firstName}</p>
        <p>{secondName}</p>
        <p>{thirdName}</p>
        {/* {this.state.users.map((winner) => {
          return ( */}
        <p>{/* {winner.name} con un tiempo de {winner.time}s */}</p>

        {/* })} */}
      </div>
    );
  }
}

export default App;
