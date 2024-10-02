import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

function CustomSuperHeroForm({ setNewSuperheroes }) {
  const [editingHero, setEditingHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMarvelSuperheroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/public/characters/${id}`, {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            ts: import.meta.env.VITE_TIMESTAMP,
            hash: import.meta.env.VITE_HASH,
            limit: 1,
          },
        });

        const fetchedHero = response.data.data.results[0];
        setEditingHero({
          originalId: fetchedHero.id,
          name: fetchedHero.name,
          description: fetchedHero.description,
          image: fetchedHero.thumbnail.path + '.' + fetchedHero.thumbnail.extension,
        });
        setLoading(false);
      } catch (error) {
        console.log('Error fetching Marvel SuperHeroes: ', error);
        setLoading(false);
      }
    };

    fetchMarvelSuperheroes();
  }, [id]);

  const handleEdit = (hero) => {
    setEditingHero({ ...hero, marvelId: hero.id });
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const newSuperhero = {
      name: editingHero.name,
      description: editingHero.description,
      image: editingHero.image,
      marvelId: id,
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
        setNewSuperheroes((prevSuperheroes) =>
          prevSuperheroes.map((hero) =>
            hero.id === editingHero.originalId ? editingHero : hero
          )
        );
        setEditingHero(null);
        navigate('/new-superheroes');
      }
    } catch (error) {
      console.log('Error saving hero details: ', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditingHero((prevHero) => ({
      ...prevHero,
      [name]: value,
    }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-5">
      <form onSubmit={handleSave}>

        <h1>Edit your superhero</h1>
        <div className="mb-3">
            {/* <label htmlFor="name">Name:</label> */}
            <h3>Name:</h3>
            <input
              type="text"
              id="name"
              name="name"
              value={editingHero?.name || ''}
              onChange={handleChange}
            />
          </div>
 
        <div className="mb-3">
          {/* <label htmlFor="description">Description:</label> */}
          <h3>Description:</h3>
          <textarea
            id="description"
            name="description"
            value={editingHero?.description || ''}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          {/* <label htmlFor="image">Image URL:</label> */}
          <h3>Image URL:</h3>
          <input
            type="text"
            id="image"
            name="image"
            value={editingHero?.image || ''}
            onChange={handleChange}
          />
        </div>
        {/* <button type="submit">Save</button> */}

          <Button
            id="form-button"
            variant="warning"
            className="mt-4">
            Save
          </Button>
      </form>
    </div>
  );
}

export default CustomSuperHeroForm;
