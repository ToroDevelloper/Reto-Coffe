import '../styles/Card.css';

function Card({ coffee }) {
  // some JSON entries use "votes" so match that key name
  const { name, image, price, rating, votes, popular, available } = coffee;

  return (
    <div className="card">
      {/* Imagen del café con badge Popular condicional */}
      <div className="card__image-wrapper">
        <img src={image} alt={name} className="card__image" />
        {popular && <span className="card__badge">Popular</span>}
      </div>

      {/* Info del café */}
      <div className="card__info">
        <div className="card__header">
          <h3 className="card__name">{name}</h3>
          <span className="card__price">{price}</span>
        </div>

        <div className="card__footer">
          {/* Rating: si existe mostramos estrella llena, si no, estrella vacía */}
          <div className="card__rating">
            {rating ? (
              <>
                <img
                  src="/star-fill.svg"
                  alt="rating"
                  className="card__star"
                />
                <span className="card__rating-value">{rating}</span>
                <span className="card__votes">({votes} votes)</span>
              </>
            ) : (
              <>
                <img
                  src="/star-empty.svg"
                  alt="no rating"
                  className="card__star"
                />
                <span className="card__votes">No ratings</span>
              </>
            )}
          </div>

          {/* Estado de disponibilidad */}
          {!available && <span className="card__sold-out">Sold out</span>}
        </div>
      </div>
    </div>
  );
}

export default Card;
