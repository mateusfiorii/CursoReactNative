import React, { Fragment, useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default ({ inicial, passo }) => {
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)

    return (
        <Fragment>
            <Text style={Estilo.fontG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </Fragment>
    )
}