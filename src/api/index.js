import axios from 'axios'

const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

const defaultQuery = {
  title: 'Star Wars',
  year: null,
  plotLength: null
}

export const parseQuery = (query) => {

  const queryTitle = '&s=' + query.title.split(' ').join('+')
  const queryYear = query.year ? `&y=${query.year}` : ''

  return url + queryTitle + queryYear
}

export const fetchMovies = async (query) => {
  const parsedQuery = parseQuery(query)
  console.log(parsedQuery)

  try {
    const { data } = await axios.get(parsedQuery)
    return data

  } catch(error) {
    console.log(error)
  }
} 


export const generateID = () => {
  return (+new Date()).toString(36).slice(-6);
}