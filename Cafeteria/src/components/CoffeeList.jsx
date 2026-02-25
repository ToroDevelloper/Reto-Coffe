import Card from './Card';
import CardSkeleton from './CardSkeleton';
import '../styles/CoffeeList.css';

function CoffeeList({ coffees, loading }) {
  if (loading) {
    return (
      <div className="coffee-list__grid">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <CardSkeleton key={n} />
        ))}
      </div>
    );
  }

  if (coffees.length === 0) {
    return (
      <div className="coffee-list__empty">
        <span className="coffee-list__empty-icon">☕</span>
        <p className="coffee-list__empty-text">
          No hay productos disponibles en este momento.
        </p>
        <p className="coffee-list__empty-subtext">
          Intenta con otro filtro o vuelve más tarde.
        </p>
      </div>
    );
  }

  return (
    <div className="coffee-list__grid">
      {coffees.map((cafe) => (
        <Card
          key={cafe.id}
          cafe={{
            nombre: cafe.name,
            imagen: cafe.image,
            precio: cafe.price,
            calificacion: cafe.rating,
            votos: cafe.votes,
            popular: cafe.popular,
            disponible: cafe.available
          }}
        />
      ))}
    </div>
  );
}

export default CoffeeList;
