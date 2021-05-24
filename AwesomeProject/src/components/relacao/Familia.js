import React, { Fragment } from 'react'
import { Text } from 'react-native'

import Membro from './Membro'

const Pai = ({ children }) => {
    return (
        <Fragment>
            <Text>Membros da Familia!</Text>
            {children}
        </Fragment>
    )
}

export default Pai