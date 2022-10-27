import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from './reduxStyle.module.sass';
import {stepGetCharactersOnInit, stepGetMoreCharacters} from "../../../../redux/action/StepanActions";
const ReduxSr = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.Stepan.characters);
  const isLoading = useSelector(state => state.Stepan.loading);
  const info = useSelector(state => state.Stepan.info);
  const _stepGetCharactersOnInitThunk = () => dispatch(stepGetCharactersOnInit())
  const _stepGetMoreCharactersThunk = (someInfo) => dispatch(stepGetMoreCharacters(someInfo))
  useEffect(() =>{
    _stepGetCharactersOnInitThunk()
  }, []);
  const getMore = () => {
    _stepGetMoreCharactersThunk(info.next)
  }
  return (
    <div>
      <div className={s.charactersContainer}>
        {isLoading ?
        <h1>Data is Loading... </h1>
          :
          characters.length > 0 && characters.map(item => (
            <div key={item.id} className={s.charactersItem}>
              <img src={item.image} alt=""/>
              <p>{item.name}</p>
            </div>
          ))
        }
      </div>
      {info?.next && (
        <div>
          <button onClick={getMore}>Add more</button>
        </div>
      )}

    </div>
  );
};

export default ReduxSr;