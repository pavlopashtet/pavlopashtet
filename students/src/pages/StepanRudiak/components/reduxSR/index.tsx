import React, {useEffect} from 'react';
//@ts-ignore
import s from './reduxStyle.module.sass';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useStepActions} from "../../hooks/useStepActions";

const ReduxSr = () => {
  const {info, characters, loading} = useTypedSelector(state => state.Stepan)
  const {StepAddCharactersOnInit, StepGetMoreCharacters} = useStepActions()

  useEffect(() =>{
    StepAddCharactersOnInit()
  }, []);
  const getMore = () => {
    StepGetMoreCharacters(info?.next)
  }
  return (
    <div>
      <div className={s.charactersContainer}>
        {loading ?
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