"use strict";

var _index = require("./index");

var url = "http://www.omdbapi.com/?apikey=".concat(process.env.REACT_APP_OMDB_API_KEY, "&");
var testQuery = {
  title: '2001',
  year: '2001',
  plotLength: null
};
var nominationList = [testQuery1, testQuery2];
test('returns a string', function () {
  var result = (0, _index.parseQuery)(testQuery);
  expect(typeof result === 'string').toBe(true);
});
test('returns string does not contain any spaces', function () {
  var result = (0, _index.parseQuery)(testQuery);
  expect(result.includes(' ')).toBe(false);
});
test('returns query string that OMDB can process', function () {
  var expected = "".concat(url, "t=2001&y=2001");
  var result = (0, _index.parseQuery)(testQuery);
  expect(result).toEqual(expected);
});