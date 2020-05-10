import React from 'react';
// import pic from '../images/pic.jpg';
// import '../stylesheets/MediaCard.scss';
// import './App.scss';

class Name extends React.Component {
  render() {
    return <h1 className="App-header-title">{this.props.name}</h1>;
  }
}

export default Name;

// Intento 1

// class MediaCard extends React.Component {
// render(props) {
// const userHeader = (
//   <header className="App-header">
//     <img src={props.pic} className="App-header-pic" alt="background" />
//     <h1 className="App-header-title"> {props.name}</h1>
//     <h3 className="App-header-subtitle"> {props.date}</h3>
//   </header>
// );
// const userContent = (
//   <main className="App-main">
//     <p className="App-main-content">{props.text}</p>
//   </main>
// );
// const userFooter = (
//   <footer className="App-footer">
//     <p className="App-footer-readmore">Leer más...</p>
//     <span className="App-footer-likes">
//       {props.likes}
//       <i className="fas fa-heart"></i>
//     </span>
//   </footer>
// );
// const appRoot = (
//   <div className="App">
//     {userHeader}{userContent}{userFooter}
//   </div>
// );

// Intento 2
// const userHeader = props => {
//   return (
//     <header className="App-header">
//       <img src={props.pic} className="App-header-pic" alt="background" />
//       <h1 className="App-header-title"> {props.name}</h1>
//       <h3 className="App-header-subtitle"> {props.date}</h3>
//     </header>
//   );
// };
// const Content = props => {
//   const userContent = (
//     <main className="App-main">
//       <p className="App-main-content">{props.text}</p>
//     </main>
//   );
//   return userContent;
// };

// const userFooter = props => {
//   return (
//     <footer className="App-footer">
//       <p className="App-footer-readmore">Leer más...</p>
//       <span className="App-footer-likes">
//         {props.likes}
//         <i className="fas fa-heart"></i>
//       </span>
//     </footer>
//   );
// };

// class MediaCard extends React.Component {
//   render() {
//     const appRoot = (
//       <div className="App">
//         {userHeader({ pic }, (name = 'Gloria Sánchez'), (date = '31 de marzo de 2020'))},{Content((text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia.'))},{userFooter((likes = '37'))}
//       </div>
//     );
//     return appRoot;
//   }
// }
