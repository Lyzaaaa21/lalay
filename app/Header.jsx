import React from 'react'
import { data } from './data';


const filter = data.filter((data) => data.profession ===
"Front end developer");

const Header = () => {
  return (
    <div>

      {data.map((data, key) => (
        <ol>

        <li key={key}>{data.name} </li> 
        <li key={key}>{data.profession}</li> 
        <li key={key}>{data.age}</li> 
        <li key={key}>{data.username}</li> 
        <li key={key}>{data.email}</li> 
        <li key={key}>{data.phone}</li> 
        
        
        </ol>

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