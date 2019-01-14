import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.scss';

import SearchReposComponent from './modules/SearchRepositories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchReposComponent />
      </div>
    );
  }
}

export default App;
