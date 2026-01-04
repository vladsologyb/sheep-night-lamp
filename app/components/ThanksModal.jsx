"use client";
import { useEffect, useState } from "react";

export default function ThanksModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
    }
    window.addEventListener("thanks-open", handleOpen);
    return () => window.removeEventListener("thanks-open", handleOpen);
  }, []);

  if (!open) return null;

  return (
    <div className="thanks-modal active">
      <div className="thanks-content">
        <h2>Дякуємо 💛</h2>
        <button className="cta-btn" onClick={() => setOpen(false)}>Добре</button>
      </div>
    </div>
  );
}
