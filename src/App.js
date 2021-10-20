import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [items, setItems] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = value => {
    setSearchQuery(value);
    setItems([]);
    setPage(1);
  };

  const btnClick = () => {
    setPage(prevState => prevState + 1);
  };

  const toggleLoader = () => {
    setShowLoader(prevState => !prevState);
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    async function API(searchQuery = '', page = 1) {
      axios.defaults.baseURL = 'https://rickandmortyapi.com/api';
      toggleLoader();
      const { data } = await axios.get(
        `/character?name=${searchQuery}&page=${page}`,
      );
      toggleLoader();

      setItems(prevState => [...prevState, ...data.results]);
      setTotalPages(data.info.pages);
      setShowLoader(false);
    }

    API(searchQuery, page);
    isFirstRender.current = false;
  }, [page, searchQuery]);

  return (
    <div className="app">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery items={items} />
      {items.length !== 0 && totalPages !== 1 && page !== totalPages && (
        <Button text="Load More" onClick={btnClick} />
      )}
      {showLoader && <Loader className="loader" />}
    </div>
  );
}
