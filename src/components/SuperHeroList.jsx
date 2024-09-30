import { useState, useEffect } from "react";
import axios from 'axios';
import SuperHeroCard from "./SuperHeroCard";

function SuperHeroList() {

  const [ marvelSuperheroes, setMarvelSuperheroes ] = useState([])

  useEffect(() => {
    const fetchMarvelSuperheroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/public/characters`, {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            ts: import.meta.env.VITE_TIMESTAMP,
            hash: import.meta.env.VITE_HASH
            // limit: 42
          }
        })
        
        setMarvelSuperheroes(response.data.data.results)

      } catch (error) {
        console.log('Error fetching Marvel SuperHeroes: ', error)
      }
    }

    fetchMarvelSuperheroes()

  }, [])


  return (
    <div className="marvel-superhero-list">
      {marvelSuperheroes.map((marvelSuperhero) => (
        <SuperHeroCard
        key={marvelSuperhero.id}
        marvelSuperhero={marvelSuperhero}
        />
      ))}
    </div>
  )
}

export default SuperHeroList