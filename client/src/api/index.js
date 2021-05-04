import axios from 'axios'

const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

const defaultQuery = {
  title: 'Star Wars',
  year: null,
  plotLength: null
}

export const parseQuery = (query) => {
  console.log(defaultQuery.title)
  console.log(query.title)

  const queryTitle = '&t=' + query.title.split(' ').join('+')
  const queryYear = query.year ? `&y=${query.year}` : ''

  return url + queryTitle + queryYear
}

export const fetchMovies = async (query) => {
  const parsedQuery = parseQuery(query)

  try {
    const { data } = await axios.get(parsedQuery)

    console.log("DATA", data)

    return data

  } catch(error) {
    console.log(error)
  }
} 