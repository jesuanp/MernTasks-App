import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';
import proyectoContext from "../../context/proyectoContext/proyectoContext";
import Icon from "react-native-vector-icons/Ionicons";

const Proyecto = ({proyecto, navigation}) => {

    const ProyectoContext = useContext(proyectoContext);
    const { actualProject, deleteProject } = ProyectoContext;

    const handlePress = () => {

        actualProject(proyecto);
        navigation.navigate('Tasks');
    }

    const confirmDelete = () => {

        Alert.alert(
            'Eliminar Proyecto',
            `¿Estás seguro que quieres eliminar ${proyecto.nombre} de tus proyectos?`,
            [
                {
                    text: 'no'
                },
                {
                    text: 'si',
                    onPress: () => deleteProject(proyecto._id)
                },
            ]
        )
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
        >
            <View style={styles.container}>
                <Text>{proyecto.nombre}</Text>


                <TouchableOpacity
                    onPress={confirmDelete}
                >
                    <View style={styles.icon}>
                        <Icon
                            name="trash"
                            size={30}
                            color='#000'
                        />
                    </View>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#fff',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        padding: 5
    },
})

export default Proyecto;
