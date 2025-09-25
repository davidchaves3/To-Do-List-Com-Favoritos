import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"; 

interface TaskInputProps {
  valor: string;
  onChange: (texto: string) => void;
  onAdd: () => void;
}

export function TaskInput({ valor, onChange, onAdd }: TaskInputProps) {
  function submit(e: React.FormEvent) {
    e.preventDefault();
    onAdd();
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-[1fr,auto] gap-3">
      <Input
        placeholder="Digite uma nova tarefa..."
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-xl bg-white/80 border-neutral-200 focus-visible:ring-neutral-400"
      />
      <Button type="submit" className="h-11 rounded-xl px-4 bg-amber-600 hover:bg-amber-700">
        <Plus className="mr-2 h-4 w-4" />
        Adicionar
      </Button>
    </form>
  );
}
