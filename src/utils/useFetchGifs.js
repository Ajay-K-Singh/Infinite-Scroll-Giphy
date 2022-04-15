import { useState, useEffect, useCallback } from 'react';

function useFetchGifs(page, searchQ) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGiphs] = useState([]);
  const getGifs = useCallback(async () => {
    try {
      if (searchQ) {
        setLoading(true);
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=CVKFXAPCPn6aGM5dK4u2ojarvqV675KG&limit=25&offset=${gifs.length}&rating=g&lang=en&q=${searchQ}`
      );
      const { data } = await response.json();
      setGiphs((prev) => {
        console.log(prev, data, "prev and data");
        return [...prev, ...data]});
      console.log(gifs, 'gifs');
      setLoading(false);
      } else {
        setGiphs([])
      }
      
    } catch (err) {
      console.error(err);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchQ]);

  useEffect(() => {
    getGifs();
  }, [getGifs]);

  return { loading, gifs };
}

export default useFetchGifs;