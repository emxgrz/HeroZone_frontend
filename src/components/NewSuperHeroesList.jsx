import { useEffect, useState } from "react"; // check if useState is needed when running
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NewSuperHeroCard from "./NewSuperHeroCard";
import { Button } from 'react-bootstrap';

function NewSuperHeroesList({ newSuperheroes = [], setNewSuperheroes  }) {
  // console.log(newSuperheroes, setNewSuperheroes)

  const [searchTerm, setSearchTerm] = useState(""); // stores the search term
  const [filteredHeroes, setFilteredHeroes] = useState(newSuperheroes); // stores the results
  const navigate = useNavigate()

  useEffect(() => {
    const fetchNewSuperheroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/newsuperheroes`)

        setNewSuperheroes(response.data) // sets newsuperheroes data from JSON server
        setFilteredHeroes(response.data) // all newsuperheroes displayed at the beginning
        // console.log(response.data)

      } catch (error) {
        console.log('Error fetching New SuperHeroes: ', error)
      }
    }

    fetchNewSuperheroes() // fetch superheroes from JSON server when component mounts

  }, []) // empty array to ensures useEffect runs only once when the component monts
  // console.log(setNewSuperheroes)

  useEffect(() => {
    setFilteredHeroes(
      newSuperheroes.filter(superhero => 
        superhero.name.toLowerCase().includes(searchTerm.toLowerCase()) // managing capitals and lower
      )
    )
  }, [searchTerm, newSuperheroes])


  return (
    <div className="new-superhero-list">

      <div className="mb-5">
        <input
          type="text"
          placeholder="Search New Superheroes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          style={{ padding: "10px", marginBottom: "20px", width: "50%", border: "2px solid #FFDE21", borderRadius: "5px" }}
        />
      </div>
      
      {filteredHeroes.length > 0 ? (
        filteredHeroes.map((newSuperhero) => (
          <NewSuperHeroCard
          key={newSuperhero.id}
          id={newSuperhero.id}
          name={newSuperhero.name}
          image={newSuperhero.image}  // direct URL to the image, changed in custom + added in new
          description={newSuperhero.description ? newSuperhero.description : 'No description available - yet.'}
        />
      ))
      ) : (

        <div>
          <p>Your new superhero doesn't exist — yet.</p>
          <Button
            id="edit-button"
            variant="warning"
            onClick={() => navigate('/create-superhero')}
            className="mt-4">
            Create Superhero
          </Button>
        </div>
      )}
    </div>
  )
}

export default NewSuperHeroesList