import './App.scss';
import React from 'react';
import Gallery from './components/Gallery';



function App() {

  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    function fetchData() {
      const url = 'https://rickandmortyapi.com/api/character';

      fetch(url)
        .then(response => response.json())
        .then(data => {
          setCharacters(prev => [...prev, ...data.results]);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Gallery characters={characters} />
    </div >
  );
}

export default App;
