import React, { Component } from 'react';

import headerBanner03 from '../assets/header-banner/Header-Careers.jpg';

class Careers extends Component {
  render() {
    return (
      <div>
        <section className="section-00-container">
          <img src={headerBanner03} />
          <article className="section-00-banner-text">
            <h1>
              JOIN OUR TEAM.
            </h1>
            <br/>
            <p>
              NVISIA is dedicated to fostering an environment where the<br/>
              most talented engineers can do their best work.
            </p>
          </article>
        </section>

        {/* SECTION 01 */}
        <section className="careers-section-01-container">
          <article className="careers-section-01-banner-text">
            <h3>
              <strong>NVISIA</strong> is a Software development partner focused on building highly integrated software solutions.
            </h3>
          </article>
        </section>
      </div>
    );
  }
}

export default Careers;
