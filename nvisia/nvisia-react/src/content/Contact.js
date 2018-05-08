import React, { Component } from 'react';
import './Contact.css';
import './ContactForm.css';

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

          {/*Text Input Effects by https://tympanus.net/Development/TextInputEffects/index.html*/}
          <article className="contact-section-00-banner-text">
            <span className="input input--isao">
              <input className="input__field input__field--isao" type="text" id="input-38" />
              <label className="input__label input__label--isao" for="input-38" data-content="First Name">
                <span className="input__label-content input__label-content--isao">First Name</span>
              </label>
            </span>
            <span className="input input--isao">
              <input className="input__field input__field--isao" type="text" id="input-39" />
              <label className="input__label input__label--isao" for="input-39" data-content="Middle Name">
                <span className="input__label-content input__label-content--isao">Last Name</span>
              </label>
            </span>
            <span className="input input--isao">
              <input className="input__field input__field--isao" type="text" id="input-40" />
              <label className="input__label input__label--isao" for="input-40" data-content="Last Name">
                <span className="input__label-content input__label-content--isao">Message</span>
              </label>
            </span>
            <span class="input input--isao">
              <p>Submit</p>
            </span>
          </article>
        </section>
      </div>
    );
  }
}

export default Contact;
