import React from "react";
import { connect } from "react-redux";
import { openModel } from "../../store/Actions/ModelActions";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Portfolio = ({ portfolioData, detailItem, id }) => {
  const { PortfolioItems, PortfolioTitle } = portfolioData;
  const details = (Item) => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("modal-open");
    detailItem(Item);
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };


  return (
    <section className="page-section portfolio" id={id}>
      <div className="container">
        <h2
          id="pageSectionHeading"
          className="page-section-heading text-center text-uppercase text-secondary mb-0"
        >
          {PortfolioTitle}
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row" >
          <AliceCarousel
            autoPlay
            keyboardNavigation
            autoPlayInterval={3000}
            disableButtonsControls
            infinite={true}
            responsive={responsive}
          >
            {PortfolioItems.map((item, index) => (
              <div className="img-container" onClick={() => details(item)} key={index}>
                <img
                  style={{ width: "100%" }}
                  className="sliderimg image"
                  src={Object.values(item)[0]}
                  alt={`pic-${index}`}
                ></img>
                <div className="middle">
                  <div className="text"><i className="fa fa-eye"></i>&nbsp; View</div>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </section>
  );
};

const mapState = (state) => {
  return {};
};
const mapDispatch = (dispatch) => {
  return {
    detailItem: (item) => dispatch(openModel(item)),
  };
};
export default connect(mapState, mapDispatch)(Portfolio);
