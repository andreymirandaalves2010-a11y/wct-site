"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#inicio", label: "INÍCIO" },
  { href: "#sobre", label: "SOBRE" },
  { href: "#treinos", label: "TREINOS" },
  { href: "#estrutura", label: "ESTRUTURA" },
  { href: "#planos", label: "PLANOS" },
  { href: "#contato", label: "CONTATO" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="nav-inner" aria-label="Navegação principal">
        <a href="#inicio" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-main">WCT</span>
          <span className="logo-sub">CENTRO DE TREINAMENTO</span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`menu-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        <ul>
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 40}ms` }}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/5538999381129"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mobile-cta"
          onClick={() => setOpen(false)}
        >
          AGENDAR VISITA →
        </a>
      </div>
    </header>
  );
}
