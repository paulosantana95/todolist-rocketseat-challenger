import styles from "./Input.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { TasksType } from "./TodoList";
import React, { InvalidEvent, useState } from "react";

interface InputProps {
  createNewTask: (taskToCreate: TasksType) => void;
}

export function Input({ createNewTask }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  function handleCreateNewTask(event: React.FormEvent<HTMLButtonElement>) {
    event?.preventDefault();

    const newTask = inputValue;
    createNewTask(formatNewTask(newTask));
    setInputValue("");
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setInputValue(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function formatNewTask(newTask: string) {
    return {
      id: Math.random(),
      check: false,
      content: newTask,
    };
  }

  const isNewTaskEmpty = inputValue.trim() === "";

  return (
    <div className={styles.input}>
      <form>
        <input
          type="text"
          name="newTask"
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
          onChange={handleInputChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button
          type="submit"
          onClick={handleCreateNewTask}
          disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
