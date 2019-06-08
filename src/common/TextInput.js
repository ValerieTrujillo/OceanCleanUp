import React from "react";

const TextInput = props => {
  return (
    <div>
      {/* <label htmlFor={props.name}>{props.label}:</label> */}
      <input
        name={props.name}
        className="form-control"
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};
export default TextInput;
