import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const[error, setError] = useState(null)


    useEffect( () => {

        // cleanup function
        const abortCont = new AbortController()

        fetch(url, { signal: abortCont.signal })
            .then(res => { 
            // if endpoint of localhost:8000/ is exist
            if(!res.ok) {
                throw Error('Could not fetch the data fot that resource')
                setIsLoading(false)
                setError('Could not fetch the data for that source')
            }
            
            return res.json()

            })

            .then(data => {
                
                setData(data)
                setIsLoading(false)
                setError(null) // we need to remove error message if everything works fine
            })

            .catch( (err) => {
                if(err.name === 'AbortError') { 
                    console.log('Network connection error, cannot find localhost:8000/')  
                } else {
                    setError(err.message)
                    setIsLoading(false)
                }
            })

        // cleanup function
        return () => {
            abortCont.abort()
        }

    },[url]) // if url changes so useEffect will rerun the code

    return  { data, setData, isLoading, error }
       
    
}

 
export default useFetch