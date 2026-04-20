import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext';

const Total = () => {


const {filteredExpenses} = useContext(ExpenseContext);

const total = filteredExpenses.reduce((acc, elem) => acc + elem.amount, 0);

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(2) + "B"; // Millions
  }
  if (amount >= 10000000) {
    return (amount / 10000000).toFixed(2) + "M"; // Millions
  } else if (amount >= 100000) {
    return (amount / 100000).toFixed(2) + "L";   // Lakhs
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(2) + "K";     // Thousands
  }
  return amount;
};

  return (
    <div className="bg-blue-400 dark:bg-gray-800 shadow-lg rounded-lg p-4 m-2 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total</h3>
        <h3 className="text-lg text-black dark:text-white">₹{formatAmount(total)}</h3>
      </div>
    </div>
  )
}

export default Total