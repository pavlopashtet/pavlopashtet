import axios from "axios"
import { Endpoints } from "../../../../api/Endpoints";
const { REACT_APP_API_BASEURL } = process.env;


const instance = axios.create({
    baseURL: REACT_APP_API_BASEURL,
    headers: {
        "Content-Type": "application/json",
    },
});
export const getData = (url = Endpoints.CHARACTER) => {
    return instance.get(url)
}

