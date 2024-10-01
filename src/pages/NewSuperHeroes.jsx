import NewSuperHeroesList from "../components/NewSuperHeroesList"

function NewSuperHeroes({ newSuperheroes, setNewSuperheroes }) {
// function NewSuperHeroes() {
  return (
    <div>
      <NewSuperHeroesList newSuperheroes={newSuperheroes} setNewSuperheroes={setNewSuperheroes} />
    </div>
  )
}

export default NewSuperHeroes

