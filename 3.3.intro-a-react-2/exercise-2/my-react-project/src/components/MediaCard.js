import React from 'react';
import pic from '../images/pic.jpg';
import '../stylesheets/App.scss';

class MediaCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={pic} className="App-header-pic" alt="background" />
          <div className="App-header-wrapper">
            <h1 className="App-header-title">{this.props.name}</h1>
            <h3 className="App-header-subtitle">{this.props.date}</h3>
          </div>
        </header>
        <main className="App-main">
          <p className="App-main-content">{this.props.content}</p>
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
// { userHeader(pic = { pic } name = "Gloria Sánchez" date = "31 de marzo de 2020") } text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia." likes = "37" />;
