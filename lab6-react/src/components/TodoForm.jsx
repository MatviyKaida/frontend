import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <input
      className="todo-form"
      placeholder="Нове завдання..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyPress={handleKeyPress}
    />  
  );
}
