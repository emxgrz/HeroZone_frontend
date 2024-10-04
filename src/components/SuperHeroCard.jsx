import { useNavigate } from "react-router-dom";

function SuperHeroCard({ id, name, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/superhero-details/${id}`);
  };

  return (
    <div
      className="card text-center mb-4"
      id="marvel-superhero-card"
      onClick={handleClick}
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

export default SuperHeroCard;
