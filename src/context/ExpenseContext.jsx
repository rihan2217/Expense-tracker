import { createContext, useState, useEffect, useContext } from "react";

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
  



 function AddExpenseHandler(expense) {
  setExpenses(prev => [...prev, { ...expense, id: crypto.randomUUID() }]);
}

  useEffect(()=>{
    localStorage.setItem("expenses" , JSON.stringify(expenses));
  },[expenses]);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  function SearchExpensebydate(date){
    if (date) {
      const filtered = expenses.filter(expense => expense.date === date);
      setFilteredExpenses(filtered);
    } else {
      setFilteredExpenses(expenses);
    }
  }

  function Searchexpensebycategory(category){
    if (category) {
      const filtered = expenses.filter(expense => expense.category === category);
      setFilteredExpenses(filtered);
    } else {
      setFilteredExpenses(expenses);
    }
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
      AddExpenseHandler
    }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext
