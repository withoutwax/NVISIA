import React, { Component } from 'react';
import './Blog.css';
import BlogArticles from './BlogArticles';

import connectOrange from '../../assets/connect-orange.png';
import connectWhite from '../../assets/connect-white.png';
import connectBlack from '../../assets/connect-black.png';

import headerBanner05 from '../../assets/header-banner/Header-85.jpg';

import blogThumb01 from '../../assets/blog/blog-01.jpg';
import blogThumb02 from '../../assets/blog/blog-02.jpg';
import blogThumb03 from '../../assets/blog/blog-03.jpg';
import blogThumb04 from '../../assets/blog/blog-04.jpg';
import blogThumb05 from '../../assets/blog/blog-05.png';
import blogThumb06 from '../../assets/blog/blog-06.jpg';
import blogThumb07 from '../../assets/blog/blog-07.jpeg';

class Blog extends Component {
  render() {
    return (
      <div>
        <section className="section-00-container">
          <img src={headerBanner05} />
          {/*
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
          */}
        </section>

        {/* SECTION 01 */}
        <section className="blog-section-01-container padding-top-100">
          <article className="blog-section-01-banner-title">
            <img src={connectOrange} width="50px" alt="connect-white"/>
          </article>
          <article className="blog-section-01-banner-text">
            <h2>INSIGHTS</h2>
            <p>This is where we share our thoughts / Blog.</p>
          </article>
        </section>

        {/* SECTION 02 */}
        <section className="blog-section-02-container padding-top-100 padding-left-400 padding-right-300">
          <article className="blog-section-02-topic">
            <h4>Topic</h4>
            <ul>
              <li>Cloud</li>
              <li>Culture</li>
              <li>Big Data</li>
              <li>DevOps</li>
              <li>Software Architecture</li>
              <li>Agile</li>
              <li>IoT</li>
              <li>UI/UX</li>
              <li>Development</li>
              <li>Software Design</li>
            </ul>
          </article>

          <article className="blog-section-02-blog">
            <BlogArticles
              title="Government of Consortium Technical Infrastructure Policies Part 4"
              thumbnail={blogThumb01}
              date="4/23/18 10:07 AM"
              author="Rob Miroballi"
              info="This blog post is part of a series called Governance of Consortium Blockchains. The series will explore the policies that should be created once a governance body takes form. Read below for the fourth of this five-part series."
            />
            <BlogArticles
              title="Consortium Management and Member Participation Policies Part 3"
              thumbnail={blogThumb02}
              date="4/16/18 3:47 PM"
              author="Rob Miroballi"
              info="This blog post is part of a series called Governance of Consortium Blockchains. The series will explore the policies that should be created once a governance body takes form. Read below for the third of this five-part series."
            />
            <BlogArticles
              title="Give it a REST GraphQL -- Web414 Meetup"
              thumbnail={blogThumb03}
              date="4/4/18 2:43 PM"
              author="NVISIA Marketing"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <BlogArticles
              title="i.c.stars Announces Partnership with Software Firm NVISIA"
              thumbnail={blogThumb04}
              date="4/2/18 5:40 PM"
              author="NVISIA Marketing"
              info="CHICAGO---March 30, 2018  Software firm NVISIA announced a new partnership with technology workforce development nonprofit i.c.stars. The sponsorship will support the training program that is building the next generation of technology talent, while offering opportunities to underserved young adults in Chicago and Milwaukee."
            />
            <BlogArticles
              title="Consortium Membership Policies Part 2"
              thumbnail={blogThumb05}
              date="4/2/18 4:52 PM"
              author="Rob Miroballi"
              info="This blog post is part of a series called Governance of Consortium Blockchains. The series will explore the policies that should be created once a governance body takes form. Read below for the second of this five-part series."
            />
            <BlogArticles
              title="Governance of Consortium Blockchains Series Part 1"
              thumbnail={blogThumb06}
              date="3/26/18 8:05 AM"
              author="Rob Miroballi"
              info="This blog post is part of a series called Governance of Consortium Blockchains. The series will explore the policies that should be created once a governance body takes form. Read below for the first of this five-part series."
            />
            <BlogArticles
              title="Isolated Integration Tests: Oxymoron or Best Practice?"
              thumbnail={blogThumb07}
              date="1/15/18 3:05 PM"
              author="Jeff Gitter"
              info="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <div className="padding-top-100 padding-bottom-100" id="blog-readmore">
              READ MORE
            </div>
          </article>
        </section>

      </div>
    );
  }
}

export default Blog;
