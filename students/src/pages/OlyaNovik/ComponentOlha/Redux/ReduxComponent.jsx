import { React, useEffect } from "react";
import { getCharacter2 } from "../Axios/apiCall";
import { getMore } from "../Axios/apiCall";
import { useDispatch, useSelector } from "react-redux";
import {OlhaAction} from "../../../../redux/action/OlhaAction/OlhaAction"
import s from "../OlhaNovik.module.css"

const ReduxComp = () =>{
    const dispatch = useDispatch();
    const ResultData = useSelector((state) => state.characters?.items?.results);
    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
      .then((data) => dispatch(OlhaAction.Set_adding(data.data)));
        // console.log(data.data);
    }, []);
  
    // const getNext = (url) => {
    //   getMore(url)
    //     .then((data) => {
    //       console.log(data.data);
    //       dispatch(OlhaAction.more_add(data.data));
    //       dispatch(OlhaAction.error(null));
    //     })
    //     .catch((e) => {
    //       dispatch(OlhaAction.error(e));
    //     })
    //     .finally(() => {
    //       dispatch(OlhaAction.loading(false));
    //     });
    // };
  
    return (
      <div>
        <p>redux</p>
        <h1>Redux</h1>;
        {ResultData &&
          ResultData.map((item) => (
            <div key={item.id}>
              <p> {item.name} </p>
              <img src={item.image} alt="" />
            </div>
          ))}
        {/* <button className={s.btn} onClick={() => getNext(info?.next)}>
          Get More
        </button> */}
      </div>
    );
  };
export default ReduxComp