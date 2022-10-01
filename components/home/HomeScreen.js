import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ProjectsAndTasks from "./ProjectsAndTasks";

// Headers
import HeaderLeft from "./header/HeaderLeft";

// import * as Network from 'expo-network';

const StackHome = createStackNavigator();

const HomeScreen = () => {

    return (
            <StackHome.Navigator
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerStyle: {
                        backgroundColor: '#2f3848',
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <HeaderLeft />
                }}
            >

                <StackHome.Screen
                    name='ProjectsAndTasks'
                    component={ProjectsAndTasks}
                    options={{
                        title: 'Mern Tasks',
                        headerShadowVisible: false,
                    }}
                />

            </StackHome.Navigator>
        
    )
}

export default HomeScreen;
