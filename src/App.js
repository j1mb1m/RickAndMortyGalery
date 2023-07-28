import './App.scss';
import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';



function App() {

  const [items, setItems] = useState({ currentPage: 1, totalPages: 1, data: [] });
  const [fetching, setFetching] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {

    function fetchData() {
      const url = 'https://rickandmortyapi.com/api/character' + (items.currentPage > 0 ? '/?page=' + items.currentPage : '');

      fetch(url)
        .then(response => response.json())
        .then(incomingData => {
          setItems({ currentPage: items.currentPage + 1, totalPages: incomingData.info.pages, data: [...items.data, ...incomingData.results] });
        })
        .finally(() => {
          setFetching(false);
          if (!scrolling && document.body.scrollHeight > 100) {
            setScrolling(true);
          }
        }
        );
    }

    if (fetching || (!scrolling && items.currentPage <= items.totalPages)) {
      setTimeout(fetchData, 0);
    }

  }, [fetching, items, scrolling]);


  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  },);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && items.currentPage <= items.totalPages) {
      setFetching(true);
    }
  }

  return (
    <div className="App">
      <Gallery items={items.data} pages={{
        currentPage: items.currentPage,
        totalPages: items.totalPages
      }} />
    </div >
  );
}

export default App;
