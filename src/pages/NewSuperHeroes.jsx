import NewSuperHeroesList from "../components/NewSuperHeroesList"

function NewSuperHeroes({ newSuperheroes, setNewSuperheroes }) {
// function NewSuperHeroes() {
  return (
    <div>
      <h1 className="new-super-title">brand new superheroes</h1>
      <NewSuperHeroesList newSuperheroes={newSuperheroes} setNewSuperheroes={setNewSuperheroes} />
    </div>
  )
}

export default NewSuperHeroes

