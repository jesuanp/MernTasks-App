import React from "react";
import { Text, StyleSheet } from 'react-native';

const StyledText = props => {

    return <Text style={styleText}>{props.children}</Text>
}

const styleText = StyleSheet.create({
    color: '#fff'
})

export default StyledText;
