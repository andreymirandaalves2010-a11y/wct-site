"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* =====================================================
          VÍDEO DE FUNDO — SITE INTEIRO
      ====================================================== */}

      <div className="bg-video-wrapper" aria-hidden="true">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/academia-intro.mp4" type="video/mp4" />
        </video>

        <div className="bg-video-overlay" />
        <div className="bg-video-grain" />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="logo" onClick={closeMenu}>
            <span className="logo-main">WCT</span>
            <span className="logo-sub">Centro de Treinamento</span>
          </a>

          <nav className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#treinamentos">Treinamentos</a>
            <a href="#estrutura">Estrutura</a>
            <a href="#planos">Planos</a>
            <a href="#horarios">Horários</a>
            <a href="#localizacao">Localização</a>
          </nav>

          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* =====================================================
          MENU MOBILE
      ====================================================== */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#inicio" onClick={closeMenu}>
              Início
            </a>
          </li>

          <li>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
          </li>

          <li>
            <a href="#treinamentos" onClick={closeMenu}>
              Treinamentos
            </a>
          </li>

          <li>
            <a href="#estrutura" onClick={closeMenu}>
              Estrutura
            </a>
          </li>

          <li>
            <a href="#planos" onClick={closeMenu}>
              Planos
            </a>
          </li>

          <li>
            <a href="#horarios" onClick={closeMenu}>
              Horários
            </a>
          </li>

          <li>
            <a href="#localizacao" onClick={closeMenu}>
              Localização
            </a>
          </li>
        </ul>
      </div>

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <main id="conteudo">

        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="hero" id="inicio">
          <div className="hero-inner">
            <p className="hero-eyebrow">
              ACADEMIA — CENTRO DE TREINAMENTO
            </p>

            <h1 className="hero-title">
              <span className="line">FORÇA</span>
              <span className="line accent">DISCIPLINA</span>
              <span className="line">PERFORMANCE</span>
            </h1>

            <p className="hero-desc">
              Treine com propósito. Desenvolva força, condicionamento
              e disciplina em um ambiente preparado para evolução.
            </p>

            <div className="hero-actions">
              <a
                href="https://wa.me/553899873961"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Agendar treino
              </a>

              <a href="#treinamentos" className="btn btn-secondary">
                Conhecer treinamentos
              </a>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-line" />
            <span>Scroll para explorar</span>
          </div>
        </section>

        {/* ===================================================
            SOBRE
        ==================================================== */}

        <section className="section" id="sobre">
          <div className="section-inner">
            <p className="section-label">01 — Sobre</p>

            <div className="about-grid">
              <div>
                <h2 className="section-title">
                  MAIS QUE UM TREINO.
                  <br />
                  UMA MENTALIDADE.
                </h2>

                <p className="about-copy">
                  Aqui o treinamento vai além do exercício.
                  Trabalhamos força, resistência, técnica e
                  disciplina para ajudar você a evoluir dentro
                  e fora da academia.
                </p>
              </div>

              <div className="about-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">
                  FOCO NA SUA EVOLUÇÃO
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            TREINAMENTOS
        ==================================================== */}

        <section className="section" id="treinamentos">
          <div className="section-inner">
            <p className="section-label">02 — Treinamentos</p>

            <h2 className="section-title">
              ENCONTRE SEU
              <br />
              DESAFIO
            </h2>

            <div className="training-list">
              <div className="training-item">
                <article>
                  <span className="training-index">01</span>

                  <div className="training-content">
                    <h3 className="training-name">
                      MUSCULAÇÃO
                    </h3>

                    <p className="training-desc">
                      Treinamento focado em força,
                      resistência e desenvolvimento físico.
                    </p>
                  </div>

                  <span className="training-arrow">↗</span>
                </article>
              </div>

              <div className="training-item">
                <article>
                  <span className="training-index">02</span>

                  <div className="training-content">
                    <h3 className="training-name">
                      FUNCIONAL
                    </h3>

                    <p className="training-desc">
                      Exercícios dinâmicos para melhorar
                      condicionamento, mobilidade e potência.
                    </p>
                  </div>

                  <span className="training-arrow">↗</span>
                </article>
              </div>

              <div className="training-item">
                <article>
                  <span className="training-index">03</span>

                  <div className="training-content">
                    <h3 className="training-name">
                      MUAY THAI
                    </h3>

                    <p className="training-desc">
                      Técnica, condicionamento e disciplina
                      através das artes marciais.
                    </p>
                  </div>

                  <span className="training-arrow">↗</span>
                </article>
              </div>

              <div className="training-item">
                <article>
                  <span className="training-index">04</span>

                  <div className="training-content">
                    <h3 className="training-name">
                      CONDICIONAMENTO
                    </h3>

                    <p className="training-desc">
                      Desenvolva resistência e capacidade
                      física para superar seus limites.
                    </p>
                  </div>

                  <span className="training-arrow">↗</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            ESTRUTURA
        ==================================================== */}

        <section className="section" id="estrutura">
          <div className="section-inner">
            <p className="section-label">03 — Estrutura</p>

            <h2 className="section-title">
              PREPARADO PARA
              <br />
              EVOLUIR
            </h2>

            <div className="facility-grid">
              <div className="facility-item">
                EQUIPAMENTOS
              </div>

              <div className="facility-item">
                ÁREA DE TREINO
              </div>

              <div className="facility-item">
                ARTES MARCIAIS
              </div>

              <div className="facility-item">
                CARDIO
              </div>

              <div className="facility-item">
                FORÇA
              </div>

              <div className="facility-item">
                CONDICIONAMENTO
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            PLANOS
        ==================================================== */}

        <section className="section" id="planos">
          <div className="section-inner">
            <p className="section-label">04 — Planos</p>

            <h2 className="section-title">
              ESCOLHA SEU
              <br />
              PLANO
            </h2>

            <div className="plans-grid">
              <div className="plan">
                <span className="plan-name">
                  PLANO START
                </span>

                <div className="plan-price">
                  R$ 89
                  <span>/mês</span>
                </div>

                <p className="plans-note">
                  TREINE NO SEU RITMO
                </p>
              </div>

              <div className="plan plan-featured">
                <span className="plan-tag">
                  MAIS ESCOLHIDO
                </span>

                <span className="plan-name">
                  PLANO PERFORMANCE
                </span>

                <div className="plan-price">
                  R$ 119
                  <span>/mês</span>
                </div>

                <p className="plans-note">
                  FOCO TOTAL NA EVOLUÇÃO
                </p>
              </div>

              <div className="plan">
                <span className="plan-name">
                  PLANO PREMIUM
                </span>

                <div className="plan-price">
                  R$ 149
                  <span>/mês</span>
                </div>

                <p className="plans-note">
                  EXPERIÊNCIA COMPLETA
                </p>
              </div>
            </div>

            <p className="plans-disclaimer">
              Consulte condições, modalidades disponíveis e
              valores diretamente com a academia.
            </p>
          </div>
        </section>

        {/* ===================================================
            HORÁRIOS
        ==================================================== */}

        <section className="section" id="horarios">
          <div className="section-inner">
            <p className="section-label">05 — Horários</p>

            <h2 className="section-title hours-title">
              TREINE NO
              <br />
              SEU HORÁRIO
            </h2>

            <div className="hours-grid">
              <div className="hours-row">
                <span className="hours-day">
                  Segunda — Sexta
                </span>

                <span className="hours-time">
                  06:00 — 22:00
                </span>
              </div>

              <div className="hours-row">
                <span className="hours-day">
                  Sábado
                </span>

                <span className="hours-time">
                  08:00 — 12:00
                </span>
              </div>

              <div className="hours-row">
                <span className="hours-day">
                  Domingo
                </span>

                <span className="hours-time">
                  FECHADO
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            LOCALIZAÇÃO
        ==================================================== */}

        <section className="section" id="localizacao">
          <div className="section-inner">
            <div className="location-grid">
              <div className="location-info">
                <p className="section-label">
                  06 — Localização
                </p>

                <h2 className="section-title">
                  VENHA
                  <br />
                  TREINAR
                </h2>

                <address>
                  Montes Claros — MG
                  <br />
                  Centro de Treinamento WCT
                  <br />
                  Consulte nossa localização pelo WhatsApp.
                </address>
              </div>

              <div className="location-actions">
                <a
                  href="https://wa.me/553899873961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  WhatsApp
                  <span>↗</span>
                </a>

                <a
                  href="https://instagram.com/andreymiirandaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Instagram
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            CTA FINAL
        ==================================================== */}

        <section className="cta-final">
          <div className="cta-final-inner">
            <p className="section-label">
              COMEÇE AGORA
            </p>

            <h2 className="cta-title">
              <span className="line">
                SEU LIMITE
              </span>

              <span className="line accent">
                É O PRÓXIMO NÍVEL
              </span>
            </h2>

            <p className="cta-desc">
              Entre em contato e agende seu primeiro treino.
            </p>

            <div>
              <a
                href="https://wa.me/553899873961"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Agendar agora ↗
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <footer className="site-footer">
          <div className="section-inner">
            <div className="footer-inner">
              <div className="footer-brand">
                <div className="logo-main">
                  WCT
                </div>

                <p>
                  Centro de Treinamento
                </p>
              </div>

              <div className="footer-contact">
                <p>
                  Montes Claros — MG
                </p>

                <p>
                  Treinamento • Disciplina • Performance
                </p>
              </div>

              <p className="footer-copy">
                © {new Date().getFullYear()} WCT — Centro de
                Treinamento. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}