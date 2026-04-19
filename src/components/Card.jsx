import React from "react";

const Card = ({ expense }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 m-2 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{expense.name}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{expense.category}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p>Date: {expense.date}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-green-600 dark:text-green-400">${expense.amount}</p>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors duration-200">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
