import { useState, useEffect } from 'react';
import CoffeeList from './components/CoffeeList';
import FilterBar from './components/FilterBar';
import './App.css';

const DATA_URL =
  'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const filteredCoffee =
    filter === 'all'
      ? coffeeData
      : coffeeData.filter((coffee) => coffee.available);

  return (
    <div className="app">
      <div className="app__bg"></div>

      <main className="app__container">
        <header className="app__header">
          <h1 className="app__title">Our Collection</h1>
          <p className="app__description">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly crafted to deliver
            a premium coffee experience.
          </p>

          <FilterBar filter={filter} setFilter={setFilter} />
        </header>

        <CoffeeList coffees={filteredCoffee} loading={loading} />
      </main>
    </div>
  );
}

export default App;
