import CreateSuperHeroForm from "../components/CreateSuperheroForm"

function CreateSuperHero({newSuperheroes, setNewSuperheroes}) {
  

  return (
    <div>
      <CreateSuperHeroForm newSuperheroes={newSuperheroes} setNewSuperheroes={setNewSuperheroes}/>
    </div>
  )
}

export default CreateSuperHero