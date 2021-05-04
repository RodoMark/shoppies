import { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  nominations: [],
}

export const NominationContext = createContext(initialState);

export default NominationContext = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

}