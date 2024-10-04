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
  const navigate = useNavigate();


  useEffect(() => {
    const delayAPICalls = setTimeout(() => {
      if (searchedCharacter.length >= 3) {
        setLoading(true)
        setSearchOn(true);
        const fetchCharacters = async () => {
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
            navigate(`*`)
          } finally {
            setLoading(false);
          }
        };

        fetchCharacters();
      } else {
        setSearchOn(false);
        setMarvelSuperheroes([]);
      }
    }, 2000); // waiting-time after seraching to avoid multiple api calls

    return () => clearTimeout(delayAPICalls); // clean timeout after search
  }, [searchedCharacter]);

  useEffect(() => {
    return () => {
      setMarvelSuperheroes([]); // added to clear search when component unmounts
    };
  }, [setMarvelSuperheroes]);

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

      <p style={{ color: 'white' }}> Write above the Marvel character name you are searching for (3 letters min.)</p>
      <p style={{ color: 'white' }}>and if everything goes well... you'll find it.</p>
      <br></br>

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
              <p>Oops!</p>
              <p>Are you sure this is a Marvel character?</p>
              <p>Hint: are you looking for Batman? Not here.</p>
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
