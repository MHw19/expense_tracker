import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';

function Expenses(props){
 
const [filteredYear, setFilteredYear]=useState('2019');

const filterChangeHandler =(selectDate)=>{
  setFilteredYear(selectDate);

}

const filterdYearExpense =props.item.filter(expense => {
  return expense.date.getFullYear().toString()===filteredYear
})

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseList item={filterdYearExpense}/>
    </Card>
    </div>
  );
   
}

export default Expenses;