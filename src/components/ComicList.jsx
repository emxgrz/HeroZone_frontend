import { useEffect, useState } from "react";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";
import ComicCard from "./ComicCard";

function ComicList({ comics, setComics }) {
  const [loading, setLoading] = useState(true);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const fetchMarvelComics = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/v1/public/comics`,
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
        setComics(shuffledHeroes.slice(0, 100));
        setLoading(false);
      } catch (error) {
        navigate(`*`);
        setLoading(false);
      }
    };

    fetchMarvelComics();
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
        {comics.map((comic) => (
          <div key={comic.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ComicCard
              id={comic.id}
              name={comic.title}
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              description={
                comic.description
                  ? comic.description
                  : "No description available - yet."
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComicList;
