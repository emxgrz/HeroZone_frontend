import { useNavigate } from "react-router-dom";

function NewSuperHeroCard({ id, name, image }) {
  const navigate = useNavigate();

  const handleNewClick = () => {
    navigate(`/custom-superhero-details/${id}`);
  };

  return (
    <div
      className="card text-center mb-4"
      id="new-superhero-card"
      onClick={handleNewClick}
    >
      <img
        src={image}
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
}

export default NewSuperHeroCard;
