import CreateSuperHeroForm from "../components/CreateSuperHeroForm"

function CreateSuperHero({setNewSuperheroes}) {
  

  return (
    <div>
      <CreateSuperHeroForm setNewSuperheroes={setNewSuperheroes}/>
    </div>
  )
}

export default CreateSuperHero