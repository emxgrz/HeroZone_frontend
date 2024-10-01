import SuperHeroesList from "../components/SuperHeroesList"

function Home({ marvelSuperheroes, setMarvelSuperheroes }) {
  return (

    <div>
      <h1>choose your hero</h1>
      <SuperHeroesList marvelSuperheroes={marvelSuperheroes} setMarvelSuperheroes={setMarvelSuperheroes} />
    </div>

  )
}

export default Home