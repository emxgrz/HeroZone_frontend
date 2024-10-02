import CreateSuperHeroForm from "../components/CreateSuperHeroForm"

function CreateSuperHero({newSuperheroes, setNewSuperheroes}) {
  

  return (
    <div>
      <CreateSuperHeroForm newSuperheroes={newSuperheroes} setNewSuperheroes={setNewSuperheroes}/>
    </div>
  )
}

export default CreateSuperHero