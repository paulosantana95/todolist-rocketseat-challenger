import styles from "./TasksContainer.module.css";
import { Task } from "./Task";
import { Clipboard } from "./Clipboard";
import { TasksType } from "./TodoList";
// import { useState } from "react";

interface TasksContainerProps {
  tasks: TasksType[];
  deleteTask: (taskToDelete: TasksType) => void;
}

export function TasksContainer({ tasks, deleteTask }: TasksContainerProps) {
  function onDeleteTask(taskToDelete: TasksType) {
    deleteTask(taskToDelete);
  }

  return (
    <div className={styles.tasks}>
      {tasks.length === 0 ? (
        <Clipboard />
      ) : (
        tasks.map((task) => {
          return <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />;
        })
      )}
    </div>
  );
}
