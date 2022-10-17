import { React, useEffect } from "react";
import { IrynaAction } from "../../../redux/action/IrynaAction";
import { getCharacter } from "../Axios/apiCall";
import { useDispatch, useSelector } from "react-redux";

const SampleRedux = () => {
  const dispatch = useDispatch();
  const Iryna = useSelector ((state)=> state.Iryna.items?.data?.results)
  
  useEffect(() => {
    getCharacter().then((data) => {     
      dispatch(IrynaAction.adding(data));
    });
  }, []);

  useEffect(() => {
    console.log(Iryna);
  }, [Iryna]);

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
      {/* <button onClick={More}>More</button> */}
    </div>
  );
};
export default SampleRedux;
