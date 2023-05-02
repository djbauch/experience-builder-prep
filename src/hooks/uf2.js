import React, { useEffect, useState } from 'react';

export const Uf = (url) => {
    const [response, setResponse] = useState(null)
        useEffect(() => {
            const myFetch = async () => {
                const res = await fetch(url);
                const ans = await res.text();
                setResponse(ans);
                alert(response);
            };
        myFetch();
    }, [url]);
    return response;

}
