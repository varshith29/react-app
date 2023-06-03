import React, {useState} from 'react';

import Card from './card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter'

import ExpenseList from './ExpenseList';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterExp = props.items.filter(exp => exp.date.getFullYear().toString() === filteredYear)

  
  return (
    <div>
    <Card className="expenses">
    <ExpenseFilter select={filteredYear} onChangeFilter={filterChangeHandler} />

    <ExpenseList items={filterExp} />
       
      
    </Card>
    </div>
  );
}

export default Expenses;

// <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
     