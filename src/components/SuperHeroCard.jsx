function SuperHeroCard({ name, image, description }) { // pass 'onClick' if needed !!


  return (
      <div className="card text-center mb-4" id="marvel-superhero-card">
      <img src={image} alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {/* name + image only, pass other props to SHDetails.jsx (page) */}
        </div>
    </div>
  )
}

export default SuperHeroCard