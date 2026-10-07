import { Link, NavLink, Outlet } from "react-router";
import "../App.css";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Testimony", to: "/testimony" },
  { label: "FAQ", to: "/faq" },
];

export default function Layout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="nav-inner">
          <Link className="brand" to="/" aria-label="Luthfi Anhar, halaman utama">
            <img className="brand-image" src="/logo-anhar.png" alt="" />
            <span className="brand-name">Luthfi Anhar</span>
          </Link>
          <nav className="main-nav" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
                end={item.end}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a className="contact-link" href="mailto:bantuan@ruangbantu.id">
            Sign In
          </a>
        </div>
      </header>
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}
