"use client";

export default function Video() {
  return (
    <section className="section video-container">
      <div className="container">
        <h2 className="center">Подивіться, як працює нічник-овечка</h2>
        <div className="video-box">
          <video controls poster="/video/video-preview.jpg">
            <source src="/video/video-preview.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
