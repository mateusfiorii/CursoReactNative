import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

const Membro = ({ nome, sobrenome }) => {
    return (
        <Text style={Estilo.fontG}>
            {nome} {sobrenome}
        </Text>
    )
}

export default Membro