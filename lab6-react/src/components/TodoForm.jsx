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
      className="border p-2 w-full mb-2"
      placeholder="Нове завдання..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}
