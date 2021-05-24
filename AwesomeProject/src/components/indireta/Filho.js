import React from 'react'
import { Button } from 'react-native'

const Filho = ({ min, max, funcao }) => {
    function gerarNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button
            title="Executar"
            onPress={function () {
               const n = gerarNumero(min, max);
               funcao(n);
            }}
        />
    )
}

export default Filho