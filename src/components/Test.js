import { useEffect, useState } from 'react';
import { useFetch } from '../util/fetch';

const url = 'https://fakestoreapi.com/products';
const url2 = 'https://fakestoreapi.com/products/category/jewelery';

const Test = () => {
  const [myUrl, setMyUrl] = useState(url);
  const { response, loading, hasError } = useFetch(myUrl);

  if (hasError) {
    return <div>Error...</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='App'>
      <button onClick={() => setMyUrl(url2)}>Jewelery</button>
      <button onClick={() => setMyUrl(url)}>Clothes</button>
      {response.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
};

export default Test;
