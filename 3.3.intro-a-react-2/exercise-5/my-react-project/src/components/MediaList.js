import React from 'react';
import MediaCard from './MediaCard';
import '../App.scss';

class MediaList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <section className="section-card">
        <ul className="section-card-list">
          <li>
            <MediaCard>
              {this.props.name}
              {this.props.date}
              {this.props.text}
              {this.props.likes}
            </MediaCard>

            {/* <MediaCard name="Alex Guerrero" date="23 de junio de 2017" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia." likes="37" /> */}
          </li>
          <li>
            <MediaCard>
              {this.props.name}
              {this.props.date}
              {this.props.text}
              {this.props.likes}
            </MediaCard>
            {/* <MediaCard name="Paquita Gutiérrez" date="3 de junio de 2019" text="Qué feliz era sin conocer React" likes="1M" /> */}
          </li>
          <li>
            <MediaCard>
              {this.props.name}
              {this.props.date}
              {this.props.text}
              {this.props.likes}
            </MediaCard>
            {/* /* <MediaCard name="Mari Carmen Rodríguez" date="30 de marzo de 2020" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia." likes="3" /> */}
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
