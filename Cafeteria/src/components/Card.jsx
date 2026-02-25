import '../styles/Card.css';

function Card({ cafe }) {
  const { nombre, imagen, precio, calificacion, votos, popular, disponible } = cafe;

  return (
    <div className="card">
      
      <div className="card__contenedor-imagen">
        <img src={imagen} alt={nombre} className="card__imagen" />
        {popular && <span className="card__popular">Popular</span>}
      </div>

      <div className="card__info">
        <div className="card__encabezado">
          <h3 className="card__nombre">{nombre}</h3>
          <span className="card__precio">{precio}</span>
        </div>

        <div className="card__pie-pagina">
          <div className="card__clasificacion">
            {calificacion ? (
              <>
                <img
                  src="/star-fill.svg"
                  alt="calificacion"
                  className="card__star"
                />
                <span className="card__calificar">{calificacion}</span>
                <span className="card__votos">({votos} votos)</span>
              </>
            ) : (
              <>
                <img
                  src="/star-empty.svg"
                  alt="sin calificacion"
                  className="card__star"
                />
                <span className="card__votos">Sin calificar</span>
              </>
            )}
          </div>

          {!disponible && <span className="card__agotado">Agotado</span>}
        </div>
      </div>
    </div>
  );
}

export default Card;