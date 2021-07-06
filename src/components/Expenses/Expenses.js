import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const SelectHandler = (filter) => {
    setSelectedFilter(filter);
  };

  let filteredExpenses = [...props.expenses];
  filteredExpenses = filteredExpenses.filter(
    (element) => element.date.getFullYear() === parseInt(selectedFilter)
  );

  const dataPointsManager = (expenses, maxValue) => {
    let dataPoints = [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 0 },
      { label: "Mar", value: 0 },
      { label: "Apr", value: 0 },
      { label: "May", value: 0 },
      { label: "Jun", value: 0 },
      { label: "Jul", value: 0 },
      { label: "Aug", value: 0 },
      { label: "Sep", value: 0 },
      { label: "Oct", value: 0 },
      { label: "Nov", value: 0 },
      { label: "Dec", value: 0 },
    ];
    for (let expense of expenses) {
      dataPoints[expense.date.getMonth()].value += expense.amount;
    }
    return dataPoints;
  };
  const maxValueManager = (expenses) => {
    const expensesValues = expenses.map((expense) => expense.amount);
    const maxValue = Math.max(...expensesValues);
    return maxValue;
  };

  const maxValue = maxValueManager(filteredExpenses);
  const dataPoints = dataPointsManager(filteredExpenses, maxValueManager);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelect={SelectHandler} filter={selectedFilter} />
        <Chart dataPoints={dataPoints} maxValue={maxValue} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
