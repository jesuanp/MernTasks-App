import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
        backgroundColor: '#2f3848',
    },
    form: {
        backgroundColor: '#fff',
        padding: 10,
        width: '90%',
        borderRadius: 10
    },
    inputs: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 7,
        borderRadius: 5,
        width: 190,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 9,
    },
    buttonContainer: {
        marginTop: 10,
    },
    headerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    title: {
        fontSize: 25,
    },
    authError: {
        color: 'red',
        textAlign: 'center'
    }
});
