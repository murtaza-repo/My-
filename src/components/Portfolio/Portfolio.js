import React from 'react';
import {connect} from 'react-redux';
import PortfolioItem from './PortfolioItem';
import { openModel } from '../../store/Actions/ModelActions';
const Portfolio = ({portfolioData,detailItem,id}) => {
    const {PortfolioItems,PortfolioTitle} = portfolioData;
    // const MAX_ITEMS = 3;
    // const [isMore, setMore] = useState(false);

    // const toggleData = () =>{
    //     if(isMore){
    //         return (
                
    //         )
    //     }
    //     else{

    //         return (
    //             PortfolioItems.slice(0, MAX_ITEMS).map((Item,Index) => {
    //                 return <PortfolioItem detailItem={() => details(Item)} key={Index} imgSrc={Item.image} />
    //             })
    //         )
    //     }
    // }

    // const toggleHandler = () => {
    //     setMore((prevState) => {
    //         return !prevState;
    //     });

    //     if(isMore === true){
    //         const element = document.querySelector('#'+id);
    //         element.scrollIntoView({ block: 'start',  behavior: 'auto' });
    //     }
    // }

    const details = Item =>  {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('modal-open');
        detailItem(Item);
    }
    return (
            <section className="page-section portfolio" id={id}>
            <div className="container">
                <h2 id="pageSectionHeading" className="page-section-heading text-center text-uppercase text-secondary mb-0">{PortfolioTitle}</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    {
                        PortfolioItems.map((Item,Index) => {
                            return <PortfolioItem detailItem={() => details(Item)} key={Index} imgSrc={Item.image} />
                        })
                    }
                </div>
                {/* <div className="text-center mb-3">
                    <button className="text-decoration-none btn btn-outline-info" color="grey" onClick={toggleHandler}>
                        View {isMore ? 'Less' : 'More'} {isMore ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
                    </button>
                </div> */}
            </div>
        </section>
    )
}

const mapState = state => {
    return {

    }
}
const mapDispatch = dispatch => {
    return {
        detailItem:item => dispatch(openModel(item))
    }
}
export default connect(mapState,mapDispatch)(Portfolio);
