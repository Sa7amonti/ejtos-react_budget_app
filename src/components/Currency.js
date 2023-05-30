import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    })
  }


  return (
    <div className='alert alert-success' style={{ backgroundColor: 'lightGreen', color: 'white' }}> Currency {
      <select
        name="Currency"
        id="Currency"
        style={{
          background: 'lightGreen',
          color: 'white',
          border: 'none',
          width: 'auto',
          fontSize: 'large'
        }}
        onChange={event => changeLocation(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£" selected='true'>£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    }
    </div>

  );
};

export default Currency;

// import { useState } from "react";
// import "./Location.css";

// export default function Location() {
//   const [isActive, setIsActive] = useState(false);
//   const [selected, setIsSelected] = useState("");
//   function handleBlur(e) {
//     console.log(e);
//   }
//   return (
//     <div className="App">
//       <div className="dropdown">
//         <div
//           onClick={(e) => {
//             setIsActive(!isActive);
//           }}
//           className="dropdown-btn"
//         >
//           Currency ({selected})
//           <span
//             className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
//           />
//         </div>
//         <div
//           className="dropdown-content"
//           style={{ display: isActive ? "block" : "none" }}
//         >
//           <div
//             onClick={(e) => {
//               setIsSelected(e.target.textContent);
//               setIsActive(!isActive);
//             }}
//             className="item"
//           >
//             $ Dollar
//           </div>
//           <div
//             className="item"
//             onClick={(e) => {
//               setIsSelected(e.target.textContent);
//               setIsActive(!isActive);
//             }}
//           >
//             £ Pound
//           </div>
//           <div
//             className="item"
//             onClick={(e) => {
//               setIsSelected(e.target.textContent);
//               setIsActive(!isActive);
//             }}
//           >
//             € Euro
//           </div>
//           <div
//             onClick={(e) => {
//               setIsSelected(e.target.textContent);
//               setIsActive(!isActive);
//             }}
//             className="item"
//           >
//             ₹ Ruppee
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


