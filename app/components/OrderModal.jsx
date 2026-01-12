"use client";
import { useEffect, useState } from "react";

export default function OrderModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+380");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("order-open", openHandler);
    return () => window.removeEventListener("order-open", openHandler);
  }, []);

  function validate() {
    const e = {};

    if (name.trim().length < 2) {
      e.name = "Введіть імʼя";
    }

    // +380 + 9 цифр
    if (!/^\+380\d{9}$/.test(phone)) {
      e.phone = "Введіть коректний номер";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handlePhoneChange(value) {
    let digits = value.replace(/\D/g, "");

    if (!digits.startsWith("380")) {
      digits = "380";
    }

    digits = digits.slice(0, 12);
    setPhone("+" + digits);
  }

  async function submit(e) {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      if (!res.ok) throw new Error("Request failed");

      // очищаємо форму
      setOpen(false);
      setName("");
      setPhone("+380");

      // 🔔 сигнал успішної заявки
      window.dispatchEvent(new Event("thanks-open"));

    } catch (err) {
      alert("Помилка відправки. Спробуйте ще раз.");
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
            onChange={(e) => handlePhoneChange(e.target.value)}
            placeholder="+380 ХХ ХХХ ХХ ХХ"
            inputMode="tel"
          />
          <small className="error">{errors.phone}</small>

          <button type="submit" className="cta-btn">
            Замовити
          </button>
        </form>
      </div>
    </div>
  );
}
