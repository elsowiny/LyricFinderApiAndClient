
const {searchForSong, fetchSong, axiosTest} = require('./search');

async function main(){
    let lyricsPromise = await searchForSong({'artist':'the beatles', 'song':'hey jude'})
.then(data => {
    return { message: 'Request received!', data }
  }).catch(err => console.error(err));

const lyricsPromise2 = await fetchSong({'artist':'the beatles', 'song':'let it be'})

console.log(lyricsPromise);
console.log(lyricsPromise2);



}



 main();