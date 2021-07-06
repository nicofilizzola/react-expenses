import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const NewExpenseHandler = (expenseData) => props.onNewExpense(expenseData);

  const [expenseFormState, setExpenseFormState] = useState(false);
  const expenseFormStateHandler = (event) => {
    event.preventDefault();
    setExpenseFormState(!expenseFormState);
  };

  const formContent = !expenseFormState ? (
    <div className="new-expense__actions">
      <button onClick={expenseFormStateHandler}>New Expense</button>
    </div>
  ) : (
    <ExpenseForm
        onNewExpense={NewExpenseHandler}
        onCloseForm={expenseFormStateHandler}
      />
  )

  return (
    <div className="new-expense">
      {formContent}
    </div>
  );

};

export default NewExpense;
