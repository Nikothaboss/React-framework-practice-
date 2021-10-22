import React from 'react';
import { useState } from 'react';
import { useFetch } from '../util/fetch';

const url = 'http://localhost:1337/articles';


const NikolaiTest = () => {
  
  const { response, loading, hasError } = useFetch(url);

  if (hasError) {
    return <div>Error...</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {response.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          {/* <img src={item.image} alt='' /> */}
        </div>
      ))}
    </div>
  );
};

export default NikolaiTest;
