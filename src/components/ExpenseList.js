import ExpenseItem from './ExpenseItem'

import './ExpenseList.css'

export default function ExpenseList(props){
    
   if (props.items.length === 0) 
   return <h2 id="id1">No expenses Found!</h2> 

       return (
        <ul>
        {
            props.items.map((exp) => (
                <ExpenseItem
                 key={exp.id}
                 title= {exp.title}
                 amount={exp.amount} 
                 date={exp.date} 
                 />
                 ) )
        }
        </ul>
    )
    }