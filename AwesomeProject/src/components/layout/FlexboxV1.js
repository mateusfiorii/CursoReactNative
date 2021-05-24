import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

const Flexbox = () => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor='#FF801A' />
            <Quadrado cor='#50D1F6' />
            <Quadrado cor='#DD22C1' />
            <Quadrado cor='#8312ED' />
            <Quadrado cor='#36C9A7' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000'
    }
})

export default Flexbox