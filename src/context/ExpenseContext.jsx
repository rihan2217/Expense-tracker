import { createContext, useState, useEffect } from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      try {
        return JSON.parse(storedExpenses);
      } catch (error) {
        console.error("Error parsing stored expenses:", error);
        localStorage.removeItem("expenses");
        return [];
      }
    }
    return [];
  });

  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [filters, setFilters] = useState({ date: "", category: "" });

  function applyFilters(date, category) {
    let filtered = expenses;
    if (date) filtered = filtered.filter(expense => expense.date === date);
    if (category) filtered = filtered.filter(expense => expense.category === category);
    setFilteredExpenses(filtered);
  }

  function AddExpenseHandler(expense) {
    setExpenses(prev => [...prev, { ...expense, id: crypto.randomUUID() }]);
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    applyFilters(filters.date, filters.category);
  }, [expenses]);

  function SearchExpensebydate(date) {
    const newFilters = { ...filters, date };
    setFilters(newFilters);
    applyFilters(newFilters.date, newFilters.category);
  }

  function Searchexpensebycategory(category) {
    const newFilters = { ...filters, category };
    setFilters(newFilters);
    applyFilters(newFilters.date, newFilters.category);
  }

  function clearFilters() {
    setFilters({ date: "", category: "" });
    setFilteredExpenses(expenses);
  }

  function DeleteExpenseHandler(id) {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  }

  return (
    <ExpenseContext.Provider value={{
      expenses,
      filteredExpenses,
      DeleteExpenseHandler,
      SearchExpensebydate,
      Searchexpensebycategory,
      clearFilters,
      AddExpenseHandler
    }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;