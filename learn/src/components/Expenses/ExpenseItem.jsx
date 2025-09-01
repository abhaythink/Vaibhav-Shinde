import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
function ExpenseItem(props) {
  // Use props.ex.date instead of props.date
  //   const month = props.ex.date.toLocaleString('en-US', { month: 'long' });
  //   const day = props.ex.date.toLocaleString('en-US', { day: '2-digit' });
  //   const year = props.ex.date.getFullYear();
const [title,setTitle]=useState(props.title);
  const clickHandler=()=>{
    setTitle("Updated !");
  }
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.ex.date} />
      <div className="expense-item__description">
        <h2>{ !title ? props.ex.title:title}</h2>
        <div className="expense-item__price">${props.ex.amount}</div>
      </div> 
      <button onClick={clickHandler}>Change Titile</button>
    </Card>
  );
}

export default ExpenseItem;
