import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./App.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpenses/NewExpense";
const App=()=> {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2021, 2, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 94.67,
      date: new Date(2021, 2, 28),
    },
    { id: "e3", title: "New TV", amount: 24.67, date: new Date(2021, 2, 18) },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 29.67,
      date: new Date(2021, 2, 12),
    },
  ];

  return (
    <Card className="app">
      <NewExpense/>
      <ExpenseItem
       ex={expense[0]}
      />
      <ExpenseItem
        ex={expense[1]}
      />
      <ExpenseItem
         ex={expense[2]}
      />
      <ExpenseItem
        ex={expense[3]}
      />
    </Card>
  );
}

export default App;
