import './App.scss';
import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';



function App() {

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    function fetchData() {
      const url = 'https://rickandmortyapi.com/api/character' + (currentPage > 0 ? '/?page=' + currentPage : '');

      fetch(url)
        .then(response => response.json())
        .then(data => {
          setCharacters(prev => [...prev, ...data.results]);
          setCurrentPage(prev => prev + 1);
          setTotalPages(data.info.pages);

        })
        .finally(() => setFetching(false));
    }
    if (fetching) {
      fetchData();
    }
  }, [fetching, currentPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, );

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && currentPage <= totalPages) {
      setFetching(true);
    }
  }

  return (
    <div className="App">
      <Gallery characters={characters} />
    </div >
  );
}

export default App;
