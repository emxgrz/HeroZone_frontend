import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CustomSuperHeroDetails({ newSuperheroes, setNewSuperheroes }) {
  const { id } = useParams();
  const [superHero, setSuperHero] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuperHeroDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_JSON_SERVER_URL}/newsuperheroes/${id}`
        );
        // const response = await axios.get(`http://localhost:4000/newsuperheroes/3`) // test !!!
        setSuperHero(response.data); // fetch from JSON server

        setLoading(false);
      } catch (error) {
        navigate(`*`);
        setLoading(false);
      }
    };

    fetchSuperHeroDetails();
  }, [id]); // useEffect happens again if id happens, making a new API call

  if (loading) {
    return (
      <div className="loader-container">
        <GridLoader height={50} color="#e23636" />
      </div>
    );
  }

  if (!superHero) {
    return <p className="mt-7">oops, no superhero found</p>;
  }

  const { name, description, image, superpower, marvelId } = superHero; // JSON data
  // ADD more info if needed !!!

  //--------------------------------HANDLE DELETE

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "¿Estás seguro de que deseas eliminar este héroe?"
    );

    if (isConfirmed) {
      try {
        // Petición DELETE al servidor
        await axios.delete(
          `${import.meta.env.VITE_JSON_SERVER_URL}/newsuperheroes/${id}`
        );

        // Actualizar la lista de superhéroes en el estado después de eliminar
        const updatedSuperheroes = newSuperheroes.filter(
          (hero) => hero.id !== id
        );
        setNewSuperheroes(updatedSuperheroes);
        navigate("/new-superheroes");
      } catch (error) {
        navigate(`*`);
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container my-5" id="superhero-details">
      <div className="row justify-content-center">
        <h1>meet your new superhero</h1>
        <div className="col-md-6 text-center">
          <img src={image} alt={name} className="img-fluid rounded mb-4" />
          <h2 className="mb-3">{name}</h2>
          <h3 className="superpower">{superpower}</h3>
          <p>{description || "No description available"}</p>

          {marvelId && ( // Solo renderiza el botón si marvelId está presente
            <Button
              id="edit-button"
              onClick={() => navigate(`/superhero-details/${marvelId}`)}
              className="mt-5 mx-auto d-block"
            >
              See original
            </Button>
          )}

          <Button
            id="form-button"
            onClick={handleBack}
            className="mt-4"
          >
            Back
          </Button>

          <Button
            id="delete-button"
            onClick={() => handleDelete(superHero.id)}
            className="mt-4 mx-auto d-block"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomSuperHeroDetails;
