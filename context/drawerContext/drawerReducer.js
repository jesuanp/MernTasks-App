
export default (state = initialState, action) => {
    switch(action.type){

        case 'CAMBIAR_REF': return {
            ...state,
            ref: action.payload
        }

        default: return state;
    }
}