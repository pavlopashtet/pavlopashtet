import axios from "axios";
import { Endpoints } from "./Endpoints";

const { REACT_APP_API_BASEURL } = process.env;

export const getCharacter = () =>
    axios.get(`${REACT_APP_API_BASEURL}${Endpoints.CHARACTER}`)

// export const deleteCharacter = (id) =>
//     axios.delete(`${REACT_APP_API_BASEURL}${Endpoints.CHARACTER}/delete?id=${id}`)