import React, {useState } from 'react';
import GifGallery from './components/GifGallery';
import useInfiniteScroll from './utils/useInfiniteScroll';
import Loader from './components/Loader';
import Header from './components/Header';
import './App.scss';
import useFetchGifs from './utils/useFetchGifs';

function App() {
  const [searchQ, setSearchQ] = useState('');
  const { loadMoreRef, page } = useInfiniteScroll();
  const { loading, gifs } = useFetchGifs(page, searchQ);
  return (
    <div className="App">
      <Header onClick={setSearchQ} />
      <GifGallery gifs={gifs} />
      <div ref={loadMoreRef}>{loading && <Loader />}</div>
    </div>
  );
}

export default App;
