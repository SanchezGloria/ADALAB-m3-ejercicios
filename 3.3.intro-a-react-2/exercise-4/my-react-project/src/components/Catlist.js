import React from 'react';
import RandomCat from './RandomCat';
class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>Los gatetes aleatorios</h1>
        <ul className="section-cats-list">
          <li>
            <RandomCat width={200} height={200} />
          </li>
          <li>
            <RandomCat width={400} height={200} />
          </li>
          <li>
            <RandomCat />
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;
