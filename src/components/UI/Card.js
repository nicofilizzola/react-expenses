const Card = (props) => {
  const defaultClass = "card ";
  
  return <div className={defaultClass + props.className}>{props.children}</div>;
};

export default Card;
