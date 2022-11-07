//@ts-ignore
import { React, useEffect } from "react";
import { IrynaAction } from "../../../redux/action/IrynaAction";
import { getCharacter } from "../Axios/apiCall";
import { getMore } from "../Axios/apiCall";
import { useDispatch, useSelector } from "react-redux";
//@ts-ignore
import styles from "../Iryna.module.css";
export interface Character {
  id: number
  name:string
  status: string
  species:string
  type:string
  gender:string
  origin: {
      name:string
      url:string
  },
  location:{
      name:string
      url:string
  },
  image:string,
  episode: string[]
  url:string,
  created:string
}
export interface Info {
  count: number
  pages: number,
  next: string,
  prev: null | string
}

const SampleRedux = () => {
  const dispatch = useDispatch();

  const Iryna:Character[] = useSelector((state:any) => state.Iryna.items?.results);
  
  const info:Info = useSelector((state:any) => state.Iryna.items?.info);
  useEffect(() => {
    getCharacter().then((data) => {
      dispatch(IrynaAction.adding(data.data));
    });
  }, []);

  const getNext = (url:string) => {
    getMore(url)
      .then((data) => {
        console.log(data.data);
        dispatch(IrynaAction.more_adding(data.data));
        dispatch(IrynaAction.error(null));
      })
      .catch((e) => {
        dispatch(IrynaAction.error(e));
      })
      .finally(() => {
        dispatch(IrynaAction.loading(false));
      });
  };

  return (
    <div>
      <h1>Redux</h1>;
      {Iryna &&
        Iryna.map((item) => (
          <div key={item.id}>
            <p> {item.name} </p>
            <img src={item.image} alt="" />
          </div>
        ))}
      <button className={styles.btn} onClick={() => getNext(info.next)}>
        Get More
      </button>
    </div>
  );
};
export default SampleRedux;
