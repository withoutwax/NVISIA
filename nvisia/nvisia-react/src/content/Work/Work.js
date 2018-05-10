import React, { Component } from 'react';
import './Work.css';

import connectOrange from '../../assets/connect-orange.png';
import connectWhite from '../../assets/connect-white.png';
import connectBlack from '../../assets/connect-black.png';
import headerClient from '../../assets/header-banner/Header-Client.jpg';

import clientLogos02 from '../../assets/work/client-logos-02.png';

class Work extends Component {
  render() {
    return (
      <div>
        <section className="section-00-container">
          <img src={headerClient} />
          <article className="section-00-banner-text">
            <h1>
              WORK.
            </h1>
            <br/>
            <p>
              We do more than advise you what to do; we take you where you need to go. <br />
              Clients get out in front of business demands and stay there <br />
              with pragmatic and adaptive technology. Cross-platform services
            </p>
          </article>
        </section>

        {/* SECTION 01 */}
        <img className="work-section-01-client-img" src={clientLogos02}/>
        <section className="work-section-01-container padding-right-400">
          <article className="work-section-01-banner-title">
            <img src={connectOrange} width="50px" alt="connect-white"/>
          </article>
          <article className="work-section-01-banner-text">
            <h2>OUR CLIENTS</h2>
            <p>Our Clients are not just a somebody we can help.
  They are our family.</p>
            <div className="work-section-01-banner-text-02 margin-top-50">
              <div>
                <h4>Client Centered Approach</h4>
                <br />
                <p>Always working in our clients; best interest, NVISIA’s approach is to leverage existing resources, adding necessary efficiencies and improvements. Our goal is to leave behind a solid, well-designed product, plus an improved team, process and infrastructure to support it.</p>
              </div>
              <div>
                <h4>Complexity Without Confusion</h4>
                <br />
                <p>First mobile and web development to the integration of disparate systems, NVISIA always strives for the elegant solution. End users benefit from a clear and engaging technical experience. Behind the scenes, data is appropriately managed, accessed and applied. Front and back ends come together seamlessly based on sound engineering princibles.</p>
              </div>
              <div>
                <h4>Trusted when Stakes are High</h4>
                <br />
                <p>Clients trust NVISIA with “can’t miss” projects because we’re proactive to managing project timelines and risks.We’re confident we can handle any scenario our clients give us. An iterative development process ensures that performance, reliability and adaptability will exceed expectations.</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Work;
