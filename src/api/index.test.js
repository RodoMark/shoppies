import { parseQuery } from './index'

const url = 'http://www.omdbapi.com/'

const testQuery = {
  title: '2001',
  year: '2001',
  plotLength: null
} 

test('returns a string', () => {

  const result = parseQuery(testQuery);
  expect(typeof(result) === 'string').toBe(true);
});

test('returns string does not contain any spaces', () => {

  const result = parseQuery(testQuery);
  expect(result.includes(' ')).toBe(false);
});

test('returns query string that OMDB can process', () => {
  const expected = "http://www.omdbapi.com/?t=2001&y=2001"
  const result = parseQuery(testQuery);
  expect(result).toEqual(expected);
});


