import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./axios.module.css";

const infoPages = "https://rickandmortyapi.com/api/character";

const Axios = () => {

    const [data, setData] = useState([]);
    const [next, setNext] = useState();

    useEffect(() => {
        axios.get(infoPages).then((response) => {
            setData(response.data.results);
            setNext(response.data.info.next);
        });
    }, []);

    const LoadNext = () => {
        axios.get(next).then((response) => {
            setData([...data, ...response.data.results]);
            setNext(response.data.info.next);           
        });
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <table style={{width: "100%"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th style={{textAlign:"left"}}>AVATAR</th>
                            <th style={{textAlign:"left"}}>NAME</th>
                            <th style={{textAlign:"left"}}>SPECIES</th>
                            <th style={{textAlign:"left"}}>STATUS</th>
                        </tr>               
                    </thead>
                    <tbody>
                        {data.map((element, index) => {
                            return (
                                <tr key={element.id}>
                                    <td style={{textAlign:"center"}}>{index + 1}</td>
                                    <td>
                                        <img className={styles.avatar} src={element.image} alt=""></img>
                                    </td>
                                    <td>{element.name}</td>
                                    <td>{element.species}</td>
                                    <td>{element.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div style={{display:"flex", justifyContent:"flex-end", marginTop:"40px"}}>
                <button onClick={LoadNext}>LOAD NEXT 20 CHARACTERS</button>
            </div>       
        </div>          
    )
};

export default Axios;