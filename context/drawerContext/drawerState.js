import React, { useReducer } from "react";
import drawerReducer from "./drawerReducer";
import drawerContext from "./drawerContext";


const drawerState = props => {

    const initialState = {
        ref: 'null'
    }

    const [state, dispatch] = useReducer(drawerReducer, initialState);

    const changeRef = ref => {
        dispatch({
            type: 'CAMBIAR_REF',
            payload: ref
        })
    }

    return (
        <drawerContext.Provider
            value={{
                ref: state.ref,
                
                changeRef
            }}
        >
            {props.children}
        </drawerContext.Provider>
    )

}

export default drawerState;
