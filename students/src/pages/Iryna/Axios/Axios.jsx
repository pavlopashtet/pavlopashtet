import { React, useEffect, useState } from "react";
import { getCharacter, getMore } from "./apiCall";
import styles from "../Iryna.module.css";

const SampleAxios = () => {
  const [data, setData] = useState();

  const getNext = () => {
    getMore(data?.info?.next);
    getCharacter().then((data) => {
      setData((prevState) => {
        return {
          info: data.data.info,
          results: [...prevState.results, ...data.data.results],
        };
      });
    });
  };

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
      {data?.info?.next !== null && (
        <button className={styles.btn} onClick={() => getNext()}>
          Get More
        </button>
      )}
    </div>
  );
};
export default SampleAxios;
