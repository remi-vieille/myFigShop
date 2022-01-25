// == Composant
const Character = ({ image, name }) => (
  <div className="character">
    <img className="image" src={image} alt={name} />
    <h2>{name}</h2>
  </div>
);

// == Export
export default Character;
