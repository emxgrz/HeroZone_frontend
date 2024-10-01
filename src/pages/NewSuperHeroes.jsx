import NewSuperHeroList from "../components/NewSuperHeroesList"

function NewSuperHeroes({ newSuperheroes, setNewSuperheroes }) {
  return (
    <div>
      <NewSuperHeroList newSuperheroes={newSuperheroes} setNewSuperheroes={setNewSuperheroes} />
    </div>
  )
}

export default NewSuperHeroes

