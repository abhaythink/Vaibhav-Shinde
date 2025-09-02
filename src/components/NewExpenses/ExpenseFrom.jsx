import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterdTitle] = useState("");
  const [amountChange, setAmountChange] = useState("");
  const [dateChange, setDateChange] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enterdDate: "",
  //   });
  const TitleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle :event.target.value};
    // });
  };

  const AmountChangeHandler = (event) => {
    setAmountChange(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const DateChangeHandler = (event) => {
    setDateChange(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdDate: event.target.value,
    // });
  };

  const InputChangeHandler = (inputType, value) => {
    if (inputType == "title") {
      setEnterdTitle(value);
    } else if (inputType == "amount") {
      setAmountChange(value);
    } else {
      setDateChange(value);
    }
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: amountChange,
      date: new Date(dateChange),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setAmountChange('');
    setDateChange('');
    setEnterdTitle('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              InputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name=""
            value={amountChange}
            id=""
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name=""
            id=""
            value={dateChange}
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
