/* eslint-disable react/prop-types */

export default function Card({ pais }) {
  const { name, population, flag, region, capital } = pais;
  return (
    <div className="card">
      <img className="card-image" src={flag} alt="" />
      <div className="card-titles">
        <h3 className="card-title">{name}</h3>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
}
