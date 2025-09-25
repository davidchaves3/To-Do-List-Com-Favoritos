import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { useTasks } from "./context/TasksContext";
import { Routes, Route, NavLink } from "react-router-dom";
import { TodasPage } from "./pages/Home";
import { FavoritasPage } from "./pages/FavoritasPage";


export default function App() {
  const { tarefas } = useTasks();
  useEffect(() => {
    const pendentes = tarefas.filter((t) => !t.concluida).length;
    document.title = `(${pendentes}) tarefas pendentes`;
  }, [tarefas]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f6f6f6]">
      <div className="mx-auto max-w-3xl p-4 md:py-10">
        <div className="rounded-2xl bg-[#FFFCEE] shadow-xl ring-1 ring-black/5 p-6 md:p-8">
          <Header />
          <nav className="mb-6 flex gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg border transition ${
                  isActive ? "bg-amber-600 text-white border-amber-600" : "bg-white border-neutral-300"
                }`
              }
            >
              Todas
            </NavLink>
            <NavLink
              to="/favoritas"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg border transition ${
                  isActive ? "bg-amber-600 text-white border-amber-600" : "bg-white border-neutral-300"
                }`
              }
            >
              Favoritos
            </NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<TodasPage />} />
            <Route path="/favoritas" element={<FavoritasPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
