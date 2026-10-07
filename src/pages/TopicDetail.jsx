import { Link, useParams } from "react-router";
import topics from "../data/topics";
import NotFound from "./NotFound";

export default function TopicDetail() {
  const { id } = useParams();
  const topic = topics.find((item) => item.id === id);

  if (!topic) {
    return <NotFound />;
  }

  return (
    <section className="detail-panel">
      <Link className="back-link" to="/">
        ← Kembali ke semua topik
      </Link>
      <p className="eyebrow">{topic.label}</p>
      <span className="detail-number">Topik 0{topic.id}</span>
      <h1>{topic.title}</h1>
      <p className="detail-description">{topic.description}</p>
      <div className="detail-copy">
        <h2>Yang perlu kamu tahu</h2>
        <p>{topic.detail}</p>
      </div>
    </section>
  );
}
