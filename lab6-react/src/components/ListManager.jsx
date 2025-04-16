import { useState } from "react";

export default function ListManager({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim()) {
      onAdd(name);
      setName("");
    }
  };

  return (
    <div className="list-manager">
      <input
        className=""
        placeholder="Назва нового списку..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Створити список</button>
    </div> 
  );
}
