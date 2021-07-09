const intState = {
    ModelName:null,
    ModelPayload:null
}

export const ModelReducer = (state = intState,action) => {
    switch(action.type){
        case 'OpenModel':
            return {...state,ModelName:'OpenModel',ModelPayload:action.payload}
        default:
            return {...state,ModelName:null}
    }
}