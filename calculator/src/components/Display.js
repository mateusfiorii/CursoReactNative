import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#FFF'
    }
})

const Display = ({ value }) => {
    return (
        <View style={style.display}>
            <Text style={style.displayValue} numberOfLines={1}>
                {value}
            </Text>
        </View>
    )
}

export default Display;