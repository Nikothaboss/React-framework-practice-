import React from 'react';
import { useDritIBuksa } from '../util/fetch';

const url = 'https://fakestoreapi.com/products';

const NikolaiTest = () => {
  const { data, error, isLoaded } = useDritIBuksa(url);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
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
