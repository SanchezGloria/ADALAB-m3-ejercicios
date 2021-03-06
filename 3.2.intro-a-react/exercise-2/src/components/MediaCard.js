import React from 'react';
import pic from '../images/pic.jpg';
import '../App.scss';

class MediaCard extends React.Component {
  render() {
    const userHeader = (
      <header className="App-header">
        <img src={pic} className="App-header-pic" alt="background" />
        <h1 className="App-header-title">Alex Guerrero</h1>
        <h3 className="App-header-subtitle"> Lunes 26 de junio de 2017</h3>
      </header>
    );
    const userContent = (
      <main className="App-main">
        <p className="App-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
      </main>
    );
    const userFooter = (
      <footer className="App-footer">
        <p className="App-footer-readmore">Leer más...</p>
        <span className="App-footer-likes">
          37
          <i className="fas fa-heart"></i>
        </span>
      </footer>
    );
    const appRoot = (
      <div className="App">
        {userHeader},{userContent},{userFooter}
      </div>
    );
    return appRoot;
  }
}

export default MediaCard;
