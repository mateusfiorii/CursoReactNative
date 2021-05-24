import React from 'react'
import { View, StyleSheet } from 'react-native'

const FlexboxV4 = () => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}>
            </View>
            <View style={style.V1}>
            </View>
            <View style={style.V2}>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V1: {
        backgroundColor: '#FF801A',
        flexGrow: 1
    },
    V2: {
        backgroundColor: '#DD22C1',
        flexGrow: 1
    },
    V0: {
        backgroundColor: '#36C9A7',
        height: 40
    }
})

export default FlexboxV4