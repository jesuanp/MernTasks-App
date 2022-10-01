import React, { useReducer } from "react";
import proyectoReducer from "./proyectoReducer";
import proyectoContext from "./proyectoContext";
import clienteAxios from "../../config/clienteAxios";

import {
    OBTENER_PROYECTOS,
    ABRIR_MODAL,
    CREAR_PROYECTO,
    PROYECTO_ACTUAL
} from '../../types/types';

const proyectoState = props => {

    const initialState = {
        proyectos: [],
        openmodal: false,
        proyectoactual: null
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const openModal = (boolean) => {

        dispatch({
            type: ABRIR_MODAL,
            payload: boolean
        })
    }

    const getProjects = async () => {

        const response = await clienteAxios.get('/proyectos');

        dispatch({
            type: OBTENER_PROYECTOS,
            payload: response.data
        })
    }

    const toCreateProject = async (proyecto) => {

        try{

            await clienteAxios.post('/proyectos', proyecto);
    
            dispatch({
                type: CREAR_PROYECTO
            })
    
            getProjects()
        }
        catch(err){
            console.log(err);
        }
    }

    const actualProject = proyecto => {

        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyecto
        })
    }

    const deleteProject = async (projectId) => {

        await clienteAxios.delete(`/proyectos/${projectId}`);

        getProjects();
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                openmodal: state.openmodal,
                proyectoactual: state.proyectoactual,

                openModal,
                getProjects,
                toCreateProject,
                actualProject,
                deleteProject
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default proyectoState;
