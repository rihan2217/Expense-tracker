import { useState } from "react";
import SearchExpense from "./SearchExpense";


function AddExpense({onAddExpense}){


    const [inputname , setInputName] = useState("");
    const [inputdate , setInputDate] = useState("");
    const [inputcategory , setInputCategory] = useState("");
    const [inputamount , setInputAmount] = useState("");

    

    return(
        <div className=" w-[45vw] h-[80vh] p-4 mb-2  text-white bg-blue-400 dark:text-white dark:bg-blue-950 dark:border-gray-700 border-2 border-blue-400 rounded">
            <h1 className="text-2xl font-bold text-white text-center mb-2">Add Expense</h1>
            <div className="flex flex-col justify-evenly gap-4 mb-2">
                <input type="text" placeholder="Enter Expense Name" className="p-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setInputName(e.target.value)}
                value={inputname}/>
                <input type="date" placeholder="Enter Expense Date" className="p-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setInputDate(e.target.value)}
                value={inputdate}/>
                <section className="flex items-center gap-4">
                    <label className="text-lg font-semibold text-gray-700 dark:text-gray-300">Select Category:</label>
                    <select className="p-2 border-2 text-gray-800 dark:text-gray-500 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setInputCategory(e.target.value)}
                    value={inputcategory}>
                        <option value="">Select Category</option>
                        <option value="food">Food</option>
                        <option value="transportation">Transportation</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="utilities">Utilities</option>
                        <option value="other">Other</option>
                    </select>
                </section>
                <input type="number" placeholder="Enter Expense Amount" className="p-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setInputAmount(e.target.value)}
                value={inputamount}/>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => {
                    onAddExpense({
                        name: inputname,
                        date: inputdate,
                        category: inputcategory,
                        amount: inputamount
                    });
                }}>Add Expense</button>
            </div>
            <SearchExpense/>
        </div>
    )

}

export default AddExpense;