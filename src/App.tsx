import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
