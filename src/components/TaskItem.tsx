import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";


interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
  favorita: boolean;
}

interface TaskItemProps {
  tarefa: Tarefa;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onToggleFav: (id: number) => void;
}

export function TaskItem({ tarefa, onToggle, onRemove, onToggleFav }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white border px-4 py-3 shadow-sm">
      <label className="flex items-center gap-3 cursor-pointer">
        <Checkbox
          checked={tarefa.concluida}
          onCheckedChange={() => onToggle(tarefa.id)}
        />
        <span className={tarefa.concluida ? "line-through text-neutral-400" : ""}>
          {tarefa.texto}
        </span>
      </label>

      <div className="flex items-center gap-1.5">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onToggleFav(tarefa.id)}
          aria-label={tarefa.favorita ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          className="hover:bg-transparent"
        >
          {tarefa.favorita ? (
            <><Heart className="w-5 h-5 text-red-500 fill-red-500" />
      </>
          ) : (
            <Heart className="w-5 h-5 text-neutral-400" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-red-50 hover:text-red-600"
          onClick={() => onRemove(tarefa.id)}
          aria-label="Remover tarefa"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
