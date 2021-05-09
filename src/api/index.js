import axios from 'axios'

const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

const defaultQuery = {
  title: 'Star Wars',
  year: null,
  plotLength: null
}

export const parseQuery = (query, multiple) => {
  const search = multiple ? ('&s=' + query.title.split(' ').join('+')) : ('&i=' + query)  
  const mediaType = multiple ? '&type=Movie' : ''
  const queryYear = query.year ? `&y=${query.year}` : ''

  return url + search + queryYear + mediaType
}

export const fetchMovies = async (query) => {
  const parsedQuery = parseQuery(query, true)

  try {
    const { data } = await axios.get(parsedQuery)
    return data

  } catch(error) {
    console.log(error)
  }
} 

export const fetchSpecificMovie = async (id) => {
  const parsedQuery = parseQuery(id, false)

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