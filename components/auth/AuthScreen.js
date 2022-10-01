import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Login from "./Login";
import Signup from "./Signup";

// Context
import authContext from "../../context/auth/authContext";

const StackAuth = createStackNavigator();


const ScreenAuth = () => {
    
    const AuthContext = React.useContext(authContext);
    const {usuarioAutenticado} = AuthContext;
    
    React.useEffect(() => {
      usuarioAutenticado();
    }, []);

    return (
        <StackAuth.Navigator>

            <StackAuth.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />

            <StackAuth.Screen
                name='Sigin'
                component={Signup}
                options={{
                    headerShown: false,
                }}
            />

        </StackAuth.Navigator>
    )
}

export default ScreenAuth;
