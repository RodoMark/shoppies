import axios from 'axios'

const url = 'http://www.omdbapi.com/'

const queryData = {
  title: 'Star Wars',
  year: null,
  plotLength: null
}

export const parseQuery = (query) => {
  const queryTitle = '?t=' + query.title.split(' ').join('+')
  const queryYear = query.year ? `&y=${query.year}` : ''
  const queryPlotLength = query.plotLength ? `&p=${query.year}` : ''

  return url + queryTitle + queryYear + queryPlotLength
}

export const fetchMovies = async (query) => {
  const parsedQuery = parseQuery(queryData)

  try {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=jeepers+creepers`)

    console.log(data)
    return data

  } catch(error) {
    console.log(error)
  }
} 