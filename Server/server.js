const lyricsFinder = require('lyrics-finder');


const express = require('express')
const cors = require("cors");

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(cors());
app.get('/', async (req, res) => {
    res.send('Hello World!')
    

    
   
});

app.get('/lyrics', async (req, res) => {
    const artist = req.query.artist;
    const song = req.query.song;
    const lyrics = (await lyricsFinder(artist, song) || "No lyrics found");
    console.log(lyrics);
    res.send(lyrics);
    
});

// example request from the server
(async function(artist, title) {
    let lyrics = await lyricsFinder(artist, title) || "Not Found!";
    console.log(lyrics);
})("travis scott", "sdp");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:5000/');
} );