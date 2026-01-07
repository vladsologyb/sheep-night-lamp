"use client";

export default function Reviews() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="center">Відгуки наших клієнтів</h2>
        <div className="grid-3">
          <div className="review">
            <div className="stars">★★★★★</div>
            <strong>Марина Ярославська</strong>
            <p className="reviews-text">Ідеальний нічник для новонародженого.</p>
          </div>
          <div className="review">
            <div className="stars">★★★★★</div>
            <strong>Дарина Нікітенко</strong>
            <p className="reviews-text">Син засинає тільки з овечкою.</p>
          </div>
          <div className="review">
            <div className="stars">★★★★★</div>
            <strong>Євгенія Пономарьова</strong>
            <p className="reviews-text">Дуже мʼяка та безпечна.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
