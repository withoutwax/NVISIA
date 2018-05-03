import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        {/* SECTION 01 */}
        <section className="contact-section-00-container padding-left-100 padding-right-100">
          <article className="contact-section-00-banner-title">
            <h1>
              CONTACT US.
            </h1>
            <br/>
            <p>
              Have a question about NVISIA and what we do?<br />
              Are you a client and interested in working with us?<br />
              <br />
              Drop us a line and we’ll get back to you.
            </p>
          </article>
          <article className="contact-section-00-banner-text">
            <div>
              <p>First Name</p>
            </div>
            <div>
              <p>Last Name</p>
            </div>
            <div>
              <p>How can we help you?</p>
            </div>
            <div>
              <p>Submit</p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Contact;
