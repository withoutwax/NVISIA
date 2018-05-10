import React, { Component } from 'react';
import './Services.css';

import connectOrange from '../../assets/connect-orange.png';
import connectWhite from '../../assets/connect-white.png';
import connectBlack from '../../assets/connect-black.png';
import headerServices from '../../assets/header-banner/Header-81.jpg';

import asset01 from '../../assets/services/asset-01.png';

class Services extends Component {
  render() {
    return (
      <div>

        <section className="section-00-container">
          <img src={headerServices} />
          <article className="section-00-banner-text">
            <h1>
              SERVICES.
            </h1>
            <br/>
            <p>
              We partner with clients to advance their business using the latest technology. <br />
              High velocity delivery of great software is just where we start. <br />
              We raise the bar to enable true adoption in your organization.
            </p>
          </article>
      </section>

      {/* SECTION 01 */}
      <section className="services-section-01-container padding-top-200">
        <article className="services-section-01-banner-title">
          <img src={connectOrange} width="50px" alt="connect-white"/>
        </article>
        <article className="services-section-01-banner-text">
          <h1>
            ADOPT.<br />
            BUILD.<br />
            ENABLE.
          </h1>
        </article>
      </section>

      {/* SECTION 02 */}
      <section className="services-section-02-container padding-top-200">
        <article className="services-section-02-banner-title">
          <img src={asset01} alt="asset-01"/>
        </article>
        <article className="services-section-02-banner-text">
          <p><span>Adopt. Build. Enable.</span> is the what defines NVISIA. This is the way we deliver services to you.</p>
          <br />
          <p>
            <span>Adopt.</span> new technologies and a culture of delivery.<br />
            <span>Build.</span> great software.<br />
            <span>Enable.</span> your team.<br />
          </p>
        </article>
      </section>

      {/* SECTION 03 */}
      <section className="services-section-03-container padding-top-200 padding-left-300 padding-right-300">
        <div>
          <h1>Product Development</h1>
          <br />
          <p>Most corporate developers spend their time maintaining existing systems.  Building a high-profile, new product is something they’ve never done before.</p>
          <br />
          <p>NVISIA experts guide your business and IT teams to:</p>
          <ul>
            <li>Clarify the product vision</li>
            <li>Identify an MVP strategy</li>
            <li>Select the right technologies</li>
            <li>Build robust software</li>
            <li>Ensure its quality</li>
            <li>Get it launched</li>
          </ul>
          <p>We do it together, enabling your team to own the solution long-term.</p>
        </div>
        <div>
          <h1>Legacy Modernization</h1>
          <br />
          <p>What’s harder than building a new product from scratch? Transforming your legacy system into a flexible, modern platform that can keep up with your business without disrupting daily operations.</p>
          <br />
          <p>Together, we will:</p>
          <ul>
            <li>Set a modernization roadmap</li>
            <li>Engage your business and IT Teams</li>
            <li>Create innovative UIs to improve workflow and enable self-service</li>
            <li>Enable integration and reuse with a modern, service architecure</li>
            <li>Unwind your legacy data architecture</li>
            <li>Move to new platforms</li>
            <li>Introduce Agile, DevOps and a culture of delivery</li>
          </ul>
          <p>By delivering business value early and often, NVISIA ensures your modernization effort is viewed as a success and championed by your business</p>
        </div>
        <div>
          <h1>IT Strategy</h1>
          <br />
          <p>Have a business opportunity to evaluate? Concerned about the state of a project, product or department?  Need to make enterprise-wide changes?  We can help you come up with a plan. </p>
          <br />
          <p>Our senior team members have seen it all.  Let us:</p>
          <ul>
            <li>Quickly assess your situation</li>
            <li>Identify quick wins you can make now</li>
            <li>Define and articulate the IT vision that meets your needs</li>
            <li>Create a plan to incrementally minimize risk and deliver business value</li>
          </ul>
          <p>Outside perspective is a valuable thing.  NVISIA provides it in a practical, collaborative way, so that when we’re done, it’s not just our plan, it’s your plan.</p>
        </div>
        <div>
          <h1>Agile Teams</h1>
          <br />
          <p>Some agile enterprises choose to build high-performing teams they can continually bring work to. NVISIA augments these teams with the following skills:</p>
          <ul>
            <li>Product Owner, Scrum Master and team member roles</li>
            <li>User interface and experience design</li>
            <li>Full-stack software architecture</li>
            <li>Full-stack software development</li>
            <li>API development and integration</li>
            <li>Data architecture and integration</li>
            <li>Quality assurance and testing</li>
            <li>DevOps automation</li>
            <li>Scope, budget and timeline management</li>
          </ul>
          <p>Partner with us for team members you can rely on.</p>
        </div>
      </section>

      {/* SECTION 04 */}
      <section className="services-section-04-container padding-top-200 padding-bottom-200">
        <div>
          SECTION 04
        </div>
      </section>

      {/* SECTION 05 */}
      <section className="services-section-05-container padding-top-200 padding-bottom-200">
        <div>
          SECTION 05
        </div>
      </section>

      </div>
    );
  }
}

export default Services;
