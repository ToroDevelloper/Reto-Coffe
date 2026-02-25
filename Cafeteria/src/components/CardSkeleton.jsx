import '../styles/CardSkeleton.css';

function CardSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__imagen"></div>
      <div className="skeleton__info">
        <div className="skeleton__fila">
          <div className="skeleton__titulo"></div>
          <div className="skeleton__precio"></div>
        </div>
        <div className="skeleton__fila">
          <div className="skeleton__calificacion"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
