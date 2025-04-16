import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

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
    <div className="bg-white p-4 rounded shadow w-[25%] min-w-[250px] max-w-[300px] flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">{name}</h2>
        <button onClick={onDelete}>🗑️</button>
      </div>
      <TodoForm onAdd={addTask} />
      <ul className="overflow-y-auto flex-grow">
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
