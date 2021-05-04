import { parseQuery, generateID, } from './index'

const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&`

const testQuery = {
  title: '2001',
  year: '2001',
  plotLength: null
} 

const nominationList = []

test('#parseQuery: returns a string', () => {

  const result = parseQuery(testQuery);
  expect(typeof(result) === 'string').toBe(true);
});

test('#parseQuery: returns string does not contain any spaces', () => {

  const result = parseQuery(testQuery);
  expect(result.includes(' ')).toBe(false);
});

test('#parseQuery: returns query string that OMDB can process', () => {
  const expected = `${url}t=2001&y=2001`
  const result = parseQuery(testQuery);
  expect(result).toEqual(expected);
});

test('#generateID: returns a string', () => {
  const result = generateID()
  expect(typeof(result) === 'string').toBe(true);
});

