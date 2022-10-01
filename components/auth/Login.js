import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import styles from './authStyles';
import authContext from '../../context/auth/authContext';

const Login = ({navigation}) => {

    const AuthContext = useContext(authContext);
    const {autherror, autenticarUsuario, desactivateAuthError} = AuthContext;

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e, name) => {
        setState({
            ...state,
            [name]: e
        });
    }

    const handleSubmit = () => {

        if(state.email.trim() === ''){
            Alert.alert('escribe tu email');
            return;
        }
        if(state.password.trim() === ''){
            Alert.alert('escribe tu contraseña');
            return;
        }

        autenticarUsuario({email: state.email, password: state.password});
    }

    React.useEffect(() => {
        if(autherror){

            setTimeout(() => {
                desactivateAuthError();
            }, 2000);
        }
    }, [autherror])

    return (
        <View style={styles.container}>
            <View style={styles.form}>

                <View style={styles.headerTitle}>
                    <Text style={styles.title}>Iniciar Sesión</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text>Correo</Text>
                    <TextInput
                        style={styles.inputs}
                        placeholder='Tu correo...'
                        keyboardType='email-address'
                        onChangeText={(e) => handleChange(e, 'email')}
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <Text>Contraseña</Text>
                    <TextInput
                        style={styles.inputs}
                        placeholder='Tu contraseña...'
                        secureTextEntry
                        onChangeText={(e) => handleChange(e, 'password')}
                    />
                </View>

                {autherror && <Text style={styles.authError}>Email o contraseña incorrecta</Text>}

                <View style={styles.buttonContainer}>
                    <Button
                        title='Iniciar Sesión'
                        color={'#2f3848'}
                        onPress={handleSubmit}
                    />
                </View>

                <View style={{marginVertical: 10, alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Sigin')}
                    >
                        <Text>Crear Cuenta</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Login;
