
function Counter(props) {
  let countStyle = {
    color: "green",
  };

  if (props.data.length < 3) {
    countStyle.color = "orange";
  }
  if (props.data.length < 2) {
    countStyle.color = "gray";
  }
  if (props.data.length < 1) {
    countStyle.color = "red";
    countStyle.fontStyle = "italic";
  }
  return (
    <h1 style={countStyle}>{props.children}: {props.data.length}</h1>
  )
}

export default Counter
