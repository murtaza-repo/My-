import React from "react";
import profile from '../../img/profile.jpg';
import ReactTypingEffect from "react-typing-effect";
// import ParticlesBg from "particles-bg";

const Masthead = ({ mastData }) => {
  const { MastheadTitle, Labels } = mastData;
  return (
    <header
      className="masthead bg-primary text-white text-center"
      id="page-top"
    >
      <div className="container align-items-center flex-column">
        <div className="row">
          <div className="col-md-6 mb-3 text-center">
              <div className="profileImageDiv">
                  <img src={profile} className="profileImage" alt="img" />
              </div>
            {/* <ReactRoundedImage image={profile} imageWidth="200" imageHeight="200" roundedColor="white" roundedSize="10"/> */}
          </div>
          <div className="col-md-6 mt-5">
            <div className="masthead-subheading font-weight-light mb-0 text-capitalize">
              <h1>{MastheadTitle}</h1>
            </div>
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="masthead-subheading font-weight-light mb-0 typingEffect">
              <ReactTypingEffect
                className="typingeffect"
                text={Labels}
                speed={50}
                eraseDelay={1500}
                eraseSpeed={50}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <ParticlesBg type="cobweb" bg={true}/> */}
    </header>
  );
};

export default Masthead;
