import React from 'react';
import '../Stylesheets/App.css';

class Collapsible extends React.Component {
  // renderPaletteNames = () => {
  //   {
  //     this.props.palettes.map((palette) => {
  //       return palette.name;
  //     });
  //   }
  // };
  handleClick = (ev) => {
    console.log(ev.currentTarget);
    this.props.handleClick(ev.currentTarget.id);
  };

  render() {
    console.log(this.props);
    return (
      <div className="Container">
        {this.props.palettes.palettes.map((palette, index) => {
          return this.props.content === true && this.props.clickedName == palette.name ? (
            <div id={palette.name} className="trigger" onClick={this.handleClick}>
              <h3>{palette.name}</h3>
              <p>{palette.from}</p>
            </div>
          ) : (
            <div id={palette.name} className="trigger" onClick={this.handleClick}>
              <h3>{palette.name}</h3>
              <i className="fas fa-sort-down"></i>
            </div>
          );
        })}
        {/* {this.props.palettes.palettes.map((palette, index) => {
          return this.props.content !== false ? (
            <div id={index} className="content">
              <p>{palette.from}</p>
            </div>
          ) : (
            <div id={index} className="content hidden"></div>
          );
        })} */}
      </div>
    );
  }
}

export default Collapsible;
// {// ); // })}}
