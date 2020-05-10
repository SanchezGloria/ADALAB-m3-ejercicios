import React from 'react';

// class Date extends React.Component {
// render(){
//   return(
//      <h3 className= "App-header-subtitle">
// {this.props.dateText}</h3>
//   )
// }
// }

const Date = props => <h3 className="App-header-subtitle">{props.date}</h3>;

export default Date;
