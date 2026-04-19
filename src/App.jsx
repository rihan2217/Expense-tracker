import { useEffect, useState } from 'react'
import ThemeContext from './context/ThemeContext';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import ShowExpense from './components/ShowExpense';

function App() {

  const [theme , setTheme] = useState("light");
  
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
  

  function ToggleTheme(){
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  function AddExpenseHandler(expense){
    setExpenses((prevExpenses) => [ ...prevExpenses , expense ]);
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
  return(
    <>
    <ThemeContext.Provider value={{theme , ToggleTheme, SearchExpensebydate, Searchexpensebycategory}}>
      <Navbar/>
      <div className="flex items-center justify-around p-4 mb-2 ">
        <AddExpense onAddExpense={AddExpenseHandler}/>
        <ShowExpense expenses={filteredExpenses} />
      </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App ;
