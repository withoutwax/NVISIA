import React, { Component } from 'react';
import './Careers.css';

import connectOrange from '../../assets/connect-orange.png';
import connectWhite from '../../assets/connect-white.png';
import connectBlack from '../../assets/connect-black.png';
import headerBanner03 from '../../assets/header-banner/Header-Careers.jpg';

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
              <i>“Even the most brilliant technology will never deliver results alone.<br />
              However, people using brilliant technology will.”</i>
            </h3>
          </article>
        </section>

        {/* SECTION 02 */}
        <section className="careers-section-02-container padding-top-200 padding-bottom-200">
          <img src={connectWhite} width="50px" alt="connect-white"/>
          <article className="careers-section-02-banner-text">
            <div>
              <h4>Software Matters</h4>
              <br />
              <p>NVISIA’s delivery model relies on small, forward-thinking teams with superior technical skills. From mobile and web development to the integration of disparate systems, NVISIA always strives for the elegant solution. End users benefit from a clear and engaging technical experience. Behind the scenes, data is appropriately managed, accessed and applied. Front and back ends come together seamlessly based on sound engineering principles.</p>
            </div>
            <div>
              <h4>Culture Matters</h4>
              <br />
              <p>Beyond the on-the-job collaboration, NVISIA builds in plenty of opportunities to kick back and have fun together. We love what we do and enjoy being in the company of other smart, motivated people. “Work hard, play hard” is a way of life. Our culture is collaborative and we build off of our clients’ staff, processes and technology. We are hardworking and highly professional, but we know how to relax.</p>
            </div>
            <div>
              <h4>You Matter</h4>
              <br />
              <p>NVISIA combines the variety of consulting with the stability of corporate employment. Ultimately, you’re in charge of your career at NVISIA, whether you choose a development, requirements or project management path. There’s no “contractor” mentality here; you’ll have significant learning opportunities and project visibility. In return, your contributions will be recognized and rewarded in meaningful ways, personally, professionally and financially.</p>
            </div>
            <div>
              <h4>Vision + Dental Insurance</h4>
              <br />
              <p>Vision insurance, through VSP, includes exams, lenses, contact lenses and eyeglass frame allowance. Through Principal Financial Group, employees may elect to purchase one of the following Dental plans: PPO Out-of-Network and PPO In-Network. Dental insurance includes preventive care and orthodontia.</p>
            </div>
            <div>
              <h4>Paid Time Off + Holidays</h4>
              <br />
              <p>NVISIA’s PTO program allows employees to take the time they need to take care of the things that matter most to them. The amount of time is based upon the number of years with the company and is accrued per pay period. In addition to Paid Time Off (PTO), NVISIA also provides seven (7) paid holidays and one (1) floating holiday per year.</p>
            </div>
            <div>
              <h4>Medical + Life Insurance</h4>
              <br />
              <p>The medical insurance plans were designed with your needs in mind. Employees may choose between three available Blue Cross Blue Shield plans: Traditional PPO and two PPO with Health Savings Accounts. All plans include prescription coverage. Basic Life, AD&D, Short Term Disability and Long Term Disability Insurance benefits are offered through Principal Financial Group at no cost to the employee. </p>
            </div>
          </article>
        </section>

        {/* SECTION 03 */}
        <section className="careers-section-03-container padding-top-100 padding-bottom-100">
          <h2>OPEN POSITIONS</h2>
          <article className="careers-section-03-banner-text">
            <div>
              <h3>Chicago</h3>
              <p className="padding-top-20 padding-left-30">Title</p>
              <svg height="2" width="1300">
                <line x1="0" y1="0" x2="1300" y2="0"  style={{stroke:'black', strokeWidth:'1.5px'}} />
              </svg>

              <ul className="careers-section-03-positions padding-left-30">
                <li>Technical Lead</li>
                <li>Software Engineer</li>
                <li>Senior Technical Architect</li>
                <li>Technical Architect</li>
                <li>UIUX Designer</li>
              </ul>

            </div>
            <div>
              <h3>Milwaukee</h3>
              <p className="padding-top-20 padding-left-30">Title</p>
              <svg height="2" width="1300">
                <line x1="0" y1="0" x2="1300" y2="0"  style={{stroke:'black', strokeWidth:'1.5px'}} />
              </svg>

              <ul className="careers-section-03-positions padding-left-30">
                <li>Technical Lead</li>
                <li>Software Engineer .Net</li>
                <li>Technical Lead .Net</li>
                <li>UIUX Designer</li>
              </ul>
            </div>
          </article>
          <p id="careers-section-banner-drop-us-a-line">
            We are always looking for candidates who are willing to take the challenge.<br />
            Don’t see your position?<br />
            <br />
            Drop us a line at <span>careers@nvisia.com</span>
          </p>
        </section>

      </div>
    );
  }
}

export default Careers;
