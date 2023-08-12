import styles from "./TasksHeader.module.css";
import { TasksType } from "./TodoList";

interface TasksHeaderProps {
  tasks: TasksType[];
}

export function TasksHeader({ tasks }: TasksHeaderProps) {
  return (
    <div className={styles.headerTasks}>
      <div className={styles.createdTasks}>
        <h3>Tarefas criadas</h3>
        <span>{tasks.length}</span>
      </div>
      <div className={styles.completedTasks}>
        <h3>Concluídas</h3>
        <span>0</span>
      </div>
    </div>
  );
}
