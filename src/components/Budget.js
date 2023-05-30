import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
  const { budget, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  function checkBudget(value) {
    if (value > 20000) {
      alert("The value cannot exceed  £20,000");
      return;
    }

    if (value < 960) {
      alert("The value cannot be less than the amount spent so far");
      return;
    }

    return setNewBudget(value)

  }

  
  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}<input
        required='required'
        type='number'
        id='newBudget'
        step='10'
        value={newBudget}
        style={{ marginLeft: '0.2rem', size: 10 }}
        onChange={(event) => checkBudget(event.target.value)}>
      </input></span>
    </div>
  );
};
export default Budget;
