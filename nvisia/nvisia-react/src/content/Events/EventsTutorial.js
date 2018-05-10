import React, { Component } from 'react';
import './EventsTutorial.css';

class Tutorials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      thumbnail: props.thumbnail,
      info: props.info,
      author: props.author,
    }
  }
  render() {
    return (
      <div className="events-tutorials padding-right-100">
        <img id="events-tutorials-img" src={this.state.thumbnail} />
        <h3 id="events-tutorials-heading">{this.state.title}</h3>
        <p id="events-tutorials-info">{this.state.info}</p>
        <p id="events-tutorials-author"><strong>AUTHOR:</strong> {this.state.author}</p>
      </div>
    );
  }
}

export default Tutorials;
