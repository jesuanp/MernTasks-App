import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, TouchableOpacity } from 'react-native';
import drawerContext from "../../../context/drawerContext/drawerContext";

const HeaderLeft = () => {

    const { ref } = React.useContext(drawerContext);

    return (

        <TouchableOpacity
            onPress={() => ref.current.openDrawer()}
        >
            <View
                style={{alignItems: 'center', justifyContent: 'center', marginLeft: 10,}}
            >
                <Icon
                    name='menu-outline'
                    color={'#fff'}
                    size={40}
                />
            </View>
        </TouchableOpacity>
    )
}

export default HeaderLeft;