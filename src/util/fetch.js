import { useState, useEffect } from "react"

export const useFetch = (url, request) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(async ()=>{
        setLoading(true)
        
        try{
            const res = await fetch(url, request)
            const data = await res.json()
            console.log(data)

            setResponse(data)
            setLoading(false)
        }
        catch{
            setHasError(true)
            setLoading(false)
        }
        
    }, [ url ])

    return [response, loading, hasError]
}





