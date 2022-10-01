import React, { useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import proyectoContext from "../../../context/proyectoContext/proyectoContext";
import { View, TouchableOpacity } from 'react-native';

const HeaderRightProjects = () => {

    const ProyectoContext = useContext(proyectoContext);
    const { openModal } = ProyectoContext;

    return (
        <View
            style={{
                marginRight: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: "center",
            }}
        >

            <TouchableOpacity
                onPress={() => openModal(true)}
            >
                <Icon
                    name='add'
                    size={40}
                    color="#fff"
                />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderRightProjects;
