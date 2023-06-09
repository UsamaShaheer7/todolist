import react from "react";

const Composition = (props) => {
  return (
    <>
      <div className="card">{props.children}</div>
    </>
  );
};
export default Composition;
