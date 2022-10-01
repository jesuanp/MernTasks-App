import React, { useContext } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import proyectoContext from "../../context/proyectoContext/proyectoContext";

const AddProyectModal = () => {

    const ProyectoContext = useContext(proyectoContext);
    const { openmodal, openModal, toCreateProject } = ProyectoContext;

    const [proyecto, setProyecto] = React.useState({
        nombre: ''
    });

    const handleSubmit = () => {
        
        if(proyecto.nombre.trim() === ''){
            Alert.alert('Escribe un nombre al proyecto');
            return;
        }

        toCreateProject(proyecto);
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={openmodal}
        >
            <View style={styles.container}>

                <View style={styles.bodyModal}>
                    
                    <View style={styles.viewInput}>

                        <Text style={styles.text}>Nombre del proyecto</Text>

                        <TextInput
                            placeholder="Nombre del proyecto..."
                            autoFocus={true}
                            style={styles.textInput}
                            onChangeText={(e) => setProyecto({nombre: e})}
                        />

                    </View>

                    <View style={styles.containerButtons}>
                        <TouchableOpacity
                            onPress={() => openModal(false)}
                            style={styles.buttonClose}
                        >
                            <Text>Cerrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.buttonAdd}
                        >
                            <Text>Agregar</Text>
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
        alignItems: 'center',
    },
    bodyModal: {
        backgroundColor: '#fff',
        width: '90%',
        height: 'auto',
        borderRadius: 5,
        padding: 20
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#1a202d',
        paddingHorizontal: 4,
        fontSize: 15
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

export default AddProyectModal;
