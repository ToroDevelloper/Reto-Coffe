import '../styles/Card.css';

function Card({ cafe }) {
  const { nombre, imagen, precio, calificacion, votos, popular, disponible } = cafe;

  return (
    <div className="card">
      
      <div className="card__image-wrapper">
        <img src={imagen} alt={nombre} className="card__image" />
        {popular && <span className="card__badge">Popular</span>}
      </div>

      <div className="card__info">
        <div className="card__header">
          <h3 className="card__name">{nombre}</h3>
          <span className="card__price">{precio}</span>
        </div>

        <div className="card__footer">
          <div className="card__rating">
            {calificacion ? (
              <>
                <img
                  src="/star-fill.svg"
                  alt="calificacion"
                  className="card__star"
                />
                <span className="card__rating-value">{calificacion}</span>
                <span className="card__votes">({votos} votos)</span>
              </>
            ) : (
              <>
                <img
                  src="/star-empty.svg"
                  alt="sin calificacion"
                  className="card__star"
                />
                <span className="card__votes">Sin calificar</span>
              </>
            )}
          </div>

          {!disponible && <span className="card__sold-out">Agotado</span>}
        </div>
      </div>
    </div>
  );
}

export default Card;