
const {searchForSong, fetchSong} = require('./search');



const lyricsPromise = searchForSong({'artist':'the beatles', 'song':'let it be'})
.then(data => {
    return { message: 'Request received!', data }
  }).catch(err => console.error(err));

const lyricsPromise2 = fetchSong({'artist':'the beatles', 'song':'let it be'})

// lyricsPromise2.then(lyrics => lyrics)


//lyricsPromise2.then(lyrics => {console.log(lyrics)})



console.log(lyricsPromise);
console.log(lyricsPromise2);

async function test() {
    try {
        const lyrics = await lyricsPromise;
        return lyrics;
    }
    catch (err) {
        console.error(err);
    }
}

const da = test();
console.log(da);