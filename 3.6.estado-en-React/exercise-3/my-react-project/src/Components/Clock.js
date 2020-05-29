import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '0:0:0'
      // lo pongo a cero todo
    };
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }
  updateClock() {
    // const newDate = new Date();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    console.log(`Son las ${hours} ${minutes}: ${seconds}`);
    const timeNow = hours + ':' + minutes + ':' + seconds;
    this.setState({
      time: timeNow
      // updateClock(aquí actualizo la hora)
    });
  }

  render() {
    return <p>{this.state.time}</p>;
  }
}

export default Clock;
