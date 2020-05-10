import React from 'react';
import pic from '../images/pic.jpg';
import '../stylesheets/App.scss';

// const userHeader = props => {
//   console.log(props);
//   return (
//     <header className="App-header">
//       <img src={pic} className="App-header-pic" alt="background" />
//       <div className="App-header-wrapper">
//         <h1 className="App-header-title">{props.name}</h1>
//         <h3 className="App-header-subtitle"> {props.date}</h3>
//       </div>
//     </header>
//   );
// };

// forma 2

const userContent = content => {
  return (
    <main className="App-main">
      <p className="App-main-content">{content}</p>
    </main>
  );
};

// forma 1

// const userContent = props => {
//   return (
//     <main className="App-main">
//       <p className="App-main-content">{props.content}</p>
//     </main>
//   );
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

function MediaCard(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="App-header-pic" alt="background" />
        <div className="App-header-wrapper">
          <h1 className="App-header-title">{props.name}</h1>
          <h3 className="App-header-subtitle"> {props.date}</h3>
        </div>
      </header>
      {userContent(props.content)}
      {/* <main className="App-main">
        <p className="App-main-content">{props.content}</p>
      </main> */}
      <footer className="App-footer">
        <p className="App-footer-readmore">Leer más...</p>
        <span className="App-footer-likes">
          {props.likes}
          <i className="fas fa-heart"></i>
        </span>
      </footer>
    </div>
  );
}

export default MediaCard;
