import React from 'react';
import MediaList from './MediaList';
// import MediaCard from './MediaCard';
// import MediaCard from './components/MediaCard';

class App extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div className="App">
        <MediaList name="Alex Guerrero" date="23 de junio de 2017" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia." likes="37" name="Paquita Gutiérrez" date="3 de junio de 2019" text="Qué feliz era sin conocer React" likes="1M" name="Mari Carmen Rodríguez" date="30 de marzo de 2020" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia." likes="3" />
        {/* <MediaCard name="Paquita Gutiérrez" date="3 de junio de 2019" text="Qué feliz era sin conocer React" likes="1M" />
          <MediaCard name="Mari Carmen Rodríguez" date="30 de marzo de 2020" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia." likes="3" />
        </MediaList> */}
      </div>
    );
  }
}

export default App;
