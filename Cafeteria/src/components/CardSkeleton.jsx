import './CardSkeleton.css';

/**
 * CardSkeleton - Estado de carga
 * Muestra una tarjeta "vacía" con animación shimmer
 * mientras el useEffect obtiene los datos de la API.
 */
function CardSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__image"></div>
      <div className="skeleton__info">
        <div className="skeleton__row">
          <div className="skeleton__title"></div>
          <div className="skeleton__price"></div>
        </div>
        <div className="skeleton__row">
          <div className="skeleton__rating"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
