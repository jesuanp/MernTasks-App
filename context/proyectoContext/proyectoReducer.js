import {
    OBTENER_PROYECTOS,
    ABRIR_MODAL,
    CREAR_PROYECTO,
    PROYECTO_ACTUAL
} from '../../types/types';

export default (state = initialState, action) => {
    switch(action.type){

        case OBTENER_PROYECTOS: return {
            ...state,
            proyectos: action.payload
        }

        case ABRIR_MODAL: return {
            ...state,
            openmodal: action.payload
        }

        case CREAR_PROYECTO: return {
            ...state,
            openmodal: false
        }

        case PROYECTO_ACTUAL: return {
            ...state,
            proyectoactual: action.payload
        }

        default: return state;
    }
}