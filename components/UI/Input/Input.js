import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = ({ id, label, type, isValid, value, onChange, onBlur }, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

//   const isvalid = isValid;

  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
        <label htmlFor={id} >{label}</label>
      <input
        ref={ref}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

const forwardInput = React.forwardRef(Input);

export default forwardInput;
