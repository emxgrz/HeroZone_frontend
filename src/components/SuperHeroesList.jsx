import { useEffect } from "react"; // check if useState is needed when running
import axios from 'axios';
import SuperHeroCard from "./SuperHeroCard";

function SuperHeroesList({ marvelSuperheroes, setMarvelSuperheroes }) {

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const fetchMarvelSuperheroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/public/characters`, {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            ts: import.meta.env.VITE_TIMESTAMP,
            hash: import.meta.env.VITE_HASH,
            limit: 100 // check LIMIT !!! 
          }
        })

        const heroesWithImages = response.data.data.results.filter(hero =>
          hero.thumbnail && hero.thumbnail.path && !hero.thumbnail.path.includes('image_not_available')
        )
        console.log(heroesWithImages)

        // const shuffledHeroes = shuffleArray(response.data.data.results)
        const shuffledHeroes = shuffleArray(heroesWithImages)
        setMarvelSuperheroes(shuffledHeroes.slice(0, 100)) // check LIMIT !!! 
        console.log(shuffledHeroes)


        // console.log(response.data.data.results)
        // setMarvelSuperheroes(response.data.data.results) // Marvel API format includes data section to access info

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
        id={marvelSuperhero.id}
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