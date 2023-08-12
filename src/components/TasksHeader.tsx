import styles from "./TasksHeader.module.css";
import { TasksType } from "./TodoList";

interface TasksHeaderProps {
  tasks: TasksType[];
}

export function TasksHeader({ tasks }: TasksHeaderProps) {
  function checkCompletedTasks() {
    const completedTasks = tasks.filter((tasks) => tasks.check === true).length;
    return completedTasks;
  }

  return (
    <div className={styles.headerTasks}>
      <div className={styles.createdTasks}>
        <h3>Tarefas criadas</h3>
        <span>{tasks.length}</span>
      </div>
      <div className={styles.completedTasks}>
        <h3>Concluídas</h3>
        <span>{`${checkCompletedTasks()} de ${tasks.length}`}</span>
      </div>
    </div>
  );
}
