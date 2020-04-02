import React, { Component } from 'react';
//import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
import logo from './logo.svg';
import './App.css';
import GetCovidDatas from './components/GetCovidDatas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Parsing Data JSON Info Covid-19 React JS</h1>
        <GetCovidDatas/>
      </div>
    );
  }
}

export default App;
