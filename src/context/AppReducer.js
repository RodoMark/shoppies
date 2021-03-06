export default (state,action) => {
  switch(action.type) {
    case "ADD_NOMINATION":
      return {
        ...state, 
        nominations: [action.payload, ...state.nominations]
      }
    case "REMOVE_NOMINATION":
      return {
        ...state, 
        nominations: state.nominations.filter(movie => movie.imdbID !== action.payload)
      }
    case "CLEAR_NOMINATIONS":
      return {
        ...state, 
        nominations: []
      }
    case "SET_SPECIFIC_MOVIE":
      return {
        ...state,
        specificMovie: action.payload
      } 
    case "SHOW_INFO":
      return {
        ...state, 
        displayInfo: true,
      } 
    case "HIDE_INFO":
      return {
        ...state, 
        displayInfo: false,
      } 
    default: 
      return state;
    
  }
}