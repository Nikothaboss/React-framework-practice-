import { useEffect, useState } from 'react';

const Test = ({ url }) => {
  const [myData, setMyData] = useState(url);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(myData);
      const data = await response.json();
      setMyData(data);
    } catch {
      setError(true);
      console.log('error could not fetch');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div className='App'>
      {myData.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
};

export default Test;
