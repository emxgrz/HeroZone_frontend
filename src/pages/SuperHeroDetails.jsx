import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SuperHeroDetails() {
  const { id } = useParams();
  const [superHero, setSuperHero] = useState(null);

  useEffect(() => {
    const fetchSuperHeroDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/public/characters/${id}`, {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            ts: import.meta.env.VITE_TIMESTAMP,
            hash: import.meta.env.VITE_HASH
          }
        });

        setSuperHero(response.data.data.results[0])
      } catch (error) {
        console.log("Error fetching hero details: ", error);
      }
    };

    fetchSuperHeroDetails();
  }, [id]);

  if (!superHero) {
    return <p>Loading...</p>; // add managing animations !!!
  }

  const { name, description, thumbnail } = superHero;
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="container my-5" id="superhero-details">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img src={imageUrl} alt={name} className="img-fluid rounded mb-4" />
          <h1 className="mb-3">{name}</h1>
          <p>{description || "No description available"}</p>
        </div>
      </div>
    </div>
  );
}

export default SuperHeroDetails;
