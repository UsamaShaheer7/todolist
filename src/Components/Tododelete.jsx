import React from "react";

const Tododelete = (props) => {
  return (
    <>
    <div classname="button">
      <li className="item">
        {props.item}
        <button
          className="delete-button"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Delete
        </button>
        </li>
        </div>
    </>
  );
};
export default Tododelete;
