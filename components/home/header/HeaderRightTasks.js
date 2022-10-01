import React, { useContext } from "react";
import tasksContext from "../../../context/tasksContext/tasksContext";
import { View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


const HeaderRightTasks = () => {

    const TasksContext = useContext(tasksContext);
    const { showModal } = TasksContext;

    return (
        <View
            style={{marginRight: 10, justifyContent: 'center', alignItems: "center"}}
        >
            <TouchableOpacity
                onPress={() => showModal(true)}
            >
                <Icon name='add' size={40} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderRightTasks;
