import { useState, useEffect } from 'react';
import CoffeeList from './components/CoffeeList';
import FilterBar from './components/FilterBar';
import './App.css';

const DATA_URL =
  'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';

/**
 * App - Componente raíz
 *
 * ➡️  LIFTING STATE UP:
 *     El estado (coffeeData, filter, loading) vive aquí en el padre.
 *     Se pasa como props a los hijos FilterBar y CoffeeList.
 *     Así FilterBar puede cambiar el filtro y CoffeeList reacciona.
 */
function App() {
  const [coffeeData, setCoffeeData] = useState([]);  // Datos de la API
  const [filter, setFilter] = useState('all');        // Filtro activo
  const [loading, setLoading] = useState(true);       // Estado de carga

  // useEffect - Efecto secundario: fetch de datos al montar
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    fetch(DATA_URL)
      .then((response) => response.json())
      .then((data) => {
        setCoffeeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching coffee data:', error);
        setLoading(false);
      });
  }, []);

  // Filtrar datos según el botón activo
  const filteredCoffee =
    filter === 'all'
      ? coffeeData
      : coffeeData.filter((coffee) => coffee.available);

  return (
    <div className="app">
      {/* Fondo decorativo en la parte superior */}
      <div className="app__bg"></div>

      {/* Contenedor principal centrado */}
      <main className="app__container">
        {/* Encabezado */}
        <header className="app__header">
          <h1 className="app__title">Our Collection</h1>
          <p className="app__description">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly crafted to deliver
            a premium coffee experience.
          </p>

          {/* FilterBar recibe filter y setFilter como props */}
          <FilterBar filter={filter} setFilter={setFilter} />
        </header>

        {/* CoffeeList recibe los datos filtrados y el estado de carga */}
        <CoffeeList coffees={filteredCoffee} loading={loading} />
      </main>
    </div>
  );
}

export default App;
