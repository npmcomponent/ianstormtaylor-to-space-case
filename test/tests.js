describe('to-space-case', function () {

var assert = require('assert');
var space = require('to-space-case');

it('space case', function () {
  assert('space case' == space('space case'));
});

it('camelCase', function () {
  assert('camel case' == space('camelCase'));
});

it('snake_case', function () {
  assert('snake case' == space('snake_case'));
});

it('dot.case', function () {
  assert('dot case' == space('dot.case'));
});

it('weird[case', function () {
  assert('weird case' == space('weird[case'));
});

});