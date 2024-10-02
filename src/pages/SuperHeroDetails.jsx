import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader"; 

function SuperHeroDetails() {
  const { id } = useParams()
  const [superHero, setSuperHero] = useState(null)
  const [loading, setLoading] = useState(true)

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
        setLoading(false)

      } catch (error) {
        console.log("Error fetching hero details: ", error);
        setLoading(false)
      }
    };

    fetchSuperHeroDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <GridLoader height={50} color="#e23636" />
      </div>
    )
  }

  if (!superHero) {
    return <p>oops, no superhero found</p>
  }

  const { name, description, thumbnail } = superHero;
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="container my-5" id="superhero-details">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img src={imageUrl} alt={name} className="img-fluid rounded mb-4" />
          <h2 className="mb-3">{name}</h2>
          <p>{description || "No description available"}</p>
        </div>
      </div>
    </div>
  );
}

export default SuperHeroDetails;
