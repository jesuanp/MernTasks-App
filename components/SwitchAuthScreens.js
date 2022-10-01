import React, { useContext } from "react";
import authContext from "../context/auth/authContext";
// import { View } from "react-native";
import AuthScreen from './auth/AuthScreen';
import HomeScreen from './home/HomeScreen';

const SwitchAuthScreens = () => {

    const AuthContext = useContext(authContext);
    const {autenticado} = AuthContext;

    if(autenticado){
        return <HomeScreen/>
    }

    return <AuthScreen />
}

export default SwitchAuthScreens;
