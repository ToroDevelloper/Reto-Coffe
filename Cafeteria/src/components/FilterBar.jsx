import '../styles/FilterBar.css';

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
