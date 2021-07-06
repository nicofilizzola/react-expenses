import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  } else {
    return props.items.map((element) => (
      <ul className="expenses-list" key={element.id} /* performance */>
        <ExpenseItem
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      </ul>
    ));
  }
};

export default ExpensesList;
