import { Link } from "react-router-dom";

function Navbar() {

  const handleNavLinkClick = () => {
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse.classList.contains('show')) {
      navCollapse.classList.remove('show'); // close the menu after click + navigate to each section
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">HeroZone</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">            
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/new-superheroes" onClick={handleNavLinkClick}>New Superheroes</Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/comics-page" onClick={handleNavLinkClick}>Comics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorite-superheroes" onClick={handleNavLinkClick}>Favs</Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/create-superhero/:id" onClick={handleNavLinkClick}>Create Your SuperHero</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;