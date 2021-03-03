import { useState, useEffect } from 'react';
import authAxios from '../store/axios';

const useFetch = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [requestError, setRequestError] = useState(null);

    useEffect(() => {
        try {
            authAxios.get().then((response) => {
                setData(response.data.articles)
                setIsLoading(false);
                setRequestError(null)
            })
        } catch (error) {
            setIsLoading(false);
            setRequestError(error)
        }
    }, [])

    return { data, isLoading, requestError }
}

export default useFetch;