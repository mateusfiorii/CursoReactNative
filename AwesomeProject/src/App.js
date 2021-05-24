import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import FlexboxV4 from './components/layout/FlexboxV4'

const App = () => {
    return (
        <SafeAreaView style={style.App}>
            <FlexboxV4 />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#FFF',
    }
})

export default App;