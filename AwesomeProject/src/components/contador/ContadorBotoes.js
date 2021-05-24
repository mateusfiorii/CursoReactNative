import React, { Fragment } from 'react'
import { Button, View, StyleSheet } from 'react-native'

const ContadorBotoes = ({ inc, dec }) => {
    return (
        <View style={style.Botoes}>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row'
    }
})

export default ContadorBotoes