import React from 'react';
import pic from '../images/pic.jpg';

class MediaCard extends React.Component {
  render() {
    return (
      <div className="MApp">
        <header className="App-header">
          <img src={pic} className="App-header-pic" alt="background" />
          <div className="App-header-wrapper">
            <h1 className="App-header-title"> {this.props.name}</h1>
            <h3 className="App-header-subtitle"> {this.props.date}</h3>
          </div>
        </header>
        <main className="App-main">
          <p className="App-main-content">{this.props.text}</p>
        </main>
        <footer className="App-footer">
          <p className="App-footer-readmore">Leer más...</p>
          <span className="App-footer-likes">
            {this.props.likes}
            <i className="fas fa-heart"></i>
          </span>
        </footer>
      </div>
    );
  }
}

export default MediaCard;
