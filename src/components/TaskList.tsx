import { TaskItem } from "./TaskItem";

interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
  favorita: boolean;
}
interface TaskListProps {
  tarefas: Tarefa[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onToggleFav: (id: number) => void; // novo
}

export function TaskList({ tarefas, onToggle, onRemove, onToggleFav }: TaskListProps) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 font-semibold text-lg">Suas Tarefas ({tarefas.length})</h2>

      {tarefas.length === 0 ? (
        <div className="rounded-xl border border-dashed p-6 text-center text-neutral-500">
          Sem tarefas por aqui. ✨
        </div>
      ) : (
        <div className="space-y-3">
          {tarefas.map((t) => (
            <TaskItem
              key={t.id}
              tarefa={t}
              onToggle={onToggle}
              onRemove={onRemove}
              onToggleFav={onToggleFav} 
            />
          ))}
        </div>
      )}
    </section>
  );
}
