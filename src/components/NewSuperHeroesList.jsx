import { useEffect } from "react"; // check if useState is needed when running
import axios from 'axios';
import NewSuperHeroCard from "./SuperHeroCard";

function NewSuperHeroesList({ newSuperheroes, setNewSuperheroes }) {

  

  useEffect(() => {
    const fetchNewSuperheroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/newsuperheroes`)
        
        setNewSuperheroes(response.data) // sets newsuperheroes data from JSON server

      } catch (error) {
        console.log('Error fetching New SuperHeroes: ', error)
      }
    }

    fetchNewSuperheroes()

  }, [])


  return (
    <div className="new-superhero-list">
      {newSuperheroes.map((newSuperhero) => (
        <NewSuperHeroCard
        key={newSuperhero.id}
        name={newSuperhero.name}
        image={newSuperhero.image}  // direct URL to the image, changed in custom + added in new
        description={newSuperhero.description ? newSuperhero.description : 'No description available - yet.'}

        // onClick={() => navigate(`/superheroes/${newSuperhero.id}`)} // potential DetailsPage, to review; pass as prop if used + check route !!

        />
      ))}
    </div>
  )
}

export default NewSuperHeroesList