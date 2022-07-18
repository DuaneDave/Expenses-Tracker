import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//state must be called only in a components func not in a nested func or outsiade

//we could receive the atributes from the app on the expenseitem as props (args inside the ExpenseItem), but the Components can only receive 1 arg

const ExpenseItem = (props) => {
  //props recieves those attr and can be used here

  //return can oonly return one statment .. nice to wrap around div or ()
  //props.title cos we called it title as the attr

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("mumu");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>click</button>
    </Card>
  );
};

export default ExpenseItem;
