import React from 'react';
import ReactDOM from 'react-dom';
import * as utils from './utils';

describe('getQueryParams', () => {
  it('splits a query into a hash of pairs', () => {
    const query = '?foo=bar&baz=qux';
    const pairs = {
      foo: 'bar',
      baz: 'qux'
    };
    expect(utils.getQueryParams(query)).toEqual(pairs);
  });

  it('deals with spaces', () => {
    const query = '?foo=bar&baz=qux+quux';
    const pairs = {
      foo: 'bar',
      baz: 'qux quux'
    };
    expect(utils.getQueryParams(query)).toEqual(pairs);
  });

  it('deals with ampersands', () => {
    const query = '?foo=bar&baz=qux+quux+%26+stuff';
    const pairs = {
      foo: 'bar',
      baz: 'qux quux & stuff'
    };
    expect(utils.getQueryParams(query)).toEqual(pairs);
  });
});
