import React from 'react';
import { useFetch } from '../../util/fetch';
import Loader from '../../util/Loader';
import { StyledMain } from './Main.styled';

const url = 'https://fakestoreapi.com/products?limit=8';

const Main = () => {
  const { response, loading } = useFetch(url);
  return (
    <StyledMain>
      <header className='headline'>
        <h1>
          This is an example of light and dark mode in <br /> Chakra UI
        </h1>
      </header>
      {loading && <Loader />}
      <article className='cards-container'>
        {response.map((item) => {
          const { id, title, image } = item;
          return (
            <div key={id} className='card'>
              <img src={image} alt='' />
              <h3>{title}</h3>
              <p>our desctiption</p>
            </div>
          );
        })}
      </article>
    </StyledMain>
  );
};

export default Main;
