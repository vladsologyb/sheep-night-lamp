"use client";

export default function Audience() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="center">Один нічник — багато завдань</h2>

        <div className="grid-2">
          <div className="card">
            <img src="/images/baby-mom.jpg" alt="Для найменших" />
            <h3>Для найменших (0–2 роки)</h3>
            <p>Тихий помічник для мами. М'яке тьмяне світло для нічних годувань...</p>
          </div>

          <div className="card">
            <img src="/images/kid-bed.jpg" alt="Для дослідників" />
            <h3>Для дослідників (3–6 років)</h3>
            <p>Захисник від нічних монстрів. М’яка, приємна на дотик овечка...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
