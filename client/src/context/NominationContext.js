import { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  nominations: [],
}

export const NominationContext = createContext(initialState);

const NominationContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('nominations', JSON.stringify(state.nominations))
  }, [state])

  // actions
  const addNomination = (movie) => {
    dispatch({type: "ADD_NOMINATION", payload: movie})
  }

  const removeNomination = (movie) => {
    dispatch({type: "REMOVE_NOMINATION", payload: movie})
  }

  const data = {
    nominations: state.nominations,
    addNomination,
  }

  return <NominationContext.Provider value={data}>
    {props.children}
  </NominationContext.Provider>

}

export default NominationContextProvider