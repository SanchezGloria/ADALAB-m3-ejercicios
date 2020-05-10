import React from 'react';
import '../stylesheets/App.scss';
import pic from '../images/pic.jpg';
// import '../stylesheets/MediaCard.scss';
// import './App.scss';

class MediaCard extends React.Component {
  render() {
    const userHeader = (
      <header className="App-header">
        <img src={pic} className="App-header-pic" alt="background" />
        <div className="App-header-wrapper">
          <h1 className="App-header-title"> Alex Guerrero</h1>
          <h3 className="App-header-subtitle"> Lunes, 26 de junio de 2017</h3>
        </div>
      </header>
    );
    const userContent = (
      <main className="App-main">
        <p className="App-main-content">Lorem ipsum dolor sit amet consectetur adipiscing elit molestie fames, interdum montes porttitor eleifend per taciti malesuada integer cum, at tristique penatibus eget cursus velit sed nibh. Enim tempor orci leo penatibus maecenas suspendisse posuere curabitur, odio urna erat egestas class nostra ante, ligula sociis sociosqu condimentum scelerisque diam laoreet. </p>
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
        {userHeader}
        {userContent}
        {userFooter}
      </div>
    );
    return appRoot;
  }
}

export default MediaCard;

// EJERCICIO 1
