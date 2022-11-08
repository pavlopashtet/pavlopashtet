// @ts-ignore
import { React, useEffect } from "react";
// import { IrynaAction } from "../../../redux/action/IrynaAction";
// import { getCharacter } from "../Axios/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { getByThunk } from "../../../redux/action/IrynaActionThunk";
import { getMoreByThunk } from "../../../redux/action/IrynaActionThunk";
// @ts-ignore
import styles from "../Iryna.module.css"

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
const SampleReduxThunk = () => {
  const dispatch = useDispatch();
  const Iryna: Character[] = useSelector ((state:any)=> state.Iryna.items?.results)
  const info = useSelector ((state:any)=> state.Iryna.items?.info)
  const getCharacter = () => dispatch<any>(getByThunk())
  const getMore = (url:string) => dispatch<any>(getMoreByThunk(url))
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