import { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  nominations: localStorage.getItem('nominations') ? JSON.parse(localStorage.getItem('nominations')) : [],
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

  const removeNomination = (id) => {
    dispatch({type: "REMOVE_NOMINATION", payload: id})
  }

  const clearNominations = () => {
    dispatch({type: "CLEAR_NOMINATIONS"})
  }

  const data = {
    nominations: state.nominations,
    addNomination,
    removeNomination,
    clearNominations,
  }

  return <NominationContext.Provider value={data}>
    {props.children}
  </NominationContext.Provider>

}

export default NominationContextProvider