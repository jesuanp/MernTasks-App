import React from "react";
import Proyectos from "../proyectos/Proyectos";
import Tasks from "../tasks/Tasks";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { View, Text, Button, TouchableOpacity, StyleSheet, DrawerLayoutAndroid } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import authContext from '../../context/auth/authContext';
import drawerContext from "../../context/drawerContext/drawerContext";
import proyectoContext from "../../context/proyectoContext/proyectoContext";
import tasksContext from "../../context/tasksContext/tasksContext";

// Headers
import HeaderRightTasks from "./header/HeaderRightTasks";
import HeaderRightProjects from "./header/HeaderRightProjects";

// import * as Network from 'expo-network';

const StackProjectsTasks = createStackNavigator();

const ProjectsAndTasks = () => {

    const drawer = React.useRef(null);

    const { usuario, cerrarSesion } = React.useContext(authContext);
    const { changeRef } = React.useContext(drawerContext);
    const { proyectos } = React.useContext(proyectoContext);

    const [name, setName] = React.useState('')

    React.useEffect(() => {
        changeRef(drawer);
        if(usuario){
            setName(usuario.usuario.nombre);
        }
    }, [usuario]);
    
    const Menu = () => {

        return (
            <View style={styles.container}>

                <View style={styles.header}>
    
                    <View></View>
    
                    <View style={styles.nameUserView}>
                        <Icon
                            style={styles.iconUser}
                            name="user-circle-o"
                            color={'#000'}
                            size={30}
                        />
    
                        <Text style={styles.name}>{name}</Text>
                    </View>
    
                    <TouchableOpacity
                        style={styles.arrow}
                        onPress={() => drawer.current.closeDrawer()}
                    >
                        <Icon
                            name="arrow-left"
                            color={'#000'}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    
                    <View>
                        <Text style={{fontSize: 17}}>Total proyectos: {proyectos.length}</Text>
                    </View>

                    <View style={{marginTop: 10}}>
                        <Text style={{color: '#979797'}}>De momento solo está la cantidad de proyectos, pero tengo pensado agregar más cosas</Text>
                    </View>

                </View>

                <View style={styles.footer}>
                    <Button
                        title="cerrar sesión"
                        color={'red'}
                        onPress={() => cerrarSesion()}
                    />
                </View>
            </View>
        )
    }

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={'left'}
            renderNavigationView={Menu}
        >

            <StackProjectsTasks.Navigator
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerStyle: {
                        backgroundColor: '#2f3848',
                    },
                    headerTintColor: '#fff',
                }}
            >

                <StackProjectsTasks.Screen
                    name='Proyectos'
                    options={{
                        headerRight: () => <HeaderRightProjects />,
                    }}
                >
                    {props => <Proyectos {...props} />}
                </StackProjectsTasks.Screen>

                <StackProjectsTasks.Screen
                    name='Tasks'
                    options={{
                        headerRight: () => <HeaderRightTasks />,
                    }}
                >
                    {props => <Tasks {...props} />}
                </StackProjectsTasks.Screen>

            </StackProjectsTasks.Navigator>
        </DrawerLayoutAndroid>
        
    )
}

export default ProjectsAndTasks;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: '100%',
    },
    body: {
        alignSelf: 'flex-start',
        marginLeft: 30,
    },
    footer: {
        position: 'absolute',
        bottom: 20
    },
    name: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        width: '100%'
    },
    arrow: {
        marginRight: 10
    },
    iconUser: {
        justifySelf: 'flex-end'
    },
    nameUserView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30
    }
});
