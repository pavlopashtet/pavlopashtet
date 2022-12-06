import axios from "axios"
import {Endpoints} from "./Endpoints"

const {REACT_APP_API_BASEURL} = process.env;
// const instance = axios.create({
//     baseURL: REACT_APP_API_BASEURL,
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//
// export const getCharacter = () =>
//     instance.get(Endpoints.CHARACTER)

export const loadData = (url = `${REACT_APP_API_BASEURL}${Endpoints.CHARACTER}`) => {
    return axios.get(url)
}

