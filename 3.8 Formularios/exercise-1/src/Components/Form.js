import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
      age: '16',
      checked: '',
      gender: ['Fantasía'],
    };
    this.handletName = this.handleName.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    // this.handleDescription = this.handleDescription.bind(this);
    // this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleName = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({ [name]: value });
  };

  // handleName = (ev) => {
  //   this.setState({ name: ev.currentTarget.value });
  // };
  handleDescription = (ev) => {
    this.setState({ description: ev.currentTarget.value });
  };
  handleLanguage = (ev) => {
    this.setState({ language: ev.target.value });
    console.log(ev.currentTarget.value);
  };

  handleCheckbox(ev) {
    const { value, checked } = ev.currentTarget;
    // if (checked === true) {
    //   this.state.gender.push(value);
    // } else {
    //   const index = this.state.gender.indexOf(value);
    //   this.state.gender.splice(index, 1);
    // }
    // this.setState({
    //   gender: this.state.gender,
    // });
    this.setState((prevState) => {
      if (checked === true) {
        prevState.gender.push(value);
      } else {
        const index = prevState.gender.indexOf(value);
        prevState.gender.splice(index, 1);
      }
      return {
        gender: prevState.gender,
      };
    });
  }

  render() {
    // DESTRUCTURING
    // const { name, description, language } = this.state;
    console.log(this.state);
    return (
      <div>
        <form>
          <label htmlFor="name">Nombre</label>
          <input onChange={this.handleName} type="text" value={this.state.name} /*{name}*/ name="name" />
          <label htmlFor="description">Descripción</label>
          <textarea onChange={this.handleName} name="description" value={this.state.description} /*{description}*/ rows="5" cols="30"></textarea>
          <select onChange={this.handleName} name="language">
            <option value={this.state.language} /*{language}*/>Selecciona un idioma</option>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
          <label>A</label>
          <input onChange={this.handleName} type="radio" name="age" value="A" defaultChecked={this.state.age === 'A'} />
          <label>7</label>
          <input onChange={this.handleName} type="radio" name="age" value="7" defaultChecked={this.state.age === '7'} />
          <label>12</label>
          <input onChange={this.handleName} type="radio" name="age" value="12" defaultChecked={this.state.age === '12'} />
          <label>16</label>
          <input onChange={this.handleName} type="radio" name="age" value="16" defaultChecked={this.state.age === '16'} />
          <label>18</label>
          <input onChange={this.handleName} type="radio" name="age" value="18" defaultChecked={this.state.age === '18'} />
          <label htmlFor="cbox2">Comedia</label>
          <input onChange={this.handleCheckbox} type="checkbox" id="" name="gender" value="Comedia" checked={this.state.gender.includes('Comedia')} />
          <label htmlFor="cbox2">Drama</label>
          <input onChange={this.handleCheckbox} type="checkbox" id="" name="gender" value="Drama" checked={this.state.gender.includes('Drama')} />
          <label htmlFor="cbox2">Fantasía</label>
          <input onChange={this.handleCheckbox} type="checkbox" id="" name="gender" value="Fantasía" checked={this.state.gender.includes('Fantasía')} />
          <label htmlFor="cbox2">Acción</label>
          <input onChange={this.handleCheckbox} type="checkbox" id="" name="gender" value="Acción" checked={this.state.gender.includes('Acción')} />
          <label htmlFor="cbox2">Familia</label>
          <input onChange={this.handleCheckbox} type="checkbox" id="" name="gender" value="Familia" checked={this.state.gender.includes('Familia')} />
          <label htmlFor="cbox2">Terror</label>
          <input onChange={this.handleCheckbox} type="checkbox" id="" name="gender" value="Terror" checked={this.state.gender.includes('Terror')} />
        </form>
        <h2>{this.state.name}</h2>
        <p>{this.state.description}</p>
        <p>{this.state.language}</p>
      </div>
    );
  }
}

export default Form;
