import { useNavigate } from 'react-router-dom';
import marvelArmyImage from '../assets/marvel-universe-reunited.webp'
import { Button } from 'react-bootstrap';

function Error404() {
  const navigate = useNavigate();

  return (
    <div className="error-page container text-center">
      <h1 className='home-title'>404: Universe Not Found</h1>
      <h3>Oops!</h3>
      <h4>It seems you’ve tried navigating to a galaxy unknown or maybe a secret universe that even Doctor Strange can't reach.</h4>

      <Button
        id="edit-button"
        onClick={() => navigate(`/`)}
         className="mt-5 mb-4"
            >
        Return to Base
      </Button>
      <img src={marvelArmyImage} alt="Marvel Universe Reunited" className="img-fluid mb-1" />
      <p className="text-muted mt-3">Let's get you back to safe ground.</p>


    </div>
  );
}

export default Error404;