"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const end = Date.now() + 2 * 60 * 60 * 1000; // 2 години

    const timer = setInterval(() => {
      const diff = end - Date.now();

      if (diff <= 0) {
        setTime("00:00:00");
        clearInterval(timer);
        return;
      }

      const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");

      setTime(`${h}:${m}:${s}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section hero-section">
      <div className="container hero">
        <div className="hero-text">
          <h1>
            М'яке світло для найсолодших снів:<br />
            від першої колискової до першої казки
          </h1>

          <div className="price">
            <span className="old-price">799 грн</span>
            <span className="new-price">599 грн</span>
          </div>

          <div className="promo-timer">
            Акція закінчиться через <strong>{time}</strong>
          </div>

          <p>
            Універсальний нічник-антистрес, що підлаштовується під ваші потреби.
          </p>

          <button
            className="cta-btn"
            onClick={() =>
              window.dispatchEvent(new Event("order-open"))
            }
          >
            Хочу таку овечку
          </button>
        </div>

        <div className="hero-image">
          <img className="img-hero" src="/images/hero-sheep.png" alt="Нічник овечка" />
        </div>
      </div>
    </section>
  );
}
