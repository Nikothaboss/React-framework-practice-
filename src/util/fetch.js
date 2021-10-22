import { useState, useEffect } from 'react';

export const useDritIBuksa = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoaded(false);
    } catch {
      setError(true);
      console.log('ERRORRRRR');
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { error, isLoaded, data };
};
