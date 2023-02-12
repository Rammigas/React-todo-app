import React, { useState } from "react";
import classes from "./FormForTodo.module.css";
type FormType = {
  title: string;
  addTask: Function;
};

export function FormForTodo(props: FormType) {
  const [value, setValue] = useState("");

  const changeValue = (event: any) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    props.addTask(value);
    setValue("");
  };

  return (
    <div className={classes.form__container}>
      <h3>{props.title}</h3>
     <div className={classes.input__box}>
	  <input
        type="text"
        value={value}
        onChange={changeValue}
        placeholder="Write what to do"
      />
      <button onClick={handleClick}>Add Task</button>
	  </div>
    </div>
  );
}
