import axios from 'axios'

const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

const defaultQuery = {
  title: 'Star Wars',
  year: null,
  plotLength: null
}

export const parseQuery = (query, multiple=true) => {
  const search = multiple ? '&s=' : '&t='  

  const queryTitle = search + query.title.split(' ').join('+')
  const queryYear = query.year ? `&y=${query.year}` : ''
  const mediaType = '&type=Movie'

  return url + queryTitle + queryYear + mediaType
}

export const fetchMovies = async (query, multiple=true) => {
  const parsedQuery = parseQuery(query, multiple)
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