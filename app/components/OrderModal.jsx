"use client";
import { useEffect, useState } from "react";

export default function OrderModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("order-open", openHandler);
    return () => window.removeEventListener("order-open", openHandler);
  }, []);

  function validate() {
    const e = {};
    if (name.trim().length < 2) e.name = "Введіть імʼя";
    if (phone.length < 13) e.phone = "Невірний номер";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validate()) return;

    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    });

    if (res.ok) {
      setOpen(false);
      setName("");
      setPhone("");
      window.dispatchEvent(new Event("thanks-open"));
    } else {
      alert("Помилка відправки");
    }
  }

  if (!open) return null;

  return (
    <div className="modal active" onClick={() => setOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={() => setOpen(false)}>
          ×
        </button>

        <form onSubmit={submit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше імʼя"
          />
          <small className="error">{errors.name}</small>

          <input
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/[^\d+]/g, ""))
            }
            placeholder="+380 ХХ ХХХ ХХ ХХ"
          />
          <small className="error">{errors.phone}</small>

          <button className="cta-btn">Замовити</button>
        </form>
      </div>
    </div>
  );
}
