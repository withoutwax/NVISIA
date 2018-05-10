import React, { Component } from 'react';
import Cards from './EventsCard';
import Tutorials from './EventsTutorial';
import './Events.css';

import connectOrange from '../../assets/connect-orange.png';
import connectWhite from '../../assets/connect-white.png';
import connectBlack from '../../assets/connect-black.png';
import headerBanner04 from '../../assets/header-banner/Header-Events.png';

import logo02 from '../../assets/symbols/logo02.png'; // NVISIA LOGO
import mkeAgile from '../../assets/events/mke-agile.png'; // MKE-AGILE LOGO
import web414 from '../../assets/events/web-414.png' // WEB-414 logo
import docker from '../../assets/events/docker-full.png'; // DOCKER LOGO
import dockerTop from '../../assets/events/docker-top.png'; // DOCKER TOP
import dockerBottom from '../../assets/events/docker-bottom.png'; // DOCKER BOTTOM

import videoThumb from '../../assets/events/video-thumbnail.png'; // VIDEO THUMBNAIL

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
        <section className="events-section-container padding-top-200">
          <article className="events-section-banner-title">
            <img src={connectOrange} width="50px" alt="connect-white"/>
            <h2>EVENTS</h2>
            <h1>1</h1>
          </article>
          <article className="events-section-banner-text">
            <Cards
              title="MILWAUKEE DIGITAL PLATFORM CONFERENCE"
              logo={logo02}
              location="MILWAUKEE"
              date="May | TBD | TBD"
            />
          </article>
        </section>

        {/* SECTION 02 */}
        <section className="events-section-container">
          <article className="events-section-banner-title">
            <img src={connectOrange} width="50px" alt="connect-white"/>
            <h2>MEETUPS</h2>
            <h1>4</h1>
          </article>
          <article className="events-section-banner-text">
            <Cards
            title="THE POWER OF PAIRING MILWAUKEE AGILE MEETUP"
              logo={mkeAgile}
              location="MILWAUKEE"
              date="March 6th | TUE | 5:30 PM"
            />
            <Cards
            title="MICROSERVICES MARCH MADNESS MEETUP"
              logo={web414}
              location="CHICAGO"
              date="March 15th | THURS | 8:30AM"
            />
            <Cards
            title="GIVE IT A REST, GraphQL FTW MEETUP"
              logo={logo02}
              location="CHICAGO"
              date="March 21st | WED | TBA"
            />
          </article>
        </section>

        {/* SECTION 03 */}
        <section className="events-section-container padding-top-200">
          <article className="events-section-banner-title">
            <img src={connectOrange} width="50px" alt="connect-white"/>
            <h2>CLASSROOMS TRAINING</h2>
            <h1>3</h1>
          </article>
          <article className="events-section-banner-text">
            <Cards
            title="DOCKER FUNDAMENTALS TRAINING"
              logo={dockerBottom}
              location="CHICAGO"
              date="March 6th | TUE | 8;30 AM
                    April 19th | THURS | 8:30 AM
                    May 22th | TUE | 8:30 AM"
            />
            <Cards
            title="DOCKER COMMUNITY EDITION"
              logo={dockerTop}
              location="CHICAGO"
              date="Tue, March 6th, 8;30 AM
                    ~
                    Wed, Mar 7th, 4:30 PM CST"
            />
            <Cards
            title="DOCKER FUNDAMENTALS
                  +
                  ENTERPRISE DEVELOPER (BUNDLE)"
              logo={docker}
              location="CHICAGO"
              date="March 6th | TUE | 8;30 AM
                    April 19th | THURS | 8:30 AM
                    May 22th | TUE | 8:30 AM"
            />
          </article>
        </section>

        {/* SECTION 04 */}
        <section className="events-section-container padding-top-200 padding-bottom-200">
          <article className="events-section-banner-title">
            <img src={connectOrange} width="50px" alt="connect-white"/>
            <h2>TUTORIALS</h2>
            <h1>3</h1>
          </article>
          <article className="events-section-tutorial-banner-text">
            <Tutorials
              title="APACHE CAMEL VIDEO TUTORIAL"
              thumbnail={videoThumb}
              info="NVISIA’s Michael Hoffman introduces Apache Camel, the open-source integration framework based on proven Enterprise Integration Patterns. This easy to follow, 3-part video tutorial introduces the Camel’s rules/mediation engine, demonstrates a case study usage of the framework and finally reviews key points to help you to decide if Camel is right for you."
              author="MICHAEL HOFFMAN"
            />
            <Tutorials
              title="RESTFUL SERVICES WITH SPRING BOOT"
              thumbnail={videoThumb}
              info="Happy Holidays from NVISIA! Are you looking for a fun tutorial over the holiday break? Check out Rav’s tutorial on building RESTful services with Springboot."
              author="RAV TONSIENGSOM"
            />
            <Tutorials
              title="COMPARISON OF SPRING CLOUD WITH EUREKA vs. CONSUL.io"
              thumbnail={videoThumb}
              info="In this tutorial, you will bed shared with experiences gained with two different solutions. Each of these solutions has been rolled into the Spring Cloud project making them potential candidates for the application space being targeted."
              author="BRIAN PETERSON"
            />

          </article>
        </section>

      </div>
    );
  }
}

export default Events;
