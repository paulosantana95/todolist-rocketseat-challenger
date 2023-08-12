import styles from "./TasksContainer.module.css";
import { Task } from "./Task";
import { Clipboard } from "./Clipboard";
import { TasksType } from "./TodoList";

interface TasksContainerProps {
  tasks: TasksType[];
  deleteTask: (taskToDelete: TasksType) => void;
  checkTask: (taskToCheck: TasksType) => void;
}

export function TasksContainer({
  tasks,
  deleteTask,
  checkTask,
}: TasksContainerProps) {
  function onCheckTask(taskToCheck: TasksType) {
    checkTask(taskToCheck);
  }

  function onDeleteTask(taskToDelete: TasksType) {
    deleteTask(taskToDelete);
  }

  return (
    <div className={styles.tasks}>
      {tasks.length === 0 ? (
        <Clipboard />
      ) : (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onCheckTask={onCheckTask}
            />
          );
        })
      )}
    </div>
  );
}
