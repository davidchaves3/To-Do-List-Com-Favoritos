import { useState } from "react";
import { TaskInput } from "../components/TaksInput";
import { TaskList } from "../components/TaskList";
import { useTasks } from "../context/TasksContext";

export function TodasPage() {
  const { tarefas, adicionar, alternarConcluida, alternarFavorita, remover } = useTasks();
  const [texto, setTexto] = useState("");

  function onAdd() {
    const t = texto.trim();
    if (!t) return;
    adicionar(t);
    setTexto("");
  }

  return (
    <>
      <TaskInput valor={texto} onChange={setTexto} onAdd={onAdd} />

      <TaskList
        tarefas={tarefas}
        onToggle={alternarConcluida}
        onToggleFav={alternarFavorita}  
        onRemove={remover}
      />
    </>
  );
}
