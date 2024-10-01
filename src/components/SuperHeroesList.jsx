import { useEffect } from "react"; // check if useState is needed when running
import axios from 'axios';
import SuperHeroCard from "./SuperHeroCard";

function SuperHeroesList({ marvelSuperheroes, setMarvelSuperheroes }) {

  console.log("API URL:", import.meta.env.VITE_API_URL)
  console.log("API URL:", import.meta.env.VITE_API_KEY)


  useEffect(() => {
    const fetchMarvelSuperheroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/public/characters`, {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            ts: import.meta.env.VITE_TIMESTAMP,
            hash: import.meta.env.VITE_HASH,
            limit: 42 // temporal limit, to be reviewed
          }
        })

        // try {
        //     const response = await axios.get(
        //       `https://gateway.marvel.com//v1/public/characters?apikey=205601498972ebaa09436ade5df812b5&ts=1&hash=e4e885d0262f63d194a13bcfa7acf555&limit=2`
              // `https://gateway.marvel.com//v1/public/comics?apikey=205601498972ebaa09436ade5df812b5&ts=1&hash=e4e885d0262f63d194a13bcfa7acf555&limit=4`
            // )
        
        // console.log(response.data)
        // setMarvelSuperheroes(response.data)

        console.log(response.data.data.results)
        setMarvelSuperheroes(response.data.data.results) // Marvel API format includes data section to access info

      } catch (error) {
        console.log('Error fetching Marvel SuperHeroes: ', error)
      }
    }

    fetchMarvelSuperheroes()

  }, [])

  // console.log(setMarvelSuperheroes)
  // console.log(marvelSuperheroes)

  return (
    <div className="marvel-superhero-list">
      {marvelSuperheroes.map((marvelSuperhero) => (
        <SuperHeroCard
        key={marvelSuperhero.id}
        name={marvelSuperhero.name}
        image={`${marvelSuperhero.thumbnail.path}.${marvelSuperhero.thumbnail.extension}`} // follows API data format to get the image url; http correction needed?
        description={marvelSuperhero.description ? marvelSuperhero.description : 'No description available - yet.'}

        // onClick={() => navigate(`/superheroes/${marvelSuperhero.id}`)} // potential DetailsPage, to review; pass as prop if used!!

        />
      ))}
    </div>
  )
}

export default SuperHeroesList