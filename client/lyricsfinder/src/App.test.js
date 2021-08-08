import { render, screen } from '@testing-library/react';
import App from './App';
// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

import {searchForSong, fetchSong} from '../tests/search/search';

const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('https://se-lyrics.herokuapp.com/lyrics', (req, res, ctx) => {
    const query = req.url.searchParams;
    const artist = query.get('artist');
    const song = query.get('song');
    // respond using a mocked JSON body
    if(!artist || !song) {
    return res(ctx.status(500));
    };
    return res(ctx.status(200), ctx.json('hey jude'));
  }),


);

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

// ...


test('renders search bar for app', () => {
  render(<App />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders lyrics when artist and song is supplied', async () => {
  const lyrics = await searchForSong({'artist':'the beatles', 'song':'let it be'});
  const lyrics2 = await fetchSong({'artist':'the beatles', 'song':'let it be'})

console.log(lyrics);
console.log(lyrics2);

expect(lyrics).toBe('hey jude');


  
  

});