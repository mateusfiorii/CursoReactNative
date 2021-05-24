import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

const ParImpar = ({ num = 0 }) => {
    return (
        <View>
            <Text style={Estilo.fontG}>O resultado é:</Text>
            <Text style={Estilo.fontG}> {num % 2 === 0 ? "Par" : "Ímpar"} </Text>
        </View>
    )
}

export default ParImpar