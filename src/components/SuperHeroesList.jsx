import { useEffect } from "react"; // check if useState is needed when running
import axios from 'axios';
import SuperHeroCard from "./SuperHeroCard";

function SuperHeroesList({ marvelSuperheroes, setMarvelSuperheroes }) {


  useEffect(() => {
    const fetchMarvelSuperheroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/public/characters`, {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            ts: import.meta.env.VITE_TIMESTAMP,
            hash: import.meta.env.VITE_HASH,
            limit: 24 // temporal limit, to be reviewed
          }
        })


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

    <div className="container" id="marvel-superhero-list">
      <div className="row">
      {marvelSuperheroes.map((marvelSuperhero) => (
        <div key={marvelSuperhero.id} className="col-12 col-sm-6 col-md-4 col-lg-3">

        <SuperHeroCard
        key={marvelSuperhero.id}
        name={marvelSuperhero.name}
        image={`${marvelSuperhero.thumbnail.path}.${marvelSuperhero.thumbnail.extension}`} // follows API data format to get the image url; http correction needed?
        description={marvelSuperhero.description ? marvelSuperhero.description : 'No description available - yet.'}

        // onClick={() => navigate(`/superheroes/${marvelSuperhero.id}`)} // potential DetailsPage, to review; pass as prop if used!!

        />
        </div>
      ))}
    </div>
    </div>
  )
}

export default SuperHeroesList