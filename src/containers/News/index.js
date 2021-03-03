import React from 'react'
import useFetch from '../../hooks/useFetch';

//components
import Loader from '../../components/Loader'
import NewsList from './newsList';
import { Alert } from 'reactstrap';

function News() {

    const { data: news, isLoading, requestError } = useFetch();

    return (
        <div className="my-4">
            { isLoading && <Loader />}
            {requestError && <Alert color="danger">{requestError}</Alert>}
            {news && <NewsList data={news} />}
        </div>
    )
}

export default News