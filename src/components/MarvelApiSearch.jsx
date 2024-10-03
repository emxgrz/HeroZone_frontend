import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SuperHeroCard from "./SuperHeroCard";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Button } from 'react-bootstrap';


function MarvelApiSearch({ marvelSuperheroes, setMarvelSuperheroes }) {
  const [searchedCharacter, setSearchedCharacter] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchOn, setSearchOn] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    const delayAPICalls = setTimeout(() => {
      const fetchCharacters = async () => {
        if (searchedCharacter.length >= 3) {
          setLoading(true);
          setSearchOn(true)
          try {
            const response = await axios.get(
              `${import.meta.env.VITE_API_URL}/v1/public/characters`,
              {
                params: {
                  nameStartsWith: searchedCharacter,
                  apikey: import.meta.env.VITE_API_KEY,
                  ts: import.meta.env.VITE_TIMESTAMP,
                  hash: import.meta.env.VITE_HASH,
                  limit: 100,
                },
              }
            );
            setMarvelSuperheroes(response.data.data.results);
          } catch (error) {
            console.log("Error fetching characters:", error);
          }
          setLoading(false);
        }
      };
      fetchCharacters();
    }, 2000); // set debounce/wait-time to avoid multiple calls to api

    return () => clearTimeout(delayAPICalls); // cleanup timeout after search changes

  }, [searchedCharacter])

  // if (loading) {
  //   return (
  //     <div className="loader-container">
  //       <ScaleLoader height={50} color="#e23636" />
  //     </div>
  //   );
  // }

  return (
    <div className="marvel-api-search">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for Marvel characters..."
        value={searchedCharacter}
        onChange={(e) => setSearchedCharacter(e.target.value)}
        style={{ padding: "10px", marginBottom: "50px", width: "50%", border: "2px solid #FFDE21", borderRadius: "5px" }}
      />

      {loading ? (
        <div className="loader-container">
          <ScaleLoader height={50} color="#e23636" />
        </div>
      ) : (
        <div className="character-list">
          {marvelSuperheroes.length > 0 ? (
            marvelSuperheroes.map((hero) => (
              <SuperHeroCard
                key={hero.id}
                id={hero.id}
                name={hero.name}
                image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                description={hero.description || "No description available."}
              />
            ))
          ) : searchOn && (
            <>
              <p>Are you sure this is a Marvel character?</p>
              <p>Hint: are you looking for Batman? Not here</p>

              <Button
                id="edit-button"
                variant="warning"
                onClick={() => navigate('/create-superhero')}
                className="mt-4">
                Create Superhero
              </Button>
            </>
            
          )}
        </div>
      )}
    </div>
  );
}

export default MarvelApiSearch;
