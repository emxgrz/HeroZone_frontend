import CreateSuperHeroForm from "../components/CreateSuperHeroForm.jsx";

function CreateSuperHero({ setNewSuperheroes }) {
  return (
    <div>
      <CreateSuperHeroForm setNewSuperheroes={setNewSuperheroes} />
    </div>
  );
}

export default CreateSuperHero;
