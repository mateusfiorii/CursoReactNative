import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

const FlexboxvV2 = () => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#FF801A' />
            <Quadrado cor='#50D1F6' />
            <Quadrado cor='#DD22C1' />
            <Quadrado cor='#8312ED' />
            <Quadrado cor='#36C9A7' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: '#000'
    }
})

export default FlexboxvV2