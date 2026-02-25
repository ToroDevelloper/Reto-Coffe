import Card from './Card';
import CardSkeleton from './CardSkeleton';
import '../styles/CoffeeList.css';

/**
 * CoffeeList - Componente de listado
 * Solo se encarga de RENDERIZAR la lista. No tiene estado propio.
 *
 * Props:
 * @param {Array}   coffees  - Lista de cafés ya filtrada (viene del padre)
 * @param {boolean} loading  - Si los datos aún se están cargando
 */
function CoffeeList({ coffees, loading }) {
  // 🔄 Skeleton Loading: mientras loading=true, mostramos 6 tarjetas "vacías"
  if (loading) {
    return (
      <div className="coffee-list__grid">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <CardSkeleton key={n} />
        ))}
      </div>
    );
  }

  // 📭 Empty State: si el filtro no devuelve resultados
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

  // ✅ Renderizado normal: mapear cada café a un componente Card
  return (
    <div className="coffee-list__grid">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}

export default CoffeeList;
