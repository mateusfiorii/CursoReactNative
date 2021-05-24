import React, { Fragment } from 'react'
import Filho from './Filho'

const Pai = () => {
    let x = 13
    let y = 100

    return (
        <Fragment>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 200} />
        </Fragment>
    )
}

export default Pai