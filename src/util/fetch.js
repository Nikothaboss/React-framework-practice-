import { useState, useEffect, useCallback } from 'react';

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
  }, [url, fetchData]);

  return { error, isLoaded, data };
};

// ***eksempel under er med useCallback siden det fjerner en warning og har sett det bli brukt andre steder****
// ***husk å legge til: import {useCallback} from 'react';***

// export const useDritIBuksa = (url) => {
//   const [data, setData] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(true);
//   const [error, setError] = useState(false);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//       setIsLoaded(false);
//     } catch {
//       setError(true);
//       console.log('ERRORRRRR');
//     }
//   }, [url]);

//   useEffect(() => {
//     fetchData();
//   }, [url, fetchData]);

//   return { error, isLoaded, data };
// };
