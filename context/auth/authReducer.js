import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    CREAR_USUARIO,
    AUTENTICAR_USUARIO,
    CERRAR_SESION,
    USUARIO_AUTENTICADO,
    AUTH_ERROR,
    DESACTIVATE_ERROR
} from '../../types/types';

export default (state = initialState, action) => {
    switch(action.type){

        case CREAR_USUARIO:
        case AUTENTICAR_USUARIO:
        return {
            ...state,
            token: action.payload,
            autenticado: true
        }

        case USUARIO_AUTENTICADO: return {
            ...state,
            usuario: action.payload,
            autenticado: true
        }

        case CERRAR_SESION: return {
            ...state,
            autenticado: false,
            token: null,
            usuario: null
        }

        case AUTH_ERROR: return {
            ...state,
            autherror: true
        }

        case DESACTIVATE_ERROR: return {
            ...state,
            autherror: false
        }
        
        default: return state
    }
}
