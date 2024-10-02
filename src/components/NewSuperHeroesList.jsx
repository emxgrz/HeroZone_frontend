import { useEffect, useState } from "react"; // check if useState is needed when running
import axios from 'axios';
import NewSuperHeroCard from "./NewSuperHeroCard";

function NewSuperHeroesList({ newSuperheroes = [], setNewSuperheroes  }) {
  // function NewSuperHeroesList() {
  // console.log(newSuperheroes, setNewSuperheroes)

  useEffect(() => {
    const fetchNewSuperheroes = async () => {
      try {
        // const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/newsuperheroes`)
        // console.log('JSON server URL:', import.meta.env.VITE_JSON_SERVER_URL) // undefined, check
        const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/newsuperheroes`)
        // console.log(response.data)
        setNewSuperheroes(response.data) // sets newsuperheroes data from JSON server
        


      } catch (error) {
        console.log('Error fetching New SuperHeroes: ', error)
      }
    }

    fetchNewSuperheroes() // fetch superheroes from JSON server when component mounts

  }, []) // empty array to ensures useEffect runs only once when the component monts
  // console.log(setNewSuperheroes)


  return (
    <div className="new-superhero-list">
      
      {newSuperheroes.length > 0 ? (
        newSuperheroes.map((newSuperhero) => (
          <NewSuperHeroCard
          key={newSuperhero.id}
          id={newSuperhero.id}
          name={newSuperhero.name}
          image={newSuperhero.image}  // direct URL to the image, changed in custom + added in new
          description={newSuperhero.description ? newSuperhero.description : 'No description available - yet.'}

          // onClick={() => navigate(`/superheroes/${newSuperhero.id}`)} // potential DetailsPage, to review; pass as prop if used + check route !!

        />
      ))
      ) : (
        <p>No superheroes available yet.</p>
      )}
    </div>
  )
}

export default NewSuperHeroesList