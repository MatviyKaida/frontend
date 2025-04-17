import { useState, useEffect } from "react";
import ListManager from "./ListManager.jsx";
import TodoList from "./TodoList.jsx";

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
    <div className="app">
      <h1>Мої ToDo Списки</h1>
      <ListManager onAdd={addList} />
      <div className="lists-container">
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
