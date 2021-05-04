import { createContext, useState } from 'react';

export const NominationContext = createContext();

const NominationContextProvider = (props) => {
  const [nominations, setNominations] = useState([])

  const data = {
    stateNominations: [nominations, setNominations],
  }

  return (
    <NominationContext.Provider value={data}>
      {props.children}
    </NominationContext.Provider>
  )
}

export default NominationContext