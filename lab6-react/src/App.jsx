import { useState, useEffect } from "react";
import ListManager from "./components/ListManager";
import TodoList from "./components/TodoList";

export default function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("todoLists");
    if (saved) {
      setLists(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(lists));
  }, [lists]);

  const addList = (name) => {
    setLists([...lists, { name, tasks: [] }]);
  };

  const deleteList = (index) => {
    const updated = [...lists];
    updated.splice(index, 1);
    setLists(updated);
  };

  const updateTasks = (index, tasks) => {
    const updated = [...lists];
    updated[index].tasks = tasks;
    setLists(updated);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Мої ToDo Списки</h1>
      <ListManager onAdd={addList} />
      <div className="flex gap-4 overflow-x-auto pt-4">
        {lists.map((list, index) => (
          <TodoList
            key={index}
            name={list.name}
            tasks={list.tasks}
            onUpdate={(tasks) => updateTasks(index, tasks)}
            onDelete={() => deleteList(index)}
          />
        ))}
      </div>
    </div>
  );
}
