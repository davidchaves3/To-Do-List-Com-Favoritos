import { createContext, useContext, useState, type ReactNode } from "react";

export interface Tarefa {
  favorita: boolean;
  id: number;
  texto: string;
  concluida: boolean;
}

interface TasksContextType {
  tarefas: Tarefa[];
  adicionar: (texto: string) => void;
  alternarConcluida: (id: number) => void;
  remover: (id: number) => void;
  alternarFavorita: (id: number) => void; 
}

const TasksContext = createContext<TasksContextType | null>(null);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  function adicionar(texto: string) {
    const titulo = texto.trim();
    if (titulo === "") return;

    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto: titulo,
      concluida: false,
      favorita: false
    };

    setTarefas((anteriores) => [...anteriores, novaTarefa]);
  }

  function alternarConcluida(id: number) {
    setTarefas((anteriores) =>
      anteriores.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  function remover(id: number) {
    setTarefas((anteriores) => anteriores.filter((t) => t.id !== id));
  }
  
  function alternarFavorita(id: number) {
    setTarefas((anteriores) =>
      anteriores.map((t) =>
        t.id === id ? { ...t, favorita: !t.favorita } : t
      )
    );
  }

  return (
    <TasksContext.Provider
      value={{ tarefas, adicionar, alternarConcluida, remover, alternarFavorita }}
    >
      {children}
    </TasksContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  const contexto = useContext(TasksContext);

  if (!contexto) {
    throw new Error("useTasks precisa estar dentro de <TasksProvider>");
  }

  return contexto;
}
