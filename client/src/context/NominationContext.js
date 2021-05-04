import { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  nominations: [],
}

export const NominationContext = createContext(initialState);

export default NominationContext = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const data = {
    nominations: state.nominations,
  }

  // actions
  const addNomination = (movie) => {
    dispatch({type: "ADD_NOMINATION", payload: movie})
  }

   
  
  return <NominationContext.Provider value={data}>
    {props.children}
  </NominationContext.Provider>

}