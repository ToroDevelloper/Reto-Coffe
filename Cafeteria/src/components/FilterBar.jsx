import '../styles/FilterBar.css';

/**
 * FilterBar - Componente de filtrado
 * Recibe el filtro activo y la función para cambiarlo (Lifting State Up).
 *
 * @param {string}   filter    - Filtro activo ('all' | 'available')
 * @param {function} setFilter - Setter del estado del filtro (viene del padre)
 */
function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button
        className={`filter-bar__btn ${filter === 'all' ? 'filter-bar__btn--active' : ''}`}
        onClick={() => setFilter('all')}
      >
        All Products
      </button>
      <button
        className={`filter-bar__btn ${filter === 'available' ? 'filter-bar__btn--active' : ''}`}
        onClick={() => setFilter('available')}
      >
        Available Now
      </button>
    </div>
  );
}

export default FilterBar;
