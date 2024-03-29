/* eslint-disable */

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
    default:
      return state;

  }
}
