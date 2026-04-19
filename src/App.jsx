import { useEffect, useState } from 'react'
import ThemeContext from './context/ThemeContext';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import ShowExpense from './components/ShowExpense';
import { ExpenseProvider } from './context/ExpenseContext';
function App() {

  
  const [theme , setTheme] = useState("light");

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

  return(
    <>
    <ThemeContext.Provider value={{theme , ToggleTheme}}>
      <ExpenseProvider>
      <Navbar/>
      <div className="flex items-center justify-around p-4 mb-2 ">
        <AddExpense />
        <ShowExpense />
      </div>
      </ExpenseProvider>
    </ThemeContext.Provider>
    </>
  )
}

export default App ;
