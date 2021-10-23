// import React from 'react';
// import { useFetch } from '../../util/fetch';
// import { Niko } from './nikolaiStyles';

// const url = 'http://localhost:1337/articles';

// const NikolaiTest = () => {

//   const { response, loading, hasError } = useFetch(url);

//   if (hasError) {
//     return <div>Error...</div>;
//   }
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <Niko>
//       {response.map((item) => (
//         <div key={item.id}>
//           <h4>{item.title}</h4>
//           <img src={item.image} alt='' />
//         </div>
//       ))}
//     </Niko>
//   );
// };

// export default NikolaiTest;
