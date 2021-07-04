import React from 'react'

const Footer = ({footerData}) => {
    const {section2} = footerData;
    const {facebook,twitter,linkedin,github} = section2;
    return (
        <React.Fragment>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">{section2.title}</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href={facebook} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-fw fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href={twitter} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-fw fa-twitter"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href={linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-fw fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href={github} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-fw fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="scroll-to-top d-lg position-fixed ">
                <a
                    className="js-scroll-trigger d-block text-center text-white rounded"
                    href="#page-top">
                    <i className="fas fa-chevron-up"></i>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Footer;
