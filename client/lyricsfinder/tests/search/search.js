
const axios = require("axios");

const url = "https://se-lyrics.herokuapp.com/lyrics";


const searchForSong = async ({artist, song}) => {

    
        return await axios.get(url ,{
            params: {
              artist: artist,
              song: song
            }
          }).then(response => {
            const data = response.data;
            //console.log(data);
            //console.log(response)
            return data;
          }).catch(err => console.log(err));
    }

    
    const fetchSong = async ({artist, song}) => {
        try{
            await axios.get(url,{
                params: {
                    artist: artist,
                    song: song
                }}).then(response => {
                    const data = response.data;
                    //console.log(data);
                    //console.log(response)
                    return data;
                }
                )
    
        }catch (err) {
            console.log(err)
          }
            


    }

    


module.exports = {searchForSong, fetchSong};