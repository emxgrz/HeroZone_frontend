import { NavLink } from "react-router-dom";

function Navbar() {
  const handleNavLinkClick = () => {
    const navCollapse = document.getElementById("navbarNav");
    if (navCollapse.classList.contains("show")) {
      navCollapse.classList.remove("show"); 
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          HeroZone
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/search-marvel"
                onClick={handleNavLinkClick}
              >
                {" "}
                Marvel Superheroes{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/new-superheroes"
                onClick={handleNavLinkClick}
              >
                {" "}
                New Superheroes{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/comics-page"
                onClick={handleNavLinkClick}
              >
                {" "}
                Comics{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                id="create-your-sh"
                className="nav-link"
                to="/create-superhero"
                onClick={handleNavLinkClick}
              >
                {" "}
                Create Your SuperHero{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                id="create-your-sh"
                className="nav-link"
                to="/about"
                onClick={handleNavLinkClick}
              >
                {" "}
                About Us{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;