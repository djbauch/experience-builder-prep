import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    useEffect(() => {
        const myFetch = async () =>{
        setLoading(true);
        const res = await fetch(url)
            .catch(() => {
                setHasError(true)
                setLoading(false)
            });
        const ans = await res.json();
        setLoading(false)
        setResponse(ans)
        }
        myFetch();

    }, [ url  ])
    return { response, loading, hasError }
}
