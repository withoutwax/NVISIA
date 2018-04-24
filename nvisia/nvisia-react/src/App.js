import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './content/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Home />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
