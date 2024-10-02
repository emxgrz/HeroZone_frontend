import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <div className="containerNav">
        <div className="containerLink">
        <Link to={"/"}>
        <p>Home</p>
        </Link>
        <Link to={"/new-superheroes"}>
        <p>Check out our new superheroes!</p>
        </Link>
        <Link to={"/create-superhero/:id"}>
        <button className="createButton">Create your own superhero</button>
        </Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar