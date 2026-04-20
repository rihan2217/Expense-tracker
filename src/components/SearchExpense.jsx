import React, { useContext, useState } from 'react';
import ExpenseContext from '../context/ExpenseContext';

const SearchExpense = () => {
  const { SearchExpensebydate, Searchexpensebycategory, clearFilters } = useContext(ExpenseContext);

  const [searchDate, setSearchDate] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  function handleClear() {
    setSearchDate("");
    setSearchCategory("");
    clearFilters();
  }

  return (
    <div className="w-full p-2 mb-2 dark:bg-blue-950 dark:text-white dark:border-gray-700 border-2 border-blue-400 bg-white rounded">
      <h1 className="text-2xl font-bold text-blue-600 text-center mb-2">Search Expense</h1>
      <div className="flex flex-col items-center gap-2 justify-around p-2 bg-blue-400 dark:bg-blue-950 dark:text-white dark:border-gray-700 border-2 border-blue-400 rounded">
        
        <div className="flex items-center gap-2">
          <label className="text-lg font-semibold">Search by Category:</label>
          <select
            value={searchCategory}
            className="p-2 border-2 text-gray-800 dark:text-gray-500 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setSearchCategory(e.target.value);
              Searchexpensebycategory(e.target.value);
            }}>
            <option value="">All Categories</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex items-center gap-8">
          <label className="text-lg font-semibold">Search by date:</label>
          <input
            type="date"
            value={searchDate}
            className="p-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setSearchDate(e.target.value);
              SearchExpensebydate(e.target.value);
            }} />
        </div>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleClear}>
          Clear Search
        </button>

      </div>
    </div>
  );
};

export default SearchExpense;