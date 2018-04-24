import React, { Component } from 'react';
import './Footer.css';
import chicagoBAB from '../assets/footer/Best-And-Brightest-Footer-Icons_BW.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container padding-top-80 padding-bottom-80 padding-right-80 padding-left-80">
        <div className="footer-chicago-office-title">
          <h4>
            CHICAGO<br/>
            HEADQUARTERS
          </h4>
        </div>
        <p className="footer-chicago-office">
          200 South Wacker Drive #3600<br />
          Chicago, IL 60602<br />
          <br />
          (312) 985-8100
        </p>
        <div className="footer-milwaukee-office-title">
          <h4>
            MILWAUKEE<br/>
            OFFICE
          </h4>
        </div>
        <p className="footer-milwaukee-office">
          100 East Wisconsin Avenue #2510<br />
          Milwaukee, WI 53202<br />
          <br />
          (414) 347-1303<br />
        </p>
        <div className="footer-about">
          <h4>
            About
          </h4>
          <ul>
            <li>Leadership</li>
            <li>People</li>
            <li>Culture</li>
          </ul>
        </div>
        <div className="footer-what-we-do">
          <h4>
            What we do
          </h4>
          <ul>
            <li>adapt. build. enable.</li>
            <li>Clients</li>
            <li>Case Study</li>
          </ul>
        </div>
        <div className="footer-blog">
          <h4>
            Blog
          </h4>
          <ul>
            <li>Recent</li>
            <li>Archive</li>
          </ul>
        </div>
        <div className="footer-events">
          <h4>
            Events
          </h4>
          <ul>
            <li>Tutorials</li>
            <li>Docker</li>
          </ul>
        </div>
        <div className="footer-careers">
          <h4>
            Careers
          </h4>
          <ul>
            <li>Marketing</li>
            <li>Sales</li>
            <li>Engineering</li>
            <li>Design</li>
            <li>University / Internship</li>
          </ul>
        </div>
        <div className="footer-container-02">
          <img src={chicagoBAB} width="200px" alt="chicago-best-and-brightest" />
          <p className="footer-copyright margin-top-20">COPYRIGHT 2018 (c) NVISIA, LLC. All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default Footer;
