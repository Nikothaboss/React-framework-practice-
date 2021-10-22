import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useDritIBuksa } from '../util/fetch';

const url = 'https://fakestoreapi.com/products';
const url2 = 'https://fakestoreapi.com/products/category/jewelery';

const NikolaiTest = () => {
  const [myUrl, setMyUrl] = useState(url);
  const { data, error, isLoaded } = useDritIBuksa(myUrl);

  if (error) {
    return <div>Error...</div>;
  }
  if (isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button onClick={() => setMyUrl(url2)}>Jewelery</button>
      <button onClick={() => setMyUrl(url)}>Clothes</button>
      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <img src={item.image} alt='' />
        </div>
      ))}
    </div>
  );
};

export default NikolaiTest;
