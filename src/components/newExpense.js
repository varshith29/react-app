import './newExpense.css'
import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm'
export default function NewExpense(props){

    const [oldOne, newOne] = useState(false)
     
    const exec= () => {
        newOne(true)
    }
    const stopEdit= () =>{
        newOne(false)
    }

    const newExp= (enteredExp) => {
       
        props.onAddExpense(enteredExp);
        newOne(false)
    }
    return (
        <div className='new-expense'>
        {!oldOne && (<button onClick={exec}>Add new Expense</button> )}
        { oldOne && (<ExpenseForm onSaveExpenseData={newExp} onCancel={stopEdit}/>) }
        </div>
    )
}