import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// context
import AuthState from './context/auth/authState';
import ProyectoState from './context/proyectoContext/proyectoState';
import TasksState from './context/tasksContext/tasksState';
import DrawerState from './context/drawerContext/drawerState';

//importo los componentes:
import SwitchAuthScreens from './components/SwitchAuthScreens';

export default function App() {

  return (

    <AuthState>
      <ProyectoState>
        <TasksState>
          <DrawerState>

            <NavigationContainer>

              <StatusBar />

              <SwitchAuthScreens />
              
            </NavigationContainer>
          
          </DrawerState>
        </TasksState>
      </ProyectoState>
    </AuthState>
  );
}
