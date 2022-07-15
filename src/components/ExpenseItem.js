import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

//we could receive the atributes from the app on the expenseitem as props (args inside the ExpenseItem), but the Components can only receive 1 arg

function ExpenseItem(props) {
  //props recieves those attr and can be used here

  //return can oonly return one statment .. nice to wrap around div or ()
  //props.title cos we called it title as the attr
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
