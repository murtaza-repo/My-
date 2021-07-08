import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import engineerImg from '../../img/engineer.png';

const Masthead = ({mastData}) => {
    const {MastheadTitle,Labels} = mastData;
    return (
        <header className="masthead bg-primary text-white text-center" id="page-top">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5 mb-lg-3" src={engineerImg} alt=""/>
                <h1 className="masthead-heading text-uppercase mb-0">{MastheadTitle}</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="masthead-subheading font-weight-light mb-0 text-capitalize">
                    <ReactTypingEffect className="typingeffect" text={Labels} speed={50} eraseDelay={1500} eraseSpeed={50}/>
                </div>
            </div>
        </header>
    )
}

export default Masthead;
