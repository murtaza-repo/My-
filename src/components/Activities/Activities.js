import React from 'react'
import {connect} from 'react-redux';
import ActivitiesItem from './ActivitiesItem';
import { openModel } from '../../store/Actions/ModelActions';
const Activities = ({ActivitiesData,detailItem,id}) => {
    const {ActivitiesItems,ActivitiesTitle} = ActivitiesData;
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
                    {
                        ActivitiesItems.map((Item,Index) => {
                            return <ActivitiesItem detailItem={() => details(Item)} key={Index} imgSrc={Item.image} />
                        })
                    }
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
