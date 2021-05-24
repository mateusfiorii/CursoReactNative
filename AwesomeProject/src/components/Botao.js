import React, { Fragment } from 'react'
import { Button } from 'react-native'

export default () => {

    function executar() {
        console.warn('Exec #01!!!')
    }

    return (
        <Fragment>
            <Button
                title="Executar #01"
                onPress={executar}
            />
            <Button
                title="Executar #02"
                onPress={() => console.warn('Exec #02!!!')}
            />
        </Fragment>

    )
}