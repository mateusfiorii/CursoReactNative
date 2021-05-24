import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#AAA',
        borderWidth: 1,
        borderColor: '#888',
        textAlign: 'center'
    },
    operationButton: {
        color: '#FFF',
        backgroundColor: '#FA8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

const Button = ({ onClick, label, double, triple, operation }) => {
    const stylesButton = [style.button]

    if (double) stylesButton.push(style.buttonDouble)
    if (triple) stylesButton.push(style.buttonTriple)
    if (operation) stylesButton.push(style.operationButton)

    return (
        <TouchableHighlight onPress={() => onClick(label)}>
            <Text style={stylesButton}>
                {label}
            </Text>
        </TouchableHighlight>
    )
}

export default Button;