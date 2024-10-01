function SuperHeroCard({ name, image, description }) { // pass 'onClick' if needed !!


  return (
    <div className="marvel-superhero-card">
      <img src={image} />
      <h2>{name}</h2>
      {/* name + image only, pass other props to SHDetails.jsx (page) */}
      {/* <p>{description}</p> */}
    </div>
  )
}

export default SuperHeroCard