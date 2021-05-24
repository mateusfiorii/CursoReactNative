import React, { Fragment, useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo';
import Filho from './Filho'

const Pai = () => {
    const [num, setNum] = useState(0);

    function exibirValor(numero) {
        setNum(numero);
    }

    return (
        <Fragment>
            <Text style={Estilo.fontG}>
                {num}
            </Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </Fragment>
    )
}

export default Pai