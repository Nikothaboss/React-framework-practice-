import React from 'react';
import { useFetch } from '../../util/fetch';
import { StyledMain } from './Main.styled';

const url = 'https://fakestoreapi.com/products?limit=8';

const Main = () => {
  const { response } = useFetch(url);
  return (
    <StyledMain>
      <header className='headline'>
        <h1>
          This is an example of light and dark mode in <br /> Chakra UI
        </h1>
      </header>
      <article className='cards-container'>
        {response.map((item) => {
          const { title, image, description } = item;
          return (
            <div className='card'>
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
