import { React, useEffect, useState } from "react";
import { getCharacter } from "./apiCall";


const SampleAxios = () => {
  const [data, setData] = useState();
  // const a = "https://rickandmortyapi.com/api/character/?page=2";
  // const More = (b) => {
  //   b = "a";
  // };

  useEffect(() => {
    getCharacter().then((data) => {
      setData(data.data);     
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>AXIOS</h1>;
      {data &&
        data.results.map((item) => (
          <div key={item.id}>
            <p> {item.name} </p>
            <img src={item.image} alt="" />
          </div>
        ))}
      {/* <button onClick={More}>More</button> */}
    </div>
  );
};
export default SampleAxios;
