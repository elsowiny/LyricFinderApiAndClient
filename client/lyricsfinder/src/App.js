import axios from 'axios';
import { useState, useEffect } from "react"
import Container from '@material-ui/core/Container';

import './App.css';


function App() {
  const [lyrics, setLyrics] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [artist, setArtist] = useState("")
  const [song, setSong] = useState("")

  const handleArtistChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setArtist(value);
  }
  const handleSongChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSong(value);
  }

  const handleSearchForSongChange = (e) => {
    if(!artist || !song){
      return;
    } 
    searchForSong({artist, song});
    

  }

  const searchForSong = ({artist, song}) => {
    setLoading(true);
    axios.get(`http://localhost:5000/lyrics` ,{
      params: {
        artist: artist,
        song: song
      }
    }).then(response => {
      setLyrics(response.data);
      setLoading(false);
    })
  }

  return (
    <Container className="d-flex flex-column py-2">
    <div className="App">
      <div className="input">
      <input className="inputElem" placeholder="artist" onChange={handleArtistChange}/>
      <input className="inputElem" placeholder="song"  onChange={handleSongChange}/>  
      </div>
      
      <button onClick={handleSearchForSongChange}>Search</button>
      

      <div className="text-center" style={{ whiteSpace: "pre" }}>
        <p className="lyricsText">
              {lyrics ? lyrics : "lyrics"}</p>
          </div>
      
    
    
    
    
    
    
    

    
    </div>
    </Container>


  );
}

export default App;
