import styles from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";
import { TasksType } from "./TodoList";

interface TaskProps {
  task: TasksType;
  onDeleteTask: (taskToDelete: TasksType) => void;
  onCheckTask: (taskToCheck: TasksType) => void;
}

export function Task({ task, onDeleteTask, onCheckTask }: TaskProps) {
  function handleCheckBoxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedTask = { ...task, check: event.target.checked };
    onCheckTask(updatedTask);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <div className={styles.taskContent}>
          <div>
            <input
              type="checkbox"
              checked={task.check}
              onChange={handleCheckBoxChange}
            />
            <p className={task.check ? styles.check : ""}>{task.content}</p>
          </div>
          <button onClick={handleDeleteTask}>
            <Trash size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
