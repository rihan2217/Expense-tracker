import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


function Navbar(){

    const {theme , ToggleTheme} = useContext(ThemeContext);


    return(
        <div className="flex items-center justify-around p-4 mb-2 dark:bg-blue-950 text-white dark:text-white dark:border-gray-700 border-b-2 border-blue-400 bg-white">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-white border-2 p-2 rounded">Expense Tracker</h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={ToggleTheme}
            >{theme}</button>
        </div>
    )
}

export default Navbar;