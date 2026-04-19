import React, { useContext } from "react";
import Card from "./Card";
import ExpenseContext from "../context/ExpenseContext";

const ShowExpense = () => {

    const {filteredExpenses} = useContext(ExpenseContext);

  return (
    <div className="w-[45vw] h-[80vh] p-4 mb-2 dark:bg-blue-950 text-white dark:text-white dark:border-gray-700 border-2 border-blue-400 bg-blue-400 rounded">
      <h1 className="text-2xl font-bold text-center">Show Expense</h1>
        {filteredExpenses.map((expense,idx)=> {
                return(
                    <Card key={expense.id || idx} expense={expense} />
                )
            })}
    </div>
  );
};

export default ShowExpense;
