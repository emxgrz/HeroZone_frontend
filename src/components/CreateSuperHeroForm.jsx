import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function CreateSuperHeroForm({ setNewSuperheroes }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [superpower, setSuperpower] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);
  const handleSuperpower = (event) => setSuperpower(event.target.value);

  const handleAddSuperhero = async (event) => {
    event.preventDefault();

    const newSuperhero = {
      name,
      description,
      image,
      superpower
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_JSON_SERVER_URL}/newsuperheroes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSuperhero),
        }
      );

      if (response.ok) {
        const createdSuperhero = await response.json();
        setNewSuperheroes((actualSuperheroes) => [
          createdSuperhero,
          ...actualSuperheroes,
        ]);

        navigate("/new-superheroes");
      } else {
        console.error("error while creating ypur superhero...");
      }
    } catch (error) {
      navigate(`*`);
    }

    setName("");
    setDescription("");
    setImage("");
  };

  return (
    <div>
      <form onSubmit={handleAddSuperhero} className="newSuperHeroForm">
        <h1>Create your new superhero!</h1>
        <div className="mb-3">
          <h3>Name:</h3>
          <input
            onChange={handleNameChange}
            value={name}
            type="text"
            name="name"
            required
          />
        </div>

        <div className="mb-3">
          <h3>Superpower:</h3>
          <input
            onChange={handleSuperpower}
            value={superpower}
            type="text"
            name="superpower"
            required
          />
        </div>

        <div className="mb-3">
          <h3>Description:</h3>
          <textarea
            onChange={handleDescriptionChange}
            value={description}
            type="text"
            name="description"
            required
          />
        </div>

        <div className="mb-3">
          <h3>Image URL:</h3>
          <input
            onChange={handleImageChange}
            value={image}
            type="text"
            name="image"
            required
          />
        </div>

        <Button
          type="submit"
          id="form-button"
          className="mt-4"
        >
          Add Superhero
        </Button>
      </form>
    </div>
  );
}

export default CreateSuperHeroForm;
