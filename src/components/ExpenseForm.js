import "./ExpenseForm.css";

import React, { useState } from "react";

export default function ExpenseForm(props) {
  const [firstTitle, secondTitle] = useState("");
  const [firstAmount, secondAmount] = useState("");
  const [firstDate, secondDate] = useState("");

  const TitleChange = function (event) {
    secondTitle(event.target.value);
  };
  const DateChange = function (event) {
    secondDate(event.target.value);
  };
  const AmountChange = function (event) {
    secondAmount(event.target.value);
  };

  const f2 = (event) => {
    event.preventDefault();

    const expenseData = {
      title: firstTitle,
      amount: firstAmount,
      date: new Date(firstDate),
    };

    props.onSaveExpenseData(expenseData);
    secondTitle("");
    secondAmount("");
    secondDate("");
  };

  return (
    <form onSubmit={f2}>
      <div className="new-expense__actions">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={firstTitle} onChange={TitleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={firstAmount}
              onChange={AmountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={firstDate}
              onChange={DateChange}
            />
          </div>
        </div>
        <div>
        <button type="submit" onClick={props.onCancel}> Cancel</button>
        <button type="submit"> Add expense</button>
        </div>
    </div>
    </form>
  );
}

// const [firstInput, secondInput] = useState({
//     firstTitle :"",
//     firstDate:'',
//     firstAmount:''
//    })

//    const TitleChange = function(event){
//        secondInput({
//         ...firstInput,
//         firstTitle:event.target.value

//    })
// }
//    const DateChange = function(event){
//     secondInput({
//      ...firstInput,
//      firstDate:event.target.value

// })
//    }

// const AmountChange = function(event){
//     secondInput({
//      ...firstInput,
//      firstAmount:event.target.value

// })
// }

//    const f2= function(event){
//     event.preventDefault();
//         secondInput({
//         firstDate:"",
//         firstTitle:"",
//         firstAmount:""

//    })
//    }
