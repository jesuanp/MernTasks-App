import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button, DrawerLayoutAndroid } from "react-native";
import proyectoContext from "../../context/proyectoContext/proyectoContext";
import Proyecto from "./Proyecto";
import AddProyectModal from "./AddProyectModal";

// import Drawer from "../drawer/Drawer";

const Proyectos = ({ navigation }) => {

    const ProyectoContext = useContext(proyectoContext);
    const { proyectos, getProjects } = ProyectoContext;

    useEffect(() => {
        getProjects();
    }, []);

    return (
        
        <View style={styles.container}>

            <View style={styles.headerTitle}>
                <Text style={styles.title}>Mis Proyectos</Text>
            </View>

            <FlatList
                data={proyectos}
                renderItem = {({item}) => {
                    return <Proyecto proyecto={item} navigation={navigation} />
                }}
                showsVerticalScrollIndicator={false}
            />

            <AddProyectModal />

            {/* <Button
                title="Abrir menu"
                onPress={() => drawer.current.openDrawer()}
            /> */}

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
        fontSize: 20,
        color: '#fff'
    }
})

export default Proyectos;
