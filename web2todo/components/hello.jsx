export const Hello = (props) => {
  const h1_style = { "color": "red" };
  return (
    <>
      <h1 style={h1_style}>Hello {props.firstname}!</h1>
    </>
  );
}