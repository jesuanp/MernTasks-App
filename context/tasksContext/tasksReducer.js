import {
    OBTENER_TAREAS,
    SHOW_MODAL,
    AGREGAR_TAREA,
    EDITAR_TAREA_MODAL,
    EDITAR_TAREA,
    LIMPIAR_LISTADO_DE_TAREAS
} from '../../types/types';

export default (state = initialState, action) => {
    switch(action.type){

        case OBTENER_TAREAS: return {
            ...state,
            tasks: action.payload
        }

        case SHOW_MODAL: return {
            ...state,
            activemodal: action.payload
        }

        case AGREGAR_TAREA: return {
            ...state,
            activemodal: false
        }

        case EDITAR_TAREA_MODAL: return {
            ...state,
            edittask: action.payload.boolean,
            currenttask: action.payload.task ? action.payload.task : {}
        }

        case EDITAR_TAREA: return {
            ...state,
            activemodal: false,
            edittask: false,
            currenttask: {}
        }

        case LIMPIAR_LISTADO_DE_TAREAS: return {
            ...state,
            tasks: []
        }

        default: return state;
    }
}