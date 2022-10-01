import React, { useContext, useState } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import tasksContext from "../../context/tasksContext/tasksContext";
import proyectoContext from "../../context/proyectoContext/proyectoContext";

const AddTaskModal = () => {

    const TasksContext = useContext(tasksContext);
    const { currenttask, activemodal, edittask, showModal, addTask, editTaskModal, editTask } = TasksContext;

    const { proyectoactual } = useContext(proyectoContext);

    const [task, setTask] = useState({
        nombre: currenttask?.nombre
    });

    React.useEffect(() => {
        if(currenttask){
            
            setTask({nombre: currenttask?.nombre})
        }
    }, [currenttask]);

    const handleSubmit = () => {

        if(task.nombre.trim() === ''){
            Alert.alert('Escribe una tarea');
            return;
        }

        task.proyecto = proyectoactual._id;

        if(edittask){

            let newTask = {...currenttask, nombre: task.nombre};
            editTask(newTask);
        }
        else {

            addTask(task, proyectoactual._id);
        }

        setTask({
            nombre: ''
        })
    }

    return (
        <Modal
            animationType='fade'
            visible={activemodal}
            transparent={true}
        >
            <View style={styles.container}>
                <View  style={styles.bodyModal}>
                    
                    <View style={styles.viewInput}>

                        <Text style={styles.text}>{edittask ? 'Editar tarea' : 'Nombre de la tarea'}</Text>

                        <TextInput
                            multiline
                            numberOfLines={3}
                            placeholder="Nombre de la tarea..."
                            autoFocus={true}
                            value={task.nombre}
                            style={styles.textInput}
                            onChangeText={e => setTask({nombre: e})}
                        />

                    </View>

                    <View style={styles.containerButtons}>
                        <TouchableOpacity
                            onPress={() => {showModal(false); editTaskModal(false)}}
                            style={styles.buttonClose}
                        >
                            <Text>Cerrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.buttonAdd}
                        >
                            <Text>{edittask ? 'Editar' : 'Agregar'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyModal: {
        width: '90%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#1a202d',
        paddingHorizontal: 4,
        fontSize: 15,
        
    },
    viewInput: {
        marginBottom: 15
    },
    text: {
        textAlign: 'center'
    },
    buttonClose: {
        padding: 8,
        borderRadius: 5,
        backgroundColor: 'grey',
        marginRigth: 8
    },
    buttonAdd: {
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#5BB318',
        marginLeft: 8
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default AddTaskModal;
