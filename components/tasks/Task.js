import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import IconFeather from "react-native-vector-icons/Feather";
import tasksContext from "../../context/tasksContext/tasksContext";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const Task = ({task, proyectoactual}) => {

    const { deleteTask, editTaskModal, showModal, editTask } = useContext(tasksContext);

    const handlePressEdit = () => {

        editTaskModal(true, task);
        showModal(true);
    }

    const handlePressEditStatus = () => {

        const newTask = {...task, estado: !task.estado}

        editTask(newTask);
    }

    const confirmDelete = () => {

        Alert.alert(
            'Eliminar tarea',
            '¿Estás seguro que quieres eliminar esta tarea?',
            [
                {
                    text: 'no'
                },
                {
                    text: 'si',
                    onPress: () => deleteTask(task._id, proyectoactual._id)
                },
            ]
        )
    }

    return (
            <View 
                style={styles.container}
            >

                <Text>{task.nombre}</Text>

                <View style={styles.iconsContainer}>
                    
                    <TouchableOpacity
                        onPress={handlePressEditStatus}
                    >
                        <View style={styles.statusContainer}>
                            <IconAntDesign
                                name={`${task.estado ? 'checksquareo' : 'closesquareo'}`}
                                size={30}
                                color={`${task.estado ? 'green' : 'red'}`}
                                style={styles.icons}
                            />

                            <Text>{task.estado ? 'Completo' : 'Incompleto'}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            onPress={handlePressEdit}
                        >
                            <View style={styles.icons}>
                                <IconFeather
                                    name="edit"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={confirmDelete}
                        >
                            <View style={styles.icons}>
                                <Icon
                                    name="trash"
                                    size={30}
                                    color='#000'
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    icons: {
        padding: 5
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Task;