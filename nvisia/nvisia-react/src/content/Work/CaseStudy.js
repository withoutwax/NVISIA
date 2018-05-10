import React, { Component } from 'react';
import './CaseStudy.css';

// import CaseStudySprites from '../../assets/work/01_1475.jpg';

class CaseStudy extends Component {
  render() {
    return (
      <div class="case-study">
        <div class="case-study-01">
        {/* Case Study 01 */}
        <div class="case-study-type-A-image" >
          {/* Img 01 */}
          <li class="sprite" id="image-01"></li>
        </div>
        <div class="case-study-type-A-info">
          <h1>01</h1>
          <br />
          {/*
          <svg height="10" width="20">
            <line x1="0" y1="0" x2="20" y="0" style="stroke:rgb(245, 130, 33); stroke-width:5" />
          </svg>
          */}
          <p>STERIGENICS</p>
        </div>
      </div>
      {/* Case Study 02 */}
      <div class="case-study-02">
        <div class="case-study-type-A-image">
          {/* Img 02 */}
          <li class="sprite" id="image-02"></li>
        </div>
        <div class="case-study-type-A-info">
          <h1>02</h1>
          <br />
          {/*
          <svg height="10" width="20">
            <line x1="0" y1="0" x2="20" y="0" style="stroke:rgb(245, 130, 33); stroke-width:5" />
          </svg>
          */}
          <p>AMERICAN SIGNAL</p>
        </div>
      </div>
      <div class="case-study-03">
        <div class="case-study-type-D-image">
          IMAGE GOES HERE
        </div>
        <div class="case-study-type-D-info">
          <h1>03</h1>
          <br />
          {/*
          <svg height="10" width="20">
            <line x1="0" y1="0" x2="20" y="0" style="stroke:rgb(245, 130, 33); stroke-width:5" />
          </svg>
          */}
          <p>ACCUITY</p>
        </div>
      </div>
      <div class="case-study-04">
        <div class="case-study-type-B-image">
          IMAGE GOES HERE
        </div>
        <div class="case-study-type-B-info">
          <h1>04</h1>
          <br />
          {/*
          <svg height="10" width="20">
            <line x1="0" y1="0" x2="20" y="0" style="stroke:rgb(245, 130, 33); stroke-width:5" />
          </svg>*/}
          <p>ADELMAN</p>
        </div>
      </div>
      <div class="case-study-05">
      <div class="case-study-type-D-image">
          IMAGE GOES HERE
        </div> -->
        <div class="case-study-type-D-info">
          <h1>05</h1>
          <br />
          {/*
          <svg height="10" width="20">
            <line x1="0" y1="0" x2="20" y="0" style="stroke:rgb(245, 130, 33); stroke-width:5" />
          </svg>
          */}
          <p>ELSEVIER</p>
        </div>
      </div>
      <div class="case-study-06">
        <div class="case-study-type-D-image">
          IMAGE GOES HERE
        </div>
        <div class="case-study-type-D-info">
          <h1>06</h1>
          <br />
          {/*
          <svg height="10" width="20">
            <line x1="0" y1="0" x2="20" y="0" style="stroke:rgb(245, 130, 33); stroke-width:5" />
          </svg>
          */}
          <p>ADELMAN</p>
        </div>
      </div>
    </div>
    );
  }
}

export default CaseStudy;
