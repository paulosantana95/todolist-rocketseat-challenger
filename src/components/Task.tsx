import { useState } from "react";
import styles from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";
import { TasksType } from "./TodoList";

interface TaskProps {
  task: TasksType;
  onDeleteTask: (taskToDelete: TasksType) => void;
}

export function Task({ task, onDeleteTask }: TaskProps) {
  const [checked, setChecked] = useState(false);

  function handleCheckBox() {
    setChecked(!checked);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <div className={styles.taskContent}>
          <div>
            <input type="checkbox" onChange={handleCheckBox} />
            <p className={checked ? styles.check : ""}>{task.content}</p>
          </div>
          <button onClick={handleDeleteTask}>
            <Trash size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
