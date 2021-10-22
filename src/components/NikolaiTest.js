import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useDritIBuksa } from '../util/fetch';

const url = 'https://fakestoreapi.com/products';
// const url1 = 'https://fakestoreapi.com/products/category/jewelery';

const NikolaiTest = () => {
  const { data, error, isLoaded } = useDritIBuksa(url);

  if (error) {
    return <div>Error...</div>;
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
