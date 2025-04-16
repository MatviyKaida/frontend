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
    <div>
      <input
        className="border p-2 mr-2"
        placeholder="Назва нового списку..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleAdd}>
        Створити список
      </button>
    </div>
  );
}
