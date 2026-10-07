import { Link } from "react-router";
import topics from "../data/topics";

export default function Home() {
  return (
    <section className="content-section">
      <div className="intro">
        <p className="eyebrow">Pusat Bantuan</p>
        <h1>Pertanyaan Umum</h1>
        <p className="intro-copy">
          Temukan jawaban dari pertanyaan yang sering ditanyakan.
        </p>
      </div>
      <div className="topic-grid">
        {topics.map((topic) => (
          <article className="topic-card" key={topic.id}>
            <span className="topic-label">{topic.label}</span>
            <span className="topic-number">{topic.id}</span>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <Link className="text-link" to={`/home/${topic.id}`}>
              Lihat detail <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
