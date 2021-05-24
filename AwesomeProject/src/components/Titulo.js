import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({ principal, secundario }) => {
    return (
        <Fragment>
            <Text style={Estilo.fontG}>{principal}</Text>
            <Text>{secundario}</Text>
        </Fragment>
    )
}