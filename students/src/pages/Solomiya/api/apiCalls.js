import axios from "axios";
import {Endpoints} from "./Endpoint";

const {REACT_APP_API_BASEURL} = process.env;

const instance = axios.create ({
    baseURL: REACT_APP_API_BASEURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getCharacter = () =>
   instance.get(Endpoints.CHARACTER)

export const getMoreCharacters = (url) =>
    axios.get(url)

export const postPostToPlaceholder = (data) =>
    axios.post('https://jsonplaceholder.typicode.com/posts', data)

export const loadMoreData = (url) =>
    axios.post(url)

//
export const loadInitialData = () => {
    return axios.get(`${REACT_APP_API_BASEURL}${Endpoints.CHARACTER}`)
}

export const loadMoreCharactersData = (url) =>
    axios.get(url)

// export const loadData = (url = "") => {
//     return axios.get(`${REACT_APP_API_BASEURL}${Endpoints.CHARACTER}${url}`)
// }
