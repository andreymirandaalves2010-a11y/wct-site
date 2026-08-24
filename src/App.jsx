import { useEffect, useRef } from "react";
import "./App.css";

const WA = "https://wa.me/553899873961";
const IG = "https://instagram.com/andreymiirandaa";

const CUES = [
  "ACADEMIA — CENTRO DE TREINAMENTO",
  "DISCIPLINA",
  "FORÇA",
  "INTENSIDADE",
  "LEVAMOS O SEU TREINO A SÉRIO.",
];

export default function App() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const cueRefs = useRef([]);
  const endRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) return;

    const hero = heroRef.current;
    const video = videoRef.current;

    if (!hero || !video) return;

    let ready = false;
    let raf = 0;

    const onMeta = () => {
      ready = true;
    };

    video.addEventListener("loadedmetadata", onMeta);

    const render = () => {
      raf = 0;

      const rect = hero.getBoundingClientRect();
      const total = rect.height - window.innerHeight;

      const p = Math.min(
        1,
        Math.max(0, -rect.top / (total || 1))
      );

      /*
       * Controla o vídeo conforme a rolagem.
       */
      if (ready && video.duration) {
        const t =
          p * Math.max(0, video.duration - 0.05);

        if (Math.abs(video.currentTime - t) > 0.03) {
          video.currentTime = t;
        }
      }

      /*
       * Textos que aparecem durante a animação.
       */
      const n = CUES.length;

      cueRefs.current.forEach((el, i) => {
        if (!el) return;

        const start = i / n;
        const local = (p - start) * n;

        let opacity = 0;

        if (local > -0.15 && local < 1.15) {
          opacity =
            local < 0.25
              ? local / 0.25
              : local > 0.75
              ? (1 - local) / 0.25
              : 1;
        }

        opacity = Math.min(
          1,
          Math.max(0, opacity)
        );

        el.style.opacity = opacity;

        el.style.transform = `translateY(${
          (1 - opacity) * 24
        }px)`;
      });

      /*
       * Animação final do Hero.
       */
      const endOpacity = Math.min(
        1,
        Math.max(0, (p - 0.9) / 0.1)
      );

      if (endRef.current) {
        endRef.current.style.opacity = endOpacity;

        endRef.current.style.transform = `scale(${
          0.96 + endOpacity * 0.04
        })`;
      }
    };

    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(render);
      }
    };

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      onScroll
    );

    onScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

      window.removeEventListener(
        "resize",
        onScroll
      );

      video.removeEventListener(
        "loadedmetadata",
        onMeta
      );

      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <>
      {/* =====================================================
          VÍDEO DE FUNDO
      ====================================================== */}

      <div
        className="video-bg"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className="video"

          /*
           * IMPORTANTE:
           * Funciona corretamente no GitHub Pages
           * usando /wct-site/ como base.
           */
         src={`${import.meta.env.BASE_URL}video/academia-intro.mp4`}

          muted
          playsInline
          preload="auto"
        />

        <div className="video-scrim" />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="nav">
        <a
          className="brand"
          href="#top"
        >
          ACADEMIA
        </a>

        <input
          id="navtoggle"
          className="navtoggle"
          type="checkbox"
        />

        <label
          className="burger"
          htmlFor="navtoggle"
          aria-label="Abrir menu"
        >
          <span />
        </label>

        <nav className="menu">
          <a href="#treinos">
            Treinos
          </a>

          <a href="#estrutura">
            Estrutura
          </a>

          <a href="#sobre">
            Sobre
          </a>

          <a href="#planos">
            Planos
          </a>

          <a href="#faq">
            FAQ
          </a>

          <a
            href={IG}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            className="btn btn-red"
            href={WA}
            target="_blank"
            rel="noreferrer"
          >
            COMEÇAR
          </a>
        </nav>
      </header>

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <main id="top">

        {/* =====================================================
            HERO COM VÍDEO
        ====================================================== */}

        <section
          className="hero"
          ref={heroRef}
          aria-label="Abertura Academia"
        >
          <div className="hero-content">

            <div className="cues">
              {CUES.map((text, index) => (
                <p
                  key={text}
                  className="cue"
                  ref={(el) => {
                    cueRefs.current[index] = el;
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            <div
              className="heroEnd"
              ref={endRef}
            >
              <span className="big">
                ACADEMIA
              </span>

              <span className="kicker">
                CENTRO DE TREINAMENTO
              </span>
            </div>

          </div>
        </section>

        {/* =====================================================
            HERO PRINCIPAL
        ====================================================== */}

        <section className="main-hero">

          <p className="tag">
            CENTRO DE TREINAMENTO
          </p>

          <h1 className="big">
            ACADEMIA
          </h1>

          <p className="kicker">
            DISCIPLINA · FORÇA · INTENSIDADE
          </p>

          <p className="lead">
            Levamos o seu treino a sério.
          </p>

          <div className="actions">

            <a
              className="btn btn-red"
              href={WA}
              target="_blank"
              rel="noreferrer"
            >
              QUERO TREINAR
            </a>

            <a
              className="btn btn-ghost"
              href="#sobre"
            >
              CONHECER A ACADEMIA
            </a>

          </div>
        </section>

        {/* =====================================================
            SOBRE
        ====================================================== */}

        <section
          id="sobre"
          className="section"
        >

          <p className="tag">
            SOBRE A ACADEMIA
          </p>

          <h2>
            Treino de verdade.
            <br />
            Resultado de verdade.
          </h2>

          <p className="body">
            A Academia é um centro de treinamento
            pensado para pessoas que querem
            transformar o exercício em parte da rotina.
          </p>

          <p className="body">
            Aqui você encontra um ambiente preparado
            para diferentes níveis de experiência,
            objetivos e estilos de treinamento.
          </p>

          <p className="body">
            O foco é criar uma experiência de treino
            baseada em disciplina, consistência,
            orientação e evolução.
          </p>

        </section>

        {/* =====================================================
            BENEFÍCIOS
        ====================================================== */}

        <section className="section">

          <p className="tag">
            POR QUE TREINAR?
          </p>

          <h2>
            Mais que um treino.
            <br />
            Um estilo de vida.
          </h2>

          <div className="cards">

            <article className="card">

              <span className="card-number">
                01
              </span>

              <h3>
                SAÚDE
              </h3>

              <p>
                A prática regular de exercícios pode
                contribuir para uma rotina mais ativa,
                disposição e qualidade de vida.
              </p>

            </article>

            <article className="card">

              <span className="card-number">
                02
              </span>

              <h3>
                PERFORMANCE
              </h3>

              <p>
                Desenvolva diferentes capacidades
                físicas por meio de treinos
                estruturados e progressivos.
              </p>

            </article>

            <article className="card">

              <span className="card-number">
                03
              </span>

              <h3>
                CONSISTÊNCIA
              </h3>

              <p>
                Crie uma rotina de treinamento e
                transforme pequenas evoluções em
                progresso ao longo do tempo.
              </p>

            </article>

          </div>
        </section>

        {/* =====================================================
            MODALIDADES
        ====================================================== */}

        <section
          id="treinos"
          className="section"
        >

          <p className="tag">
            MODALIDADES
          </p>

          <h2>
            Encontre o treino
            <br />
            ideal para você.
          </h2>

          <p className="body">
            Diferentes possibilidades de treinamento
            para diferentes objetivos.
          </p>

          <div className="cards">

            <article className="card">

              <span className="card-number">
                01
              </span>

              <h3>
                MUSCULAÇÃO
              </h3>

              <p>
                Treinamento de força para desenvolver
                resistência, força e performance.
              </p>

            </article>

            <article className="card">

              <span className="card-number">
                02
              </span>

              <h3>
                CARDIO
              </h3>

              <p>
                Exercícios voltados para condicionamento
                cardiovascular e resistência.
              </p>

            </article>

            <article className="card">

              <span className="card-number">
                03
              </span>

              <h3>
                FUNCIONAL
              </h3>

              <p>
                Movimentos dinâmicos para trabalhar
                diferentes capacidades físicas.
              </p>

            </article>

            <article className="card">

              <span className="card-number">
                04
              </span>

              <h3>
                AULAS EM GRUPO
              </h3>

              <p>
                Treine em equipe e mantenha a motivação
                durante cada sessão.
              </p>

            </article>

          </div>
        </section>

        {/* =====================================================
            ESTRUTURA
        ====================================================== */}

        <section
          id="estrutura"
          className="section"
        >

          <p className="tag">
            NOSSA ESTRUTURA
          </p>

          <h2>
            Um espaço preparado
            <br />
            para você.
          </h2>

          <p className="body">
            Uma estrutura organizada para oferecer
            diferentes possibilidades de treinamento
            em um ambiente confortável e funcional.
          </p>

          <div className="cards">

            <article className="card">

              <h3>
                EQUIPAMENTOS
              </h3>

              <p>
                Equipamentos para diferentes exercícios,
                objetivos e níveis de treinamento.
              </p>

            </article>

            <article className="card">

              <h3>
                ESPAÇO
              </h3>

              <p>
                Ambientes organizados para você
                realizar seus exercícios com liberdade.
              </p>

            </article>

            <article className="card">

              <h3>
                AMBIENTE
              </h3>

              <p>
                Um espaço pensado para manter você
                focado durante cada treino.
              </p>

            </article>

          </div>
        </section>

        {/* =====================================================
            ACOMPANHAMENTO
        ====================================================== */}

        <section className="section band">

          <p className="tag">
            ACOMPANHAMENTO
          </p>

          <h2>
            Você não precisa
            <br />
            treinar sozinho.
          </h2>

          <p className="body narrow">
            Conte com orientação para compreender
            os exercícios, organizar sua rotina de
            treinamento e desenvolver consistência.
          </p>

          <div className="cards">

            <article className="card">

              <h3>
                ORIENTAÇÃO
              </h3>

              <p>
                Receba orientações para entender
                melhor os movimentos e exercícios.
              </p>

            </article>

            <article className="card">

              <h3>
                EVOLUÇÃO
              </h3>

              <p>
                Acompanhe seu desenvolvimento e ajuste
                sua rotina conforme seus objetivos.
              </p>

            </article>

            <article className="card">

              <h3>
                MOTIVAÇÃO
              </h3>

              <p>
                Um ambiente de treino pode ajudar
                você a manter uma rotina mais consistente.
              </p>

            </article>

          </div>
        </section>

        {/* =====================================================
            OBJETIVOS
        ====================================================== */}

        <section className="section">

          <p className="tag">
            SEU OBJETIVO
          </p>

          <h2>
            Comece de onde
            <br />
            você está.
          </h2>

          <div className="cards">

            <article className="card">

              <h3>
                CONDICIONAMENTO
              </h3>

              <p>
                Desenvolva resistência e melhore seu
                preparo físico para diferentes atividades.
              </p>

            </article>

            <article className="card">

              <h3>
                FORÇA
              </h3>

              <p>
                Trabalhe diferentes grupos musculares
                e desenvolva sua capacidade de força.
              </p>

            </article>

            <article className="card">

              <h3>
                QUALIDADE DE VIDA
              </h3>

              <p>
                Transforme o exercício em parte da
                sua rotina e mantenha-se ativo.
              </p>

            </article>

          </div>
        </section>

        {/* =====================================================
            HORÁRIOS
        ====================================================== */}

        <section className="section center">

          <p className="tag">
            HORÁRIOS
          </p>

          <h2>
            Treine no seu
            <br />
            melhor horário.
          </h2>

          <div className="schedule">

            <div className="schedule-item">

              <strong>
                SEGUNDA — SEXTA
              </strong>

              <span>
                06:00 — 22:00
              </span>

            </div>

            <div className="schedule-item">

              <strong>
                SÁBADO
              </strong>

              <span>
                08:00 — 14:00
              </span>

            </div>

            <div className="schedule-item">

              <strong>
                DOMINGO
              </strong>

              <span>
                FECHADO
              </span>

            </div>

          </div>

          <p className="body small">
            * Horários ilustrativos. Ajuste conforme
            o funcionamento real da academia.
          </p>

        </section>

        {/* =====================================================
            PLANOS
        ====================================================== */}

        <section
          id="planos"
          className="section"
        >

          <p className="tag">
            PLANOS
          </p>

          <h2>
            Escolha a melhor
            <br />
            forma de treinar.
          </h2>

          <div className="cards">

            <article className="card plan-card">

              <span className="card-number">
                01
              </span>

              <h3>
                MENSAL
              </h3>

              <p>
                Flexibilidade para começar sua rotina
                de treinamento.
              </p>

              <strong>
                CONSULTE VALORES
              </strong>

              <a
                className="btn btn-ghost"
                href={WA}
                target="_blank"
                rel="noreferrer"
              >
                SABER MAIS
              </a>

            </article>

            <article className="card plan-card featured">

              <span className="card-number">
                02
              </span>

              <h3>
                TRIMESTRAL
              </h3>

              <p>
                Mais tempo para criar consistência
                e acompanhar sua evolução.
              </p>

              <strong>
                CONSULTE VALORES
              </strong>

              <a
                className="btn btn-red"
                href={WA}
                target="_blank"
                rel="noreferrer"
              >
                QUERO ESTE
              </a>

            </article>

            <article className="card plan-card">

              <span className="card-number">
                03
              </span>

              <h3>
                ANUAL
              </h3>

              <p>
                Para quem quer manter uma rotina de
                treinamento durante todo o ano.
              </p>

              <strong>
                CONSULTE VALORES
              </strong>

              <a
                className="btn btn-ghost"
                href={WA}
                target="_blank"
                rel="noreferrer"
              >
                SABER MAIS
              </a>

            </article>

          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section
          id="faq"
          className="section"
        >

          <p className="tag">
            DÚVIDAS FREQUENTES
          </p>

          <h2>
            Perguntas
            <br />
            frequentes.
          </h2>

          <div className="faq">

            <details>
              <summary>
                Preciso ter experiência para começar?
              </summary>

              <p>
                Não. A academia pode receber pessoas
                com diferentes níveis de experiência.
                O ideal é começar respeitando seu nível atual.
              </p>
            </details>

            <details>
              <summary>
                Posso fazer uma aula experimental?
              </summary>

              <p>
                Entre em contato pelo WhatsApp para
                verificar a disponibilidade de aula experimental.
              </p>
            </details>

            <details>
              <summary>
                Preciso levar algum equipamento?
              </summary>

              <p>
                Normalmente você precisa apenas de roupas
                confortáveis, água e disposição para treinar.
              </p>
            </details>

            <details>
              <summary>
                Existe acompanhamento?
              </summary>

              <p>
                A disponibilidade de acompanhamento pode
                variar de acordo com o serviço e o plano escolhido.
              </p>
            </details>

            <details>
              <summary>
                Posso começar mesmo sendo iniciante?
              </summary>

              <p>
                Sim. Converse com a equipe para entender
                qual opção de treinamento é mais adequada
                para o seu nível.
              </p>
            </details>

            <details>
              <summary>
                Como faço para conhecer a academia?
              </summary>

              <p>
                Entre em contato pelo WhatsApp para combinar
                uma visita e conhecer o espaço.
              </p>
            </details>

          </div>
        </section>

        {/* =====================================================
            INSTAGRAM
        ====================================================== */}

        <section className="section center">

          <p className="tag">
            INSTAGRAM
          </p>

          <h2>
            @andreymiirandaa
          </h2>

          <p className="body">
            Acompanhe novidades, treinos e conteúdos
            relacionados ao mundo fitness.
          </p>

          <a
            className="btn btn-ghost"
            href={IG}
            target="_blank"
            rel="noreferrer"
          >
            VER NO INSTAGRAM
          </a>

        </section>

        {/* =====================================================
            CTA FINAL
        ====================================================== */}

        <section className="section center cta">

          <p className="tag">
            COMECE AGORA
          </p>

          <h2 className="xl">
            Pronto para levar
            <br />
            seu treino a sério?
          </h2>

          <p className="body narrow">
            Conheça a Academia, descubra as opções
            de treinamento e dê o primeiro passo
            para criar uma rotina mais ativa.
          </p>

          <div className="actions">

            <a
              className="btn btn-red"
              href={WA}
              target="_blank"
              rel="noreferrer"
            >
              FALAR NO WHATSAPP
            </a>

            <a
              className="btn btn-ghost"
              href="#top"
            >
              VOLTAR AO TOPO
            </a>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="footer-main">

          <strong>
            ACADEMIA
          </strong>

          <span>
            CENTRO DE TREINAMENTO
          </span>

        </div>

        <address>
          Av. Vicente Guimarães, 2020 - Canelas
          <br />
          Montes Claros - MG · 39403-503
        </address>

        <div className="footer-links">

          <a
            href={IG}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

        </div>

        <p>
          © {new Date().getFullYear()} Academia.
          Todos os direitos reservados.
        </p>

      </footer>
    </>
  );
}