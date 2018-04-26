import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './About.css';

import connectOrange from '../assets/connect-orange.png';
import connectWhite from '../assets/connect-white.png';
import connectBlack from '../assets/connect-black.png';

import headerBanner02 from '../assets/header-banner/Header-Banner-02.jpg';
import aboutBanner01 from '../assets/about/about-banner-01.png';
import connectBig from '../assets/about/about-connect-big.png';
import historyImg01 from '../assets/about/about-company-history.png';
import icStars from '../assets/about/ic-stars.png';
import mcDonald from '../assets/about/mcdonald.png';
import osotAmerica from '../assets/about/osot-America-0911s.png';
// LEADERSHIP
import leadershipPhoto from '../assets/about/leadership/leadership-sample.png';

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

        {/* SECTION 01 */}
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

        {/* About - Vimeo Video - SECTION 02*/}
        <section className="about-vimeo-01-container padding-bottom-100">
          <ReactPlayer className="about-vimeo-01" url="https://vimeo.com/erichinesphotography/cityscapechicago" width="90%" height="700px" playing loop />
        </section>

        {/* SECTION 03 */}
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

        {/* SECTION 04 */}
        <section className="about-section-04-container padding-top-200">
          <img src={historyImg01} />
          <article className="about-section-04-banner-text padding-right-200">
            <h2>
              HISTORY
            </h2>
            <br/>
            <p className="padding-right-300">
              Our team members join NVISIA to build a career, not just to have a job. Being part of a culture that values hard work, growth opportunities, and having fun gives our staff the foundation on which to build a successful career of delivering for our clients.
            </p>
            <div className="about-section-04-article margin-top-40">
              <h2>Where it all began</h2>
              <button type="button" name="about-us" className="margin-top-60">
                LEARN MORE ABOUT US
              </button>
            </div>
          </article>
        </section>

        {/* SECTION 05 */}
        <section className="about-section-05-container padding-top-200">
          <img src={connectOrange} />
          <article className="about-section-05-banner-text">
            <h2>
              COMMUNITY SERVICES
            </h2>
          </article>
        </section>
        <section className="about-section-0501-container padding-bottom-100">
          <article>
            <img src={icStars} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </article>
          <article>
            <img src={mcDonald} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </article>
          <article>
            <img src={osotAmerica} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </article>
        </section>

        {/* SECTION 06 */}
        <section className="about-section-06-container padding-top-200 padding-bottom-200">
          <img src={connectOrange} />
          <article>
            <h2>
              LEADERSHIP
            </h2>
            <br />
            <p className="padding-right-300">
              Our Leadership team guides the best and brightest problem solvers in the industry. We get our inspiration from building platforms that touch real lives with every release.
            </p>
          </article>
        </section>
        <div className="about-leadership-outer-container padding-bottom-200">
          <section className="about-leadership">
            <h2 id="board-of-directors">BOARD OF DIRECTORS</h2>
            <img src={leadershipPhoto} />
            <img src={leadershipPhoto} />
            <img src={leadershipPhoto} />
            <h2 id="leadership-team">LEADERSHIP TEAM</h2>
            <img src={leadershipPhoto} />
            <img src={leadershipPhoto} />
            <img src={leadershipPhoto} />
            <img src={leadershipPhoto} />
            <img src={leadershipPhoto} />
            <img src={leadershipPhoto} />
          </section>
        </div>

      </div>
    );
  }
}

export default About;
