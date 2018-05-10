import React, { Component } from 'react';
import './CaseStudy.css';

// import CaseStudySprites from '../../assets/work/01_1475.jpg';

class CaseStudy extends Component {
  render() {
    return (
      <div className="case-study box-shadow-grey-01 margin-bottom-200">
        <div className="case-study-01">
        {/* Case Study 01 */}
        <div className="case-study-type-A-image" >
          {/* Img 01 */}
          <li className="sprite" id="image-01"></li>
        </div>
        <div className="case-study-type-A-info">
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
      <div className="case-study-02">
        <div className="case-study-type-A-info">
          <h1>02</h1>
          <br />
          {/*
          <svg height="10" width="20">
            <line x1="0" y1="0" x2="20" y="0" style="stroke:rgb(245, 130, 33); stroke-width:5" />
          </svg>
          */}
          <p>ELSEVIER</p>
        </div>
        <div className="case-study-type-A-image">
          {/* Img 02 */}
          <li className="sprite" id="image-02"></li>
        </div>
      </div>

      {/* Case Study 03 */}
      <div className="case-study-03">
        <div className="case-study-type-D-image">
          {/* Img 03 */}
          <li className="sprite" id="image-03"></li>
        </div>
        <div className="case-study-type-D-info">
          <h1>03</h1>
          <br />
          {/*
          <svg height="10" width="20">
            <line x1="0" y1="0" x2="20" y="0" style="stroke:rgb(245, 130, 33); stroke-width:5" />
          </svg>
          */}
          <p>AMERICAN SIGNAL</p>
        </div>
      </div>

      {/* Case Study 04 */}
      <div className="case-study-04">
        <div className="case-study-type-B-image">
        {/* Img 04 */}
        <li className="sprite" id="image-04"></li>
        </div>
        <div className="case-study-type-B-info">
          <h1>04</h1>
          <br />
          {/*
          <svg height="10" width="20">
            <line x1="0" y1="0" x2="20" y="0" style="stroke:rgb(245, 130, 33); stroke-width:5" />
          </svg>*/}
          <p>ACCUITY</p>
        </div>
      </div>

      {/* Case Study 05 */}
      <div className="case-study-05">
        <div className="case-study-type-D-image">
          {/* Img 05 */}
          <li className="sprite" id="image-05"></li>
        </div>
        <div className="case-study-type-D-info">
          <h1>05</h1>
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
