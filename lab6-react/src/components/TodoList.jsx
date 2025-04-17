import TodoForm from "./TodoForm.jsx";
import TodoItem from "./TodoItem.jsx";
import './TodoList.css';

export default function TodoList({ name, tasks, onUpdate, onDelete }) {
  const addTask = (text) => {
    onUpdate([...tasks, { text, completed: false }]);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    onUpdate(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    onUpdate(updated);
  };

  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <h2>{name}</h2>
        <button onClick={onDelete}>🗑️</button>
      </div>
      <TodoForm onAdd={addTask} />
      <ul className="flex-grow overflow-y-auto space-y-2">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onToggle={() => toggleTask(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}
