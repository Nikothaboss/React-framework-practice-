// import { useEffect, useState } from 'react';
import Test from './components/Test';
// import { FetchFromTestApp } from './util/helpers';
const url = 'https://fakestoreapi.com/products';

function App() {
  return <Test url={url} />;
}

export default App;
