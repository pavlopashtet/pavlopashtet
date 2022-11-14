import { React, useEffect } from "react";
import { getCharacter } from "../Axios/apiCall";
import { getMore } from "../Axios/apiCall";
import { useDispatch, useSelector } from "react-redux";
import {OlhaAction} from "../../../../redux/action/OlhaAction/OlhaAction"
import s from "../OlhaNovik.module.css"

const ReduxComp = () =>{
    const dispatch = useDispatch();
    const ResultData = useSelector((state) => state.Olha.items?.results);
    const info = useSelector((state) => state.Olha.items?.info);
    useEffect(() => {
      getCharacter().then((data) => {
        dispatch(OlhaAction.adding(data.data));
      });
    }, []);
  
    const getNext = (url) => {
      getMore(url)
        .then((data) => {
          console.log(data.data);
          dispatch(OlhaAction.more_adding(data.data));
          dispatch(OlhaAction.error(null));
        })
        .catch((e) => {
          dispatch(OlhaAction.error(e));
        })
        .finally(() => {
          dispatch(OlhaAction.loading(false));
        });
    };
  
    return (
      <div>
        <h1>Redux</h1>;
        {ResultData &&
          ResultData.map((item) => (
            <div key={item.id}>
              <p> {item.name} </p>
              <img src={item.image} alt="" />
            </div>
          ))}
        <button className={s.btn} onClick={() => getNext(info.next)}>
          Get More
        </button>
      </div>
    );
  };
export default ReduxComp