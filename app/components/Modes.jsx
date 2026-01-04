"use client";

export default function Modes() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="center">Три рівні затишку</h2>
        <div className="grid-3">
          <div className="card">
            <img src="/images/mode-night.jpg" alt="Нічне небо" />
            <h3>Нічне небо</h3>
            <p>Ледь помітне світіння для глибокого сну</p>
          </div>
          <div className="card">
            <img src="/images/mode-evening.jpg" alt="Вечірній затишок" />
            <h3>Вечірній затишок</h3>
            <p>Тепле світло для обіймів і підготовки до сну</p>
          </div>
          <div className="card">
            <img src="/images/mode-book.jpg" alt="Казковий час" />
            <h3>Казковий час</h3>
            <p>Яскраве світло для читання улюблених книжок</p>
          </div>
        </div>
      </div>
    </section>
  );
}
