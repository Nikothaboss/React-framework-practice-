import React from 'react'
import { useFetch } from '../util/fetch'

const url = "https://fakestoreapi.com/products"

const NikolaiTest = () => {
    const [response, loading, hasError] = useFetch(url)
    console.log(response, loading, hasError)
    return (
        <div>
            {loading ? <div>Loading...</div> : (hasError ? <div>Error occured</div> : (response.map(data => <h1>{data.title}</h1>)))}
        </div>
    )
}

export default NikolaiTest
