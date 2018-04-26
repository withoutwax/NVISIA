import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './About.css';

import connectOrange from '../assets/connect-orange.png';
import connectWhite from '../assets/connect-white.png';
import connectBlack from '../assets/connect-black.png';

import headerBanner02 from '../assets/header-banner/Header-Banner-02.jpg';
import aboutBanner01 from '../assets/about/about-banner-01.png';
import connectBig from '../assets/about/about-connect-big.png';

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

        <section className="about-section-02-container padding-top-200 padding-bottom-200">
          <img src={connectOrange} />
          <article className="about-section-02-banner-text padding-right-200">
            <h2>
              OUR MISSION.
            </h2>
            <br/>
            <p>
              We work side-by-side with our clients to create great software solutions that utilize new processes and technologies while simultaneously building a client team that can own the solution. This is best accomplished by attracting, retaining, and growing individuals who are passionate about their craft and continually developing new skills and capabilities.
            </p>
          </article>
        </section>

        {/* About - Vimeo Video */}
        <section className="about-vimeo-01-container padding-bottom-100">
          <ReactPlayer className="about-vimeo-01" url="https://vimeo.com/erichinesphotography/cityscapechicago" width="90%" height="700px" playing loop />
        </section>

        <section className="about-section-03-container padding-top-200 padding-bottom-200">
          <img src={connectOrange} />
          <article className="about-section-03-banner-text padding-right-200">
            <h2>
              OUR PURPOSE.
            </h2>
            <br/>
            <p>
              <strong>NVISIA</strong> was born at the nexus of three goals:
            </p>
            <div className="about-section-03-article margin-top-50">
              <img className="about-section-03-article-img-01" src={connectBig} />
              <div>
                <h2>OUR PEOPLE</h2>
                <p>
                  People are the most important element to any build; we work side-by-side with our clients to form an agile, committed team that takes pride in building the solution.
                </p>
              </div>
              <div>
                <h2>FORERUNNER</h2>
                <p>
                  These are the foundation of our company, guiding us in all we do, and inspiring us to continuously grow and evolve.
                </p>
              </div>
              <div>
                <h2>COMPETITIVE EDGE</h2>
                <p>
                  These are the foundation of our company, guiding us in all we do, and inspiring us to continuously grow and evolve.
                </p>
              </div>
            </div>

          </article>
        </section>
      </div>
    );
  }
}

export default About;
