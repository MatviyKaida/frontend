export default function TodoItem({ task, onToggle, onDelete }) {
    return (
      <li
        className={`flex justify-between py-1 ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
      >
        <span>{task.text}</span>
        <div>
          <button onClick={onToggle}>✔️</button>
          <button onClick={onDelete}>🗑️</button>
        </div>
      </li>
    );
  }
  