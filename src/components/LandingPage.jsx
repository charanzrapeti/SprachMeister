// LandingPage.jsx

import './LandingPage.css'; // Import CSS file for custom styling
import vectorGraphic from '../../public/landing.jpg'; // Import JPG file

const LandingPage = () => {
    return (
        <div className="landing-page">
          <div className="main-container">
            <div className="content">
              <h1 className="title">
                <span>Sprach</span><br />
                <span>Meister</span>
              </h1>
            </div>
            <div className="graphic-container">
              <img src={vectorGraphic} alt="Vector Graphic" className="graphic" />
            </div>
          </div>
          <div className="sub-content">
            <p>Learn Deutsche Sprache interactively mit help of <span className="blue-background">künstige Intelligenz!</span></p>
          </div>
        </div>
      );
}

export default LandingPage;
