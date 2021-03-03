import axios from 'axios';

const apiURL = 'https://newsapi.org/v2/everything?q=Apple&from=2021-03-03&sortBy=popularity';
const apiKey = '564f5d0ea42e42eb9eaf96b7910d3ade';
// const apiKey = '564f5d0ea42e42eb9eaf96b7910d3ade'; //test

const fetchAxios = axios.create(
    {
        baseURL: apiURL,
        headers: {
            Authorization: apiKey
        }
    }
)

export default fetchAxios;