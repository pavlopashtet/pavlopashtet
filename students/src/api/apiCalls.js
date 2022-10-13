import axios from "axios";
import { Endpoints } from "./Endpoints";

const { REACT_APP_API_BASEURL } = process.env;

const instance = axios.create({
    baseURL: REACT_APP_API_BASEURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// const tokenInstance = (token = "", contentType = "application/json") =>
//     axios.create({
//         baseURL: REACT_APP_API_BASEURL,
//         headers: {
//             "Content-Type": contentType,
//             Authorization: `Bearer ${token}`,
//         },
//     });

export const getCharacter = () =>
    instance.get(Endpoints.CHARACTER)

export const getMoreCharacters = (url) =>
    axios.get(url)

export const postPostToPlaceholder = (data) =>
    axios.post('https://jsonplaceholder.typicode.com/posts', data)

export const loadMoreData = (url) =>
    axios.post(url)