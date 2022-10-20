import { React, useEffect } from "react";
// import { IrynaAction } from "../../../redux/action/IrynaAction";
// import { getCharacter } from "../Axios/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { getByThunk } from "../../../redux/action/IrynaActionThunk";
import { getMoreByThunk } from "../../../redux/action/IrynaActionThunk";
import styles from "../Iryna.module.css"


const SampleReduxThunk = () => {
  const dispatch = useDispatch();
  const Iryna = useSelector ((state)=> state.Iryna.items?.results)
  const info = useSelector ((state)=> state.Iryna.items?.info)
  const getCharacter = () => dispatch(getByThunk())
  const getMore = (url) => dispatch(getMoreByThunk(url))
  useEffect(() => {
   getCharacter();
  }, []);

  useEffect(() => {
    console.log(Iryna);
  }, [Iryna]);

  return (
    <div>
      <h1>Redux_Thunk</h1>;
      {Iryna && Iryna?.map((item) => (
          <div key={item.id}>
            <p> {item.name} </p>
            <img src={item.image} alt="" />
          </div>
        ))}      
      <button className={styles.btn} onClick={()=> getMore(info.next)}>Get More</button>
    </div>
  );
};
export default SampleReduxThunk;