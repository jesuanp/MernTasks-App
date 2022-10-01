import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import clienteAxios from '../../config/clienteAxios';
import tokenAuth from '../../config/tokenAuth';

import {
    CREAR_USUARIO,
    AUTENTICAR_USUARIO,
    CERRAR_SESION,
    USUARIO_AUTENTICADO,
    AUTH_ERROR,
    DESACTIVATE_ERROR
} from '../../types/types';


const AuthState = props => {
    
    const initialState = {
        token: AsyncStorage.getItem('token'),
        autenticado: false,
        usuario: null,
        autherror: false,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //acciones

    const crearUsuario = async ({nombre, email, password}) => {

        try{

            const response = await clienteAxios.post('/usuarios', {
                nombre, email, password
            });

            if(response.data.token){
                tokenAuth(response.data.token);
                await AsyncStorage.setItem('token', response.data.token);
            }

            dispatch({
                type: CREAR_USUARIO,
                payload: response.data.token
            });

            usuarioAutenticado();
        }
        catch(err){
            console.log(err.response.data.msg);
            dispatch({
                type: AUTH_ERROR
            });
        }

    }

    const autenticarUsuario = async ({email, password}) => {

        try{

            const response = await clienteAxios.post('/auth', {email, password});
    
            if(response.data.token){
                tokenAuth(response.data.token);
                await AsyncStorage.setItem('token', response.data.token);
            }
    
            dispatch({
                type: AUTENTICAR_USUARIO,
                payload: response.data.token
            });

            usuarioAutenticado();
        }
        catch(err){
            console.log(err.response.data.msg);
            dispatch({
                type: AUTH_ERROR
            });
        }
    }

    const desactivateAuthError = () => {
        dispatch({
            type: DESACTIVATE_ERROR
        })
    }

    const usuarioAutenticado = async () => {

        try{

            const token = await AsyncStorage.getItem('token');

            if(token !== null){
                tokenAuth(token);
            }

            const response = await clienteAxios.get('/auth');

            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: response.data
            })

        }
        catch(err){
            console.log(err);
        }
    }

    const cerrarSesion = async () => {

        await AsyncStorage.removeItem('token');

        tokenAuth();
        
        dispatch({
            type: CERRAR_SESION
        });
    }

    return (
        <AuthContext.Provider
            value={{
                usuario: state.usuario,
                autenticado: state.autenticado,
                autherror: state.autherror,

                crearUsuario,
                autenticarUsuario,
                usuarioAutenticado,
                cerrarSesion,
                desactivateAuthError
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState
