import { React, useEffect } from "react";
import { IrynaAction } from "../../../redux/action/IrynaAction";
import { getCharacter } from "../Axios/apiCall";
import { getMore } from "../Axios/apiCall";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Iryna.module.css"


const SampleRedux = () => {
  const dispatch = useDispatch();
  const Iryna = useSelector ((state)=> state.Iryna.items?.data?.results)
  const info = useSelector ((state)=> state.Iryna.items?.info)
  useEffect(() => {
    getCharacter().then((data) => {     
      dispatch(IrynaAction.adding(data));
    });
  }, []);

  useEffect((url) => {  
    getMore(url)
    .then((data) => {
        dispatch (IrynaAction.more_adding(data.data))
        dispatch(IrynaAction.error(null))
      })
      .catch((e) => {
        dispatch(IrynaAction.error(e))
      })
      .finally(() => {
        dispatch(IrynaAction.loading(false))
      });
  }, []);


  return (
    <div>
      <h1>Redux</h1>;
      {Iryna&&
        Iryna.map((item) => (
          <div key={item.id}>
            <p> {item.name} </p>
            <img src={item.image} alt="" />
          </div>
        ))}
      <button className={styles.btn} onClick={()=> getMore(info.next)}>Get More</button>
    </div>
  );
};
export default SampleRedux;
