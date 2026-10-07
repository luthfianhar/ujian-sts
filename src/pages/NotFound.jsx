import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 · Halaman tidak ditemukan</p>
      <h1>Sepertinya kamu tersesat.</h1>
      <p>Alamat ini tidak tersedia. Coba kembali ke halaman utama.</p>
      <Link className="button-link" to="/">
        Kembali ke Home
      </Link>
    </section>
  );
}
