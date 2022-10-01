import tasksReducer from "./tasksReducer";
import tasksContext from './tasksContext';
import { useReducer } from "react";
import clienteAxios from "../../config/clienteAxios";

import {
    OBTENER_TAREAS,
    SHOW_MODAL,
    AGREGAR_TAREA,
    EDITAR_TAREA_MODAL,
    EDITAR_TAREA,
    LIMPIAR_LISTADO_DE_TAREAS,
} from '../../types/types';

const tasksState = props => {

    const initialState = {
        tasks: [],
        currenttask: {},
        activemodal: false,
        edittask: false,
    }

    const [state, dispatch] = useReducer(tasksReducer, initialState);

    const getTasks = async (proyecto, clearTasks = true) => {

        try{

            if(clearTasks){

                dispatch({
                    type: LIMPIAR_LISTADO_DE_TAREAS
                })
            }

            const response = await clienteAxios.get(`/tareas?proyecto=${proyecto}`);
    
            dispatch({
                type: OBTENER_TAREAS,
                payload: response.data
            })
        }
        catch(err){
            console.log(err);
        }
    }

    const showModal = (boolean) => {

        dispatch({
            type: SHOW_MODAL,
            payload: boolean
        })
    }

    const addTask = async (newTask, proyectoId) => {

        try{

            await clienteAxios.post('/tareas', newTask);
    
            dispatch({
                type: AGREGAR_TAREA,
            });
    
            getTasks(proyectoId);
        }
        catch(err){
            console.log(err.response.data.msg);
        }

    }

    const deleteTask = async (taskId, projectId) => {

        try{

            await clienteAxios.delete(`/tareas/${taskId}?proyecto=${projectId}`);

            getTasks(projectId);
        }
        catch(err){
            console.log(err.response.data.msg);
        }
    }

    const editTaskModal = (boolean, task) => {

        dispatch({
            type: EDITAR_TAREA_MODAL,
            payload: {boolean, task}
        })
    }

    const editTask = async (task) => {

        try{

            await clienteAxios.put(`tareas/${task._id}`, task);
    
            dispatch({
                type: EDITAR_TAREA,
            });

            getTasks(task.proyecto, false);
        }
        catch(err){
            console.log(err.response.data.msg);
        }

    }

    // const clearTasks = () => {
    //     dispatch({
    //         type: LIMPIAR_LISTADO_DE_TAREAS
    //     })
    // }

    return (
        <tasksContext.Provider
            value={{
                tasks: state.tasks,
                activemodal: state.activemodal,
                edittask: state.edittask,
                currenttask: state.currenttask,

                getTasks,
                showModal,
                addTask,
                deleteTask,
                editTaskModal,
                editTask,
            }}
        >
            {props.children}
        </tasksContext.Provider>
    )

}

export default tasksState;
