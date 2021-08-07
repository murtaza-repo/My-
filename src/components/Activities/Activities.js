import React, {useState} from 'react'
import {connect} from 'react-redux';
import ActivitiesItem from './ActivitiesItem';
import { openModel } from '../../store/Actions/ModelActions';

const Activities = ({ActivitiesData,detailItem,id}) => {
    const {ActivitiesItems,ActivitiesTitle} = ActivitiesData;
    const MAX_ITEMS = 3;
    const [isMore, setMore] = useState(false);

    const toggleData = () =>{
        if(isMore){
            return (
                ActivitiesItems.map((Item,Index) => {
                    return <ActivitiesItem detailItem={() => details(Item)} key={Index} imgSrc={Item.image} />
                })
            )
        }
        else{

            return (
                ActivitiesItems.slice(0, MAX_ITEMS).map((Item,Index) => {
                    return <ActivitiesItem detailItem={() => details(Item)} key={Index} imgSrc={Item.image} />
                })
            )
        }
    }

    const toggleHandler = () => {
        setMore(!isMore);
    }

    const details = Item =>  {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('modal-open');
        detailItem(Item);
    }
    return (
            <section className="page-section portfolio" id={id}>
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{ActivitiesTitle}</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    {toggleData()}
                </div>
                <div className="text-center mb-3" id="viewBtn">
                    <button className="text-decoration-none btn btn-outline-info" color="grey" onClick={toggleHandler}>
                        View {isMore ? 'Less' : 'More'} {isMore ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
                    </button>
                </div>
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
export default connect(mapState,mapDispatch)(Activities);
