import styles from "./Clipboard.module.css";
import clipboard from "../assets/clipboard.svg";

export function Clipboard() {
  return (
    <div className={styles.emptyTasks}>
      <img src={clipboard} />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
