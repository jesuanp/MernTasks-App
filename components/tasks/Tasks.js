import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import proyectoContext from "../../context/proyectoContext/proyectoContext";
import tasksContext from "../../context/tasksContext/tasksContext";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";

const Tasks = ({navigation}) => {

    const ProyectoContext = useContext(proyectoContext);
    const { proyectoactual } = ProyectoContext;

    
    const TasksContext = useContext(tasksContext);
    const { tasks, getTasks } = TasksContext;
    
    React.useEffect(() => {
        if(proyectoactual) {
            navigation.setOptions({
                title: proyectoactual.nombre
            })
            
            getTasks(proyectoactual._id);
        }
    }, [proyectoactual])

    return (
        <View style={styles.container}>
            
            <View style={styles.headerTitle}>
                <Text style={styles.title}>Tareas</Text>
            </View>

            <FlatList
                data={tasks}
                renderItem={({item}) => 
                    <Task task={item} proyectoactual={proyectoactual} />
                }
                showsVerticalScrollIndicator={false}
            />

            <AddTaskModal />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a202d'
    },
    headerTitle: {
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Tasks;
