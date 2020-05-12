import React from 'react';

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.image = {
      Praga: 'https://cdn.civitatis.com/republica-checa/praga/guia/praga.jpg',
      Boston: 'https://respiroviajes.com/wp-content/uploads/2019/03/boston-1024x576.jpg',
      Tokio: 'https://www.japonalternativo.com/wp-content/uploads/2018/10/barrio-de-akihabara-en-tokio.jpg',
      Sydney: 'https://growproexperience.com/wp-content/uploads/2018/05/Que%CC%81-ver-en-Sydney-1280x640.jpg',
      'Buenos Aires': 'https://pix10.agoda.net/hotelImages/4877634/0/db7ebdd6192005597fb67a0632c3a153.jpg?s=1024x768'
    };
  }
  render() {
    return <img src={this.image[this.props.city]}></img>;
  }
}

export default CityImage;
