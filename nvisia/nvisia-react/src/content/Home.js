import React, { Component } from 'react';
import './Home.css';
import './Shared.css';

// Header-Banner
import headerBanner01 from '../assets/header-banner/Header-Image-Banner-1-1.jpg';
// Images
import connectOrange from '../assets/connect-orange.png';
import connectWhite from '../assets/connect-white.png';
import connectBlack from '../assets/connect-black.png';
import clientLogos from '../assets/home/clients-logos-01.png';
import caseStudy from '../assets/home/case-study-home.png';
import eventsBackdrop from '../assets/home/home-events-backdrop.png';
// Assets


class Home extends Component {
  render() {
    return (
      <div>
        <section className="section-00-container">
          <img src={headerBanner01} />
          <article className="section-00-banner-text">
            <h1>
              adopt. build. enable.
            </h1>
            <br/>
            <p>
              We adopt, build, enable new technologies for you.<br />
              This is our line, our way to build and deliver great software.
            </p>
          </article>
        </section>

        <section className="section-01-container padding-top-150 padding-bottom-150">
          <article className="section-01-title">
            <h3>01</h3>
            <img src={connectWhite} width="50px" alt="connect-white" />
            <h2>WHO<br/>
                ARE<br/>
                WE?
            </h2>
          </article>
          <article className="section-01-content margin-top-50">
            <p>
              <strong>NVISIA</strong> is a Software development partner focused on building highly integrated software solutions.
            </p>
            <button type="button" name="about-us" className="margin-top-60">
              LEARN MORE ABOUT US
            </button>
          </article>
        </section>

        <section className="section-02-container padding-top-150 padding-bottom-150">
          <article className="section-02-title">
            <h3>02</h3>
            <img src={connectOrange} width="50px" alt="connect-orange" />
            <h2>WHAT<br/>
                OUR<br/>
                CLIENTS<br/>
                SAY:
            </h2>
          </article>
          <article className="section-02-content">
            <img src={clientLogos} alt="client-logos" />
            <div className="quotes">
              “It was incredible to see a project come in on time and under budget while delivering great results. NVISIA provided a solid approach and capable resources in performing our assessment while maintaining an atmosphere of trust and collaboration, without pushing for extraneous features or additional services.”
              <br/>
              <br/>
              <span className="quotes-source">Michael W. Smith, Vice President of Information Technology, Sterigenics</span>
            </div>
          </article>
        </section>

        <section className="section-03-container box-shadow-grey-01">
          <article className="section-03-title">
            <h3>03</h3>
            <img src={connectBlack} width="50px" alt="connect-white" />
            <h2>OUR<br/>
                WORK:
            </h2>
            <p className="margin-top-50 padding-left-400">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>
            <button type="button" name="about-us" className="margin-top-60">
              VIEW CASE STUDIES
            </button>
          </article>
          <article className="section-03-content">
            <img src={caseStudy} alt="case-study-backdrop" />
          </article>
        </section>

        <section className="section-04-container">
          <article className="section-04-title">
            <h3>04</h3>
            <img src={connectBlack} width="50px" alt="connect-white" />
            <h2>EVENTS /<br/>
                TRAINING /<br/>
                MEETUPS:
            </h2>
            <p className="margin-top-50 padding-left-400">
              “At NVISIA, we offer great variety of training and events which peoplecan attend to. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>
            <button type="button" name="about-us" className="margin-top-60">
              SHOW ALL EVENTS
            </button>
          </article>
          <article className="section-04-content">
            <img src={eventsBackdrop} alt="case-study-backdrop" />
          </article>
        </section>
      </div>
    );
  }
}

export default Home;
