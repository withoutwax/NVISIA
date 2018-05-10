import React, { Component } from 'react';
import './EventsCard.css';

// import logo02 from '../assets/symbols/logo02.png';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      logo: props.logo,
      location: props.location,
      date: props.date,
    }
  }

  render() {
    return (
      <div className="events-card">
        <h4 id="events-card-title">{this.state.title}</h4>
        <img id="events-card-img" src={this.state.logo} />
        <div id="events-card-date">
          <p><strong>{this.state.location}</strong></p>
          <p>{this.state.date}</p>
        </div>
        <button type="button" name="about-us" id="events-card-button" className="margin-top-60">
          REGISTER
        </button>
      </div>

    );
  }
}
export default Cards;
