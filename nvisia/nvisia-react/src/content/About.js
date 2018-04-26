import React, { Component } from 'react';
import './About.css';

import headerBanner02 from '../assets/header-banner/Header-Banner-02.jpg';
import aboutBanner01 from '../assets/about/about-banner-01.png';
class About extends Component {
  render() {
    return (
      <div>
        <section className="section-00-container">
          <img src={headerBanner02} />
          <article className="section-00-banner-text">
            <h1>
              About.
            </h1>
            <br/>
            <p>
              We adopt, build, enable new technologies for you.<br />
              This is our line, our way to build and deliver great software.
            </p>
          </article>
        </section>

        <section className="about-section-01-container">
          <img src={aboutBanner01} />
          <article className="about-section-01-banner-text">
            <h3>
              <strong>NVISIA</strong> is a Software development partner focused on building highly integrated software solutions.
            </h3>
          </article>
        </section>
      </div>
    );
  }
}

export default About;
