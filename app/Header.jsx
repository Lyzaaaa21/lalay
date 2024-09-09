import React from 'react'
import { data } from './data';


const filter = data.filter((data) => data.profession ===
"Front end developer");

const Header = () => {
  return (
    <div>

      {data.map((data, key) => (
        <li key={key}>{data.name}</li>

      ))}

     
    </div>

)}

export default Header;


// import React from 'react'
// import { data } from './data';

// const filter = data.filter((data) => data.profession ===
// "Front end developer");

// const Header = () => {
//   return (
//     <div> {data.map((data, key) => (
//               <li key={key}>{data.name}</li>
      
//            ))} </div>
//   )
// }

// export default Header