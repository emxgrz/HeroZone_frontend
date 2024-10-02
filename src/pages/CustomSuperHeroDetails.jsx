import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader"; 


function CustomSuperHeroDetails() {
  const { id } = useParams()
  const [superHero, setSuperHero] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSuperHeroDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/newsuperheroes/${id}`)
        // const response = await axios.get(`http://localhost:4000/newsuperheroes/3`) // test !!!
        setSuperHero(response.data) // fetch from JSON server
        setLoading(false)

      } catch (error) {
        console.log("Error fetching hero details: ", error)
        setLoading(false)
      }
    };

    fetchSuperHeroDetails();
  }, [id]) // useEffect happens again if id happens, making a new API call

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

  const { name, description, image } = superHero // JSON data
  // ADD more info if needed !!!

  return (
    <div className="container my-5" id="superhero-details">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img src={image} alt={name} className="img-fluid rounded mb-4" />
          <h2 className="mb-3">{name}</h2>
          <p>{description || "No description available"}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomSuperHeroDetails;
