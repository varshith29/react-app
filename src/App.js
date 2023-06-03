import Expenses from './components/Expenses';

import React, { useState } from 'react';
import NewExpense from './components/newExpense'

const INITIAL = [
  {
    id: '1',
    title: 'Car',
    amount: 1000000,
    date: new Date(2020, 7, 14),
  },
{
    id: '2',
    title: 'Bike',
    amount: 100000,
    date: new Date(2021, 2, 28),
  },
  {
    id: '3',
    title: 'AC',
    amount: 45000,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  const [expenses, newExpense] = useState(INITIAL)
  
   const AddExpense = function(exp){
   
    newExpense([exp, ...expenses])  
  }

  

  return (
    <div>
      <NewExpense onAddExpense={AddExpense}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;