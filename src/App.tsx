import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";

import { TaskType, ToDoList } from "./components/ToDoList";
import { FormForTodo } from "./components/FormForTodo";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([
    {
      id: 1,
      title: "Learn HTML,CSS",
      isDone: true,
    },
    {
      id: 2,
      title: "Learn JS",
      isDone: true,
    },
    {
      id: 3,
      title: "Learn React",
      isDone: true,
    },
    {
      id: 4,
      title: "Learn Redux",
      isDone: false,
    },
  ]);

  // Function change flag Task-----------------------------------------------------------------
  const changeFlag = (task: TaskType) => {
    const currentTasks = [...tasks];
    currentTasks.forEach((item) => {
      if (item.id === task.id) {
        item.isDone = !task.isDone;
        setTasks(currentTasks);
      }
    });
  };

  //  Function delete task----------------------------------------------------------------------
  const deleteTask = (id: number) => {
    const currentTasks = tasks.filter((t) => t.id !== id);
    setTasks(currentTasks);
  };

  //   Function add new task------------------------------------------------------------------
  const addTask = (value: string) => {
    const currentTasks = [...tasks];
    if (value === "") {
      alert(`Write what you want to do!!! This form couldn't be empty!!!`);
    } else {
      currentTasks.push({
        title: value,
        id: tasks.length + 1,
        isDone: false,
      });
    }
    setTasks(currentTasks);
  };

  //   Filter tasks-------------------------------------------------------------------------------
  const [filter, setFilter] = useState<FilterValuesType>("all");

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value);
  };

  let tasksForTodoList = tasks;
  if (filter === "completed") {
    tasksForTodoList = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodoList = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="app">
      <Header />
      <FormForTodo title="Don't forget about your plans" addTask={addTask} />
      <ToDoList
        tasks={tasksForTodoList}
        deleteTask={deleteTask}
        changeFlag={changeFlag}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
