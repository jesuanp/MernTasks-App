import React, {useState, useContext} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import styles from './authStyles';
import authContext from '../../context/auth/authContext';

const Signup = ({navigation}) => {

    const AuthContext = useContext(authContext);
    const {autherror, desactivateAuthError, crearUsuario} = AuthContext;

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {name, email, password, confirmPassword} = state;

    const handleChange = (e, name) => {
        setState({
            ...state,
            [name]: e
        });
    }

    const handleSubmit = () => {

        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''){
            Alert.alert('Todos los campos son requeridos');
            return;
        }

        crearUsuario({nombre: name, email: email, password: password});
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
                    <Text style={styles.title}>Crear Una Cuenta</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text>Nombre</Text>
                    <TextInput
                        value={name}
                        style={styles.inputs}
                        placeholder='Tu nombre...'
                        onChangeText={(e) => handleChange(e, 'name')}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>Correo</Text>
                    <TextInput
                        value={email}
                        style={styles.inputs}
                        placeholder='Tu correo...'
                        keyboardType='email-address'
                        onChangeText={(e) => handleChange(e, 'email')}
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <Text>Contraseña</Text>
                    <TextInput
                        value={password}
                        style={styles.inputs}
                        placeholder='Tu contraseña...'
                        secureTextEntry
                        onChangeText={(e) => handleChange(e, 'password')}
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <Text style={{width: 75}}>Confirmar contraseña</Text>
                    <TextInput
                        value={confirmPassword}
                        style={styles.inputs}
                        placeholder='Confirmar contraseña...'
                        secureTextEntry
                        onChangeText={(e) => handleChange(e, 'confirmPassword')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title='Crear cuenta'
                        color={'#2f3848'}
                        onPress={handleSubmit}
                    />
                </View>

                <View style={{marginVertical: 10, alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    ><Text>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Signup;
