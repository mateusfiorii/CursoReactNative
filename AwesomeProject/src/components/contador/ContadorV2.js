import React, { Fragment, useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

const ContadorV2 = () => {
    const [num, setNum] = useState(0);

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <Fragment>
            <Text style={Estilo.fontG}>
                ContadorV2
            </Text>
            <ContadorDisplay num={num} />
            <ContadorBotoes inc={inc} dec={dec} />
        </Fragment>
    )
}

export default ContadorV2