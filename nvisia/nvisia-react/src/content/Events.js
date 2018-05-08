import React, { Component } from 'react';
import Cards from './EventsCard';
import './Events.css';

import connectOrange from '../assets/connect-orange.png';
import connectWhite from '../assets/connect-white.png';
import connectBlack from '../assets/connect-black.png';
import headerBanner04 from '../assets/header-banner/Header-Events.png';

import logo02 from '../assets/symbols/logo02.png'; // NVISIA LOGO

class Events extends Component {
  render() {
    return (
      <div>
        <section className="section-00-container">
          <img src={headerBanner04} />
          <article className="section-00-banner-text">
            <h1>
              EVENTS.
            </h1>
            <br/>
            <p>
              NVISIA is dedicated to fostering an environment where the<br/>
              most talented engineers can do their best work.
            </p>
          </article>
        </section>

        {/* SECTION 01 */}
        <section className="events-section-01-container padding-top-200 padding-bottom-200">
          <article className="events-section-01-banner-title">
            <img src={connectOrange} width="50px" alt="connect-white"/>
            <h2>EVENTS</h2>
            <h1>1</h1>
          </article>
          <article className="events-section-01-banner-text">
            <Cards
              title="MILWAUKEE DIGITAL PLATFORM CONFERENCE"
              logo={logo02}
              location="MILWAUKEE"
              date="May | TBD | TBD"
            />
          </article>
        </section>

      </div>
    );
  }
}

export default Events;
