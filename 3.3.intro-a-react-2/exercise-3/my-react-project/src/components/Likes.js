import React from 'react';

// class Likes extends React.Component{
//     render(){
//         return(
//             <div className="conteiner-heart">
//             <p className="content-continue">Leer más...</p>
//             <p>{this.props.amountOfLikes}</p>
//             <i class="fas fa-heart"></i>
//           </div>
//         )
//     }
// }

const Likes = props => {
  const likeContent = (
    <footer className="App-footer">
      <p className="App-footer-readmore">Leer más...</p>
      <span className="App-footer-likes">
        {props.likes}
        <i className="fas fa-heart"></i>
      </span>
    </footer>
  );
  return likeContent;
};

export default Likes;
