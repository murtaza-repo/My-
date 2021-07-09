import React from 'react'
import Model from './PortfolioModel';
import {connect} from 'react-redux';

const ModelManger = ({ModelName,Payload,hideDetailItem}) => {
    switch (ModelName) {
        case 'OpenModel':
            return <Model Payload={Payload} hideDetailItem={hideDetailItem}/>
        case 'CloseModel':
            return null;
        default:
            return null;
    }
}

const mapState = state => {
    return {
        ModelName:state.model.ModelName,
        Payload:state.model.ModelPayload
    }
}

const mapDispatch = dispatch => {
    return {
        hideDetailItem:() => dispatch({type:'CloseModel'})
    }
}
export default connect(mapState,mapDispatch)(ModelManger);
