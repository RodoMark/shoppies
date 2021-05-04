export default (state,action) => {
  switch(action.type) {
    case "ADD_NOMINATION":
      return {
        ...state, 
        nominations: [action.payload, ...state.nominations]
      }
    default: 
      return state;
    
  }
}