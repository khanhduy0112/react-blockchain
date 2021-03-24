import React from 'react'
import { useParams } from 'react-router-dom'

function CoinDetail() {

    const { coinName } = useParams();

    return (
        <div>
            <h1>{coinName}</h1>
        </div>
    )
}

export default CoinDetail
