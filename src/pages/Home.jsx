import SuperHeroesList from "../components/SuperHeroesList"

function Home({ marvelSuperheroes, setMarvelSuperheroes }) {
  return (

    <div>
      <SuperHeroesList marvelSuperheroes={marvelSuperheroes} setMarvelSuperheroes={setMarvelSuperheroes} />
    </div>

  )
}

export default Home