import './ExpenseItem.css';


function Expenseitem() {
  return (
    <div className='expense-item'>
      <div >
        March 21 2023</div><div className='expense-item__description'>
        <h2>Car insurance </h2><div className='expense-item__price'>$249.99</div>
      </div>
    </div>
  );
}

export default Expenseitem;