"use client";
import { useEffect, useState } from "react";

const TWO_DAYS = 48 * 60 * 60 * 1000; // 48 годин

export default function Hero() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    let end = localStorage.getItem("promoEnd");

    // якщо таймера немає або він завершився — ставимо нові 2 дні
    if (!end || Date.now() > Number(end)) {
      end = Date.now() + TWO_DAYS;
      localStorage.setItem("promoEnd", end);
    }

    const timer = setInterval(() => {
      const diff = Number(end) - Date.now();

      if (diff <= 0) {
        const newEnd = Date.now() + TWO_DAYS;
        localStorage.setItem("promoEnd", newEnd);
        end = newEnd;
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      const s = String(totalSeconds % 60).padStart(2, "0");

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
          <img className="img-hero" src="/images/hero-sheep.jpg" alt="Нічник овечка" />
        </div>
      </div>
    </section>
  );
}
