import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../estilo'

const ContadorDisplay = ({ num }) => {

    return (
        <View style={style.Display}>
            <Text style={[Estilo.fontG, style.DisplayText]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#FFF'
    }
})

export default ContadorDisplay