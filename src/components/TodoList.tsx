import { useState } from "react";
import { Input } from "./Input";
import { TasksContainer } from "./TasksContainer";
import { TasksHeader } from "./TasksHeader";

export interface TasksType {
  id: number;
  check: boolean;
  content: string;
}

const initialList: TasksType[] = [
  { id: 1, check: false, content: "Estudar React feito um maníaco!" },
  {
    id: 2,
    check: false,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
];

export function TodoList() {
  const [tasks, setTasks] = useState(initialList);

  function createNewTask(taskToCreate: TasksType) {
    setTasks([...tasks, taskToCreate]);
  }

  function checkTask(taskToCheck: TasksType) {
    const taskToCheckIndex = tasks.findIndex(
      (task) => task.id === taskToCheck.id
    );

    const newTasks = [...tasks];

    newTasks[taskToCheckIndex].check = taskToCheck.check;
    setTasks(newTasks);
  }

  function deleteTask(taskToDelete: TasksType) {
    const taskWithoutDeletedOne = tasks.filter(
      (task) => task.id !== taskToDelete.id
    );
    setTasks(taskWithoutDeletedOne);
  }

  return (
    <div>
      <Input createNewTask={createNewTask} />
      <TasksHeader tasks={tasks} />
      <TasksContainer
        tasks={tasks}
        deleteTask={deleteTask}
        checkTask={checkTask}
      />
    </div>
  );
}
