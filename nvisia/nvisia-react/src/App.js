import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './shared/Header.css';
import NVISIA from './assets/symbols/logo01.png'

// Shared
// import Header from './shared/Header';
import Footer from './shared/Footer';

import Home from './content/Home';
import About from './content/About/About';
import Work from './content/Work/Work';
import Services from './content/Services/Services';
import Blog from './content/Blog/Blog';
import Events from './content/Events/Events';
import Careers from './content/Careers/Careers';
import Contact from './content/Contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <header className="App-header">
            <navbar className="header-nav">
              <Link to="/" className="nvisia-logo"><img src={NVISIA} alt="NVISIA-logo"/></Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/work">WORK</Link>
              <Link to="/services">SERVICES</Link>
              <Link to="/blog">BLOG</Link>
              <Link to="/events">EVENTS</Link>
              <Link to="/careers">CAREERS</Link>
              <Link to="/contact" className="margin-right-50">CONTACT US</Link>
            </navbar>
          </header>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/services" component={Services} />
          <Route path="/blog" component={Blog} />
          <Route path="/events" component={Events} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
