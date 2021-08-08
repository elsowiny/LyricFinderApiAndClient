
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
            return Promise.resolve(data);
            
          }).catch(err => console.log(err));
    }

    
   async function fetchSong({artist, song}){
    let lyrics = "";
    return await axios.get(url , {
      params: {
        artist,
        song
      }
    }).then(response => {
      const data = response.data;
      return data;
    })
    

  }
    

  async function axiosTest() {
    try {
      const {data:response} = await axios.get(url) //use data destructuring to get data from the promise object
      return response
    }

    catch (error) {
      console.log(error);
    }
  }

 

  

module.exports = {searchForSong, fetchSong,axiosTest};