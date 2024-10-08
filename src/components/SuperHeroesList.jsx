import { useEffect, useState } from "react"; // useState for loading-spinner
import axios from "axios";
import SuperHeroCard from "./SuperHeroCard";
import ScaleLoader from "react-spinners/ScaleLoader";

function SuperHeroesList({ marvelSuperheroes, setMarvelSuperheroes }) {
  const [loading, setLoading] = useState(true);

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
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/v1/public/characters`,
          {
            params: {
              apikey: import.meta.env.VITE_API_KEY,
              ts: import.meta.env.VITE_TIMESTAMP,
              hash: import.meta.env.VITE_HASH,
              limit: 100,
            },
          }
        );

        const heroesWithImages = response.data.data.results.filter(
          (hero) =>
            hero.thumbnail &&
            hero.thumbnail.path &&
            !hero.thumbnail.path.includes("image_not_available")
        );
        const shuffledHeroes = shuffleArray(heroesWithImages);
        setMarvelSuperheroes(shuffledHeroes.slice(0, 100));
        setLoading(false);
      } catch (error) {
        navigate(`*`);
        setLoading(false);
      }
    };
    fetchMarvelSuperheroes();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <ScaleLoader height={50} color="#e23636" />
      </div>
    );
  }

  return (
    <div className="container" id="marvel-superhero-list">
      <div className="row">
        {marvelSuperheroes.map((marvelSuperhero) => (
          <div
            key={marvelSuperhero.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <SuperHeroCard
              id={marvelSuperhero.id}
              name={marvelSuperhero.name}
              image={`${marvelSuperhero.thumbnail.path}.${marvelSuperhero.thumbnail.extension}`}
              description={
                marvelSuperhero.description
                  ? marvelSuperhero.description
                  : "No description available - yet."
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuperHeroesList;
