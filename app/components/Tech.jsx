"use client";

export default function Tech() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="center">Технічні переваги</h2>
        <div className="grid-4">
          <div className="card tech">
            <img src="/images/tech-silicone.jpg" alt="Харчовий силікон" />
            <h3>Харчовий силікон</h3>
            <p>Безпечно навіть якщо дитина тягне до рота</p>
          </div>
          <div className="card tech">
            <img src="/images/tech-battery.jpg" alt="Акумулятор" />
            <h3>Акумулятор</h3>
            <p>Зарядка через USB, без батарейок</p>
          </div>
          <div className="card tech">
            <img src="/images/tech-led.jpg" alt="Безпечне LED-світло" />
            <h3>Безпечне LED-світло</h3>
            <p>Не нагрівається, можна спати в обіймах</p>
          </div>
          <div className="card tech">
            <img src="/images/tech-touch.jpg" alt="Управління дотиком" />
            <h3>Управління дотиком</h3>
            <p>Легкий дотик — зміна режиму</p>
          </div>
        </div>

        {/* CTA кнопка під Tech */}
        <div className="video-cta">
          <button
            className="cta-btn cta-animate"
            onClick={() => window.dispatchEvent(new Event("order-open"))}
          >
            Хочу замовити
          </button>
        </div>
      </div>
    </section>
  );
}
