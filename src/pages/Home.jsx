import SuperHeroesList from "../components/SuperHeroesList"

function Home({ marvelSuperheroes, setMarvelSuperheroes }) {
  return (

    <div>
      <h1 className="home-title">choose your superhero</h1>
      <SuperHeroesList marvelSuperheroes={marvelSuperheroes} setMarvelSuperheroes={setMarvelSuperheroes} />
    </div>

  )
}

export default Home