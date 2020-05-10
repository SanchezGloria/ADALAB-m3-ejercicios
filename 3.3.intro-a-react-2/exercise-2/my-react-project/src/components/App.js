import React from 'react';
import MediaCard from './MediaCard.js';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    console.log(this.props);
    return <MediaCard name="Alex Guerrero" date="31 de marzo de 2020" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia." likes="37" />;
  }
}

export default App;

// class MediaCard extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={pic} className="App-header-pic" alt="background" />
//           <div className="App-header-wrapper">
//             <Name name="Alex Guerrero" />
//             <Date date="31 de marzo de 2020" />
//           </div>
//         </header>
//         <Content content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia." />
//         <Likes likes="37" />
//       </div>
//     );
//   }
// }
