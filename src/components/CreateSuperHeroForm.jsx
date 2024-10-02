import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Suponiendo que usas react-router-dom para navegación
import { Button } from "react-bootstrap";

function CreateSuperHeroForm({ setNewSuperheroes }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  
  // Crear variable para navegar de regreso a home
  const navigate = useNavigate();

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);

  const handleAddSuperhero = async (event) => {
    event.preventDefault();

    const newSuperhero = {
      name,
      description,
      image,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_JSON_SERVER_URL}/newsuperheroes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSuperhero), 
      });

      if (response.ok) {
        const createdSuperhero = await response.json(); 
        setNewSuperheroes((actualSuperheroes) => [createdSuperhero, ...actualSuperheroes]);

        
        navigate('/new-superheroes');
      } else {
        console.error('no se ha podido crear tu superhéroe...');
      }
    } catch (error) {
      console.error(error);
    }

    setName("");
    setDescription("");
    setImage("");
  };

  return (
    <div>
      <form onSubmit={handleAddSuperhero} className="newSuperHeroForm">
        <h1>Create your new superhero!</h1>
        {/* <div className="nameChange"> */}
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

        {/* <div className="descriptionChange"> */}
        <div className="mb-3">
          <h3>Description:</h3>
          <input
            onChange={handleDescriptionChange}
            value={description}
            type="text"
            name="description"
            required
          />
        </div>

        {/* <div className="imageChange"> */}
        <div className="mb-3">
          <h3>Image:</h3>
          <input
            onChange={handleImageChange}
            value={image}
            type="text"
            name="image"
            required
          />
        </div>

        {/* <button type="submit">Add Superhero</button> */}
        <Button
        type="submit"
            id="form-button"
            variant="warning"
            className="mt-4">
            Add Superhero
          </Button>
      </form>
    </div>
  );
}

export default CreateSuperHeroForm;
