import './App.scss';
import React, { useEffect, useRef, useState } from 'react';
import Pagination from './components/Pagination';
import { API_CHARACTER_WITHPAGE } from './constants/api';
import { getApiResource } from './utils/network';
import { withErrorApi } from './hoc/withErrorApi';
import Header from './layout/Header';
import { headerEvents } from './components/events';
import Loader from './components/loader';
import Card from './components/Card';
import ScrollToTop from './components/ScrollToTop';
import Modal from './components/modal';

function App({ setErrorApi }) {

  const [togglePagination, setTogglePagination] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useRef(1);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollToUp, setScrollToUp] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const charactersList = res.results.map(({ id, name, image, status, species, gender, origin, location }) => {
        return { id, name, image, status, species, gender, origin: origin.name, location: location.name };
      })

      if (togglePagination)
        setCharacters(charactersList);
      else
        setCharacters(prev => [...prev, ...charactersList]);

      totalPages.current = res.info.pages;
      setCurrentPage(prevPage => prevPage + 1);
      setErrorApi(false);
    }
    else
      setErrorApi(true);

    setIsLoading(false);
  }

  const scrollHandler = (e) => {
    if (togglePagination) return;

    if (Math.floor(e.target.documentElement.scrollTop) > 100) {
      setScrollToUp(true);
    }
    else setScrollToUp(false);

    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    /*     getResource(API_CHARACTER_WITHPAGE + currentPage); */
    setIsLoading(true);
  }

  useEffect(() => {
    if (totalPages > 0 && totalPages < currentPage) return;

    if (isLoading) {
      getResource(API_CHARACTER_WITHPAGE + currentPage);
    }
    // eslint-disable-next-line 
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    headerEvents.addListener('EPageSwitchClicked', changeTypePageLoading);
    return function () {
      window.removeEventListener('scroll', scrollHandler);
      headerEvents.addListener('EPageSwitchClicked', changeTypePageLoading);
    }
    // eslint-disable-next-line 
  }, [togglePagination, isLoading]);


  const paginate = (number) => {
    setCurrentPage(number);
    setIsLoading(true);

  }

  const changeTypePageLoading = (state) => {
    setCharacters([]);
    setCurrentPage(1);
    setTogglePagination(state);
    setIsLoading(true);
  }

  const modalFormClicked = (modalActive, selectedItem = null) => {
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    setModalActive(modalActive);
    setSelectedItem(selectedItem);

  }

  const selectCard = (currentItem) => {
    modalFormClicked(true, currentItem);
  }

  return (
    <>
      <Header />
      <div className="App">

        {togglePagination && <Pagination currentPage={currentPage} totalPages={totalPages.current} cbPaginate={paginate}></Pagination>}
        <div className='ItemGallery'>
          {
            characters.map(item =>
              <Card key={item.id} item={item} cbSelectCard={selectCard} />
            )
          }
        </div>
        {
          selectedItem && <Modal active={modalActive} setActive={modalFormClicked} item={selectedItem} />
        }
        {<ScrollToTop showComponent={!selectedItem && scrollToUp} />}
        {isLoading && (<Loader showComponent={true}></Loader>)}
      </div >
    </>

  );
}

export default withErrorApi(App);
