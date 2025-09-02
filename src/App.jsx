import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./App.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpenses/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import { useState ,useEffect} from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const App = () => {
  const [expenses, setExpenses] = useState([
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
  ]);

  const [filterdYear,setFilterdYear]=useState('2020');
  const [filterInfoText,setFilterInfoText]=useState('2019,2021 &2022');
  // const [filteredExpenses,setFilteredExpenses]=useState(expenses);

  const addExpenseHandler = (expense1) => {
    console.log("in App.js");
    console.log(expense1);
    setExpenses((prevExpenses) => [expense1, ...prevExpenses]);
    console.log(expenses);
  };

  useEffect(() => {
  console.log("Expenses updated:", expenses);
}, [expenses]);


  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if(selectedYear=='2019'){
      setFilterInfoText('2020,2021 & 2022');
    }
    else if(selectedYear=='2020'){
      setFilterInfoText('2019,2021 & 2022');
    }
    else if(selectedYear=='2021'){
      setFilterInfoText('2019,2020 & 2022');
    }
    else{
      setFilterInfoText('2019,2020 & 2021')
    }
  };

  // Filter expenses based on year
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter
        textYear={filterInfoText}
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* <ExpensesChart expense={filteredExpenses}/> */}
      <ExpensesList items ={expenses}/>
      
    </Card>
  );
};

export default App;
