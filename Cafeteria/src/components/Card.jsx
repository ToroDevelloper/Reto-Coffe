import '../styles/Card.css';

function Card({ coffee }) {
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
          <div className="card__rating">
            {rating ? (
              <>
                <img
                  src="/star-fill.svg"
                  alt="rating"
                  className="card__star"
                />
                <span className="card__rating-value">{rating}</span>
                <span className="card__votes">({votes} votos)</span>
              </>
            ) : (
              <>
                <img
                  src="/star-empty.svg"
                  alt="no rating"
                  className="card__star"
                />
                <span className="card__votes">Sin calificar</span>
              </>
            )}
          </div>

          {!available && <span className="card__sold-out">Agotado</span>}
        </div>
      </div>
    </div>
  );
}

export default Card;
