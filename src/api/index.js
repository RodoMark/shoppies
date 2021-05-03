const url = 'http://www.omdbapi.com/'

export const parseQuery = (query) => {
  const queryTitle = '?t=' + query.title.split(' ').join('+')
  const queryYear = query.year ? `&y=${query.year}` : ''
  const queryPlotLength = query.plotLength ? `&p=${query.year}` : ''

  return url + queryTitle + queryYear + queryPlotLength
}

export const fetchMovies = (query) => {

} 