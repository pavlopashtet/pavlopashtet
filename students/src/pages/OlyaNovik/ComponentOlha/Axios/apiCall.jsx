import axios from "axios";
import { Endpoints } from "./Endpoints";

const {REACT_APP_API_BASEURL} = process.env;
const instance = axios.create({
  baseURL: REACT_APP_API_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const getCharacter = () => instance.get(Endpoints.CHARACTER);
export const getMore = (url) =>
    axios.get(url)


export const getCharacter2 = () =>{
  return axios.get(`${REACT_APP_API_BASEURL}${Endpoints.CHARACTER}`)}