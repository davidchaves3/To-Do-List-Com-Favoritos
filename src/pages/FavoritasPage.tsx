import { TaskList } from "../components/TaskList";

import { useTasks } from "../context/TasksContext";


export function FavoritasPage() {
  const { tarefas, alternarConcluida, alternarFavorita, remover } = useTasks();

  const favoritas = tarefas.filter((t) => t.favorita);
  return (
    <TaskList
      tarefas={favoritas}
      onToggle={alternarConcluida}
      onToggleFav={alternarFavorita}
      onRemove={remover}
    />
  );
}
