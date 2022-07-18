import "./Card.css";

function Card(props) {
  //unlike default html block el's card is a custom container and can't take attributes or props except we tel it so, hence the logic... card is to tell it to use that class
  const classes = "card " + props.className;

  //props.children is for the content inside of the card... "children is a reserved name"
  // we point at the constant inside of the className to make it finally work

  return <div className={classes}>{props.children}</div>;
}

export default Card;