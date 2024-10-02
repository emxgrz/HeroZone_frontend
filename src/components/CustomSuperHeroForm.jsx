import { useState, useEffect } from 'react';
import axios from 'axios';


function CustomSuperHeroForm ({ setNewSuperheroes }) {
  const [editingHero, setEditingHero] = useState(null);

  useEffect(() => {
    const fetchMarvelSuperheroes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/public/characters`, {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            ts: import.meta.env.VITE_TIMESTAMP,
            hash: import.meta.env.VITE_HASH,
            limit: 1 
          }
        })


        console.log(response.data.data.results)
        setNewSuperheroes(response.data.data.results)

      } catch (error) {
        console.log('Error fetching Marvel SuperHeroes: ', error)
      }
    }

    fetchMarvelSuperheroes()

  }, [])

  const handleEdit = (hero) => {
    setEditingHero({ ...hero, originalId: hero.id }); 
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const newSuperhero = {
      name: editingHero.name,
      description: editingHero.description,
      image: editingHero.image,
    };


    try {
      const response = await fetch('http://localhost:4000/newsuperheroes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingHero), 
      });

    } catch (error) {
      console.log("Error fetching hero details: ", error);
      setLoading(false)
    }
  };

      if (!response.ok) {
        console.log("error al crear hérore");
      }

    setNewSuperheroes((prevSuperheroes) =>
      prevSuperheroes.map((hero) =>
        hero.id === editingHero.originalId ? editingHero : hero
      )
    );

    setEditingHero(null); 
  }




  return (
    <div>
      
    </div>
  );


export default CustomSuperHeroForm
