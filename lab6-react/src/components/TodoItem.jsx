export default function TodoItem({ task, onToggle, onDelete }) {
    return (
      <li className={`todo-item ${task.completed ? "completed" : ""}`}>
        <span>{task.text}</span>
        <div className="actions">
          <button onClick={onToggle}>✔️</button>
          <button onClick={onDelete}>🗑️</button>
        </div>
      </li>
    );
  }
  