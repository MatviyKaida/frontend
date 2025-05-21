import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/BookingForm.css"

const BookingForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Ім’я обов’язкове";
    if (!form.phone.trim()) newErrors.phone = "Телефон обов’язковий";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Некоректний email";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      toast.error("Будь ласка, заповніть всі поля правильно");
      return;
    }
    onSubmit(form);
    toast.success("Бронювання успішне!");
    setForm({ name: "", phone: "", email: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input
        type="text"
        placeholder="Ім’я"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <small>{errors.name}</small>}
      <input
        type="text"
        placeholder="Телефон"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
      />
      {errors.phone && <small>{errors.phone}</small>}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <small>{errors.email}</small>}
      <button type="submit">Підтвердити бронювання</button>
    </form>
  );
};

export default BookingForm;
