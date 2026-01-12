"use client";
import { useEffect, useRef, useState } from "react";

export default function ThanksModal() {
  const [open, setOpen] = useState(false);
  const leadSent = useRef(false); // 🔒 захист від дублювання

  useEffect(() => {
    function handleOpen() {
      setOpen(true);

      // 🔥 META LEAD — ТІЛЬКИ 1 РАЗ
      if (
        !leadSent.current &&
        typeof window !== "undefined" &&
        window.fbq
      ) {
        window.fbq("track", "Lead");
        leadSent.current = true;
      }
    }

    window.addEventListener("thanks-open", handleOpen);
    return () => window.removeEventListener("thanks-open", handleOpen);
  }, []);

  if (!open) return null;

  return (
    <div className="thanks-modal active">
      <div className="thanks-content">
        <h2>Дякуємо 💛</h2>
        <button className="cta-btn" onClick={() => setOpen(false)}>
          Добре
        </button>
      </div>
    </div>
  );
}
