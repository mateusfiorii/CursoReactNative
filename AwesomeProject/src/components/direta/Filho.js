import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

const Filho = ({ a, b }) => {
    return (
        <Fragment>
            <Text style={Estilo.fontG}>{a}</Text>
            <Text style={Estilo.fontG}>{b}</Text>
        </Fragment>
    )
}

export default Filho