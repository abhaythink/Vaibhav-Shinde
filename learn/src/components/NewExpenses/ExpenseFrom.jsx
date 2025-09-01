import React from "react";
const TitleChangeHandler=(event)=>{
    console.log(event.target.value); //now
}
const ExpenseForm=()=>{
    return <form action="">
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={TitleChangeHandler}/>
            </div>
             <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min="0.01" step="0.01" name="" id="" />
            </div>
             <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" name="" id="" min="2019-01-01" max="2022-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>

}
export default ExpenseForm;