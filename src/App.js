import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Styles from './Components/Styles';
import uuid from 'uuid';
import StyleAdd from './Components/StyleAdd';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      styles: []
    };
  }

  componentWillMount() {
    this.setState({
      styles: [
      {id:uuid.v4(), name:'sty1', description:'style 1',colors:[{id:uuid.v4(), name:'red'},{id:uuid.v4(), name:'green'}]},
      {id:uuid.v4(), name:'sty2', description:'style 2',colors:[{id:uuid.v4(), name:'black'},{id:uuid.v4(), name:'white'}]},
      {id:uuid.v4(), name:'sty3', description:'style 3',colors:[{id:uuid.v4(), name:'blue'},{id:uuid.v4(), name:'pink'}]}
      ]
    });
  }

  handleAddStyle(newStyle) {
    let styles = this.state.styles;
    styles.push(newStyle);
    this.setState({
      styles: styles
    });
  }

  handleDeleteStyle(styleId) {
    let styles = this.state.styles;
    let index = styles.findIndex(s => s.id === styleId);
    styles.splice(index, 1);
    this.setState({
      styles: styles
    });
  }

  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Style Management Application</h1>
        </header>
        
        <p className="App-intro">
          
        </p>

        <Styles styles={this.state.styles} deleteStyle={this.handleDeleteStyle.bind(this)}/>
        
        <br/><br/>
        
        <StyleAdd addStyle={this.handleAddStyle.bind(this)}/>

      </div>
    );
  }
}

export default App;
