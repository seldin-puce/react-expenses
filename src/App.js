import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: Math.random().toString(),
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28)
    },
    {
      id: Math.random().toString(),
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 28)
    },
    {
      id: Math.random().toString(),
      title: "New TV",
      amount: 799.49,
      date: new Date(2022, 6, 28)
    },
    {
      id: Math.random().toString(),
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 9, 28)
    },
  ]);

  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    })
  };

  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
  );
};

export default App;
