import React from 'react'
import { View } from 'react-native'

const Quadrado = ({ cor, lado = 40 }) => {
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: cor || '#000'
        }}>
        </View>
    )
}

export default Quadrado
