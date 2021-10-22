export const fetchData = async (url, request) =>{
    const response = await fetch(url, request)
    return await response.json()
}



