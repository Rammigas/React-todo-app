import React from "react";
import { FilterValuesType } from "../App";
import classes from "./ToDoList.module.css";
export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export type PropsType = {
  tasks: Array<TaskType>;
  deleteTask: (id: number) => void;
  changeFlag: (task: TaskType) => void;
  changeFilter: (value: FilterValuesType) => void;
};

export function ToDoList(props: PropsType) {
  const handleDelete = (id: number) => (event: any) => {
    props.deleteTask(id);
  };

  const handleChange = (task: TaskType) => (event: any) => {
    props.changeFlag(task);
  };

  return (
    <div className={classes.todo__box}>
      <ul className={classes.list__container}>
        {props.tasks.map((task) => (
          <li key={task.id}>
            <div>
              <label className={classes.checkbox}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={handleChange(task)}
                />
                <span>{task.title}</span>
              </label>
            </div>
            <button onClick={handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className={classes.btn__box}>
        <button onClick={() => props.changeFilter("all")}>All</button>
        <button
          onClick={() => {
            props.changeFilter("active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            props.changeFilter("completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
