import CustomSuperHeroForm from "../components/CustomSuperHeroForm";

function CustomSuperHero({ setNewSuperheroes }) {
  return (
    <div>
      <CustomSuperHeroForm setNewSuperheroes={setNewSuperheroes} />
    </div>
  );
}

export default CustomSuperHero;
