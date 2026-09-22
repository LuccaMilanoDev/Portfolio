"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Plus,
  Minus,
  Copy,
  Check,
  Menu,
  X,
} from "lucide-react";
const OrbitScene = dynamic(() => import("./OrbitScene"), {
  ssr: false,
  loading: () => <div className="scene-loading">Preparando a órbita · · ·</div>,
});
const email = "luccamilano2018@gmail.com";
const github = "https://github.com/LuccaMilanoDev";
const linkedin = "https://www.linkedin.com/in/lucca-milano/";
const projects = [
  {
    name: "API REST",
    subtitle: "Uma base sólida, do endpoint ao banco.",
    description:
      "API com Spring Boot, PostgreSQL em Docker e operações CRUD. Organização de back-end e ambiente reproduzível.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    category: "Back-end",
    href: `${github}/api-rest`,
    kind: "api",
  },
  {
    name: "Milano Seguros",
    subtitle: "Presença digital que aproxima.",
    description:
      "Site institucional desenvolvido com Next.js, TypeScript e Tailwind CSS para apresentar serviços de seguros.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Front-end",
    href: `${github}/Milano-seguros`,
    demo: "https://milano-seguros.vercel.app/",
    kind: "site",
  },
  {
    name: "8-puzzle",
    subtitle: "Diferentes caminhos. Uma solução.",
    description:
      "Exploração de busca em profundidade iterativa, manipulação de estados e comparação entre implementações do quebra-cabeça.",
    tags: ["Java", "Algoritmos", "Estruturas de dados"],
    category: "Back-end",
    href: `${github}/8-puzzle`,
    kind: "puzzle",
  },
];
const experiences = [
  {
    company: "Grupo RAS",
    role: "Desenvolvedor de Software · Trainee 4",
    period: "Mar 2026 — atualmente",
    label: "EVOLUTIVA",
    description:
      "Participo ativamente de novas implementações com o time da evolutiva, trabalhando na evolução de sistemas com Java 8, Struts e JSP. No dia a dia, utilizo o padrão Fachada para organizar a comunicação entre as camadas da aplicação.",
    tags: ["Java 8", "Struts", "JSP", "Fachada"],
  },
  {
    company: "Webstar Studio",
    role: "Consultor de Software · PJ",
    period: "Mar 2026 — ago 2026",
    label: "CONSULTORIA",
    description:
      "Após a transição para o Grupo RAS, mantive uma atuação como consultor em projetos da Webstar nos quais já possuía maior conhecimento técnico e de negócio, contribuindo com a continuidade das soluções.",
    tags: [
      "Consultoria técnica",
      "Evolução de projetos",
      "Conhecimento de negócio",
    ],
  },
  {
    company: "Webstar Studio",
    role: "Desenvolvedor Júnior · CLT",
    period: "Out 2025 — mar 2026",
    label: "DESENVOLVIMENTO",
    description:
      "Fui efetivado após o estágio e trabalhei em projetos com diferentes tecnologias: Spring, PostgreSQL, Docker e AWS, além de React e Next.js no front-end. Também tive contato com Node.js e bibliotecas como face recognition.",
    tags: ["Spring", "React", "Next.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    company: "Webstar Studio",
    role: "Estagiário de Desenvolvimento",
    period: "Out 2024 — out 2025",
    label: "O INÍCIO",
    description:
      "Comecei minha trajetória profissional participando de projetos variados, construindo experiência prática em desenvolvimento full stack e aprendendo com diferentes desafios e tecnologias do time.",
    tags: ["Full stack", "Aprendizado prático", "Trabalho em equipe"],
  },
];
function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      {children}
    </div>
  );
}
export default function Portfolio() {
  const [visible, setVisible] = useState(true);
  const [tabActive, setTabActive] = useState(true);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const [expanded, setExpanded] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const hero = useRef<HTMLElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    if (hero.current) observer.observe(hero.current);
    const onVisibility = () => setTabActive(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <header className="header">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Lucca Milano, início"
        >
          lucca<span>milano</span>
          <i />
        </a>
        <nav
          aria-label="Navegação principal"
          className={menu ? "nav is-open" : "nav"}
          id="main-nav"
        >
          {[
            ["Sobre", "sobre"],
            ["Experiência", "experiencia"],
            ["Projetos", "projetos"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contato"
            onClick={() => setMenu(false)}
          >
            Vamos conversar <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button icon-button"
          aria-label={menu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menu}
          aria-controls="main-nav"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero" id="inicio" ref={hero}>
          <div className="hero-topline">
            <span>
              <i className="status-dot" /> DESENVOLVEDOR DE SOFTWARE
            </span>
            <span>
              RECIFE, BRASIL <span className="muted">/</span> 08°03′ S 34°52′ W
            </span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">OLÁ, EU SOU LUCCA MILANO</p>
              <h1>
                Entre lógica
                <br />e{" "}
                <span className="accent">
                  possibilidades<span className="period">.</span>
                </span>
              </h1>
              <p className="hero-description">
                Transformo desafios em software.
                <br />
                Do back-end à experiência, construo soluções
                <br className="desktop-break" /> que conectam tecnologia e
                pessoas.
              </p>
              <div className="hero-actions">
                <a href="#projetos" className="button primary">
                  Explorar projetos <ArrowUpRight size={19} />
                </a>
                <a href="#sobre" className="text-link">
                  Um pouco sobre mim <ArrowRight size={17} />
                </a>
              </div>
              <div className="current-role">
                <span className="role-mark">↗</span>
                <div>
                  <span>ATUALMENTE EM</span>
                  <p>
                    Grupo RAS <span>· Desenvolvedor de Software</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-art">
              <div className="orbit-guide guide-one" />
              <div className="orbit-guide guide-two" />
              <span className="art-cross cross-one">+</span>
              <span className="art-cross cross-two">+</span>
              <div className="scene">
                <OrbitScene moving={visible && tabActive} />
              </div>
              <div className="art-caption">
                <span>
                  <i className="status-dot" /> IDEIAS EM MOVIMENTO
                </span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#sobre">
              <ArrowDown size={15} /> CONTINUE EXPLORANDO
            </a>
            <span>
              JAVA <b>/</b> SPRING <b>/</b> REACT <b>/</b> NEXT.JS
            </span>
            <span className="edition">PORTFÓLIO — 2026</span>
          </div>
        </section>
        <section className="section about" id="sobre">
          <SectionLabel number="01">POR TRÁS DO CÓDIGO</SectionLabel>
          <div className="about-layout">
            <div>
              <h2>
                Curiosidade como ponto
                <br />
                de partida.
                <br />
                <span className="muted">Código como caminho.</span>
              </h2>
              <div className="portrait-row">
                <Image
                  src="/image.jpeg"
                  alt="Lucca Milano"
                  width={68}
                  height={68}
                  className="portrait"
                />
                <div>
                  <strong>Lucca Milano</strong>
                  <span>Desenvolvedor de Software · Recife, PE</span>
                </div>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-button"
                  aria-label="Perfil no LinkedIn"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
            <div className="about-copy">
              <p>
                Gosto de entender como as coisas funcionam — e de encontrar uma
                boa forma de fazê-las funcionar melhor.
              </p>
              <p>
                Sou formado em Ciência da Computação pela UNICAP. Minha
                trajetória passa por aplicações web, integrações e diferentes
                tecnologias, sempre conectando o que acontece na interface ao
                que sustenta o sistema.
              </p>
              <p>
                Hoje, no <strong>Grupo RAS</strong>, participo de novas
                implementações com o time da evolutiva. Antes, na{" "}
                <strong>Webstar Studio</strong>, fui de estagiário a
                desenvolvedor júnior e, depois, consultor de projetos que
                conhecia de perto.
              </p>
              <div className="education-note">
                <span>FORMAÇÃO</span>
                <strong>Ciência da Computação</strong>
                <p>Universidade Católica de Pernambuco · 2022–2025</p>
              </div>
            </div>
          </div>
          <div className="skills-heading">
            <h3>Ferramentas, repertório e prática.</h3>
            <span>A STACK POR TRÁS DAS SOLUÇÕES</span>
          </div>
          <div className="skills-grid">
            {[
              {
                number: "01",
                title: "Back-end",
                text: "Onde a lógica ganha estrutura.",
                tags: ["Java 8", "Spring", "Struts", "Node.js¹"],
              },
              {
                number: "02",
                title: "Front-end",
                text: "Do sistema à interação.",
                tags: ["React", "Next.js", "JSP", "Angular"],
              },
              {
                number: "03",
                title: "Dados & infraestrutura",
                text: "A base para tudo funcionar.",
                tags: ["PostgreSQL", "MySQL", "Docker", "AWS"],
              },
              {
                number: "04",
                title: "Arquitetura",
                text: "Escolhas que organizam o código.",
                tags: ["Fachada²", "MVC", "Hexagonal", "Strategy"],
              },
            ].map((skill) => (
              <article className="skill" key={skill.number}>
                <span className="skill-number">/{skill.number}</span>
                <h4>{skill.title}</h4>
                <p>{skill.text}</p>
                <div className="tags">
                  {skill.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="skills-note">
            ¹ Contato pontual em projetos. ² Padrão utilizado no dia a dia no
            Grupo RAS; demais padrões fazem parte do meu repertório.
          </p>
        </section>
        <section className="section experience" id="experiencia">
          <SectionLabel number="02">TRAJETÓRIA</SectionLabel>
          <div className="section-heading">
            <h2>
              Aprendizado que vira
              <br />
              <span className="muted">experiência real.</span>
            </h2>
            <p>
              Diferentes times, tecnologias e desafios.
              <br />
              Um caminho em constante construção.
            </p>
          </div>
          <div className="timeline">
            {experiences.map((experience, index) => (
              <article
                className={`experience-item ${expanded === index ? "expanded" : ""}`}
                key={experience.role}
              >
                <button
                  className="experience-toggle"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  aria-expanded={expanded === index}
                  aria-controls={`experience-${index}`}
                >
                  <span className="experience-period">
                    {index === 0 && <i className="status-dot" />}
                    {experience.period}
                  </span>
                  <span className="experience-title">
                    <strong>{experience.company}</strong>
                    <span>{experience.role}</span>
                  </span>
                  <span className="experience-label">{experience.label}</span>
                  <span className="expand-icon">
                    {expanded === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                </button>
                <div
                  id={`experience-${index}`}
                  hidden={expanded !== index}
                  className="experience-detail"
                >
                  <p>{experience.description}</p>
                  <div className="tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section projects" id="projetos">
          <SectionLabel number="03">PROJETOS SELECIONADOS</SectionLabel>
          <div className="section-heading">
            <h2>
              Da ideia
              <br />
              <span className="muted">para o código.</span>
            </h2>
            <div className="filters" role="group" aria-label="Filtrar projetos">
              {["Todos", "Back-end", "Front-end"].map((item) => (
                <button
                  key={item}
                  aria-pressed={filter === item}
                  className={filter === item ? "selected" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {projects
              .filter(
                (project) => filter === "Todos" || project.category === filter,
              )
              .map((project) => (
                <article key={project.name} className="project">
                  <a
                    className={`project-art ${project.kind}`}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver código de ${project.name} no GitHub`}
                  >
                    <span className="project-art-label">
                      {project.category.toUpperCase()} /{" "}
                      {project.kind === "puzzle" ? "EXPERIMENTO" : "PROJETO"}
                    </span>
                    <span className="project-art-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                    {project.kind === "api" ? (
                      <div className="api-visual">
                        <div className="terminal-top">
                          <i />
                          <i />
                          <i />
                          <span>api-rest / request</span>
                        </div>
                        <code>
                          <span className="code-green">GET</span> /api/users
                          <br />
                          <span className="code-dim">
                            Content-Type: application/json
                          </span>
                          <br />
                          <br />
                          {"{"}
                          <br />
                          {"  "}
                          <span className="code-green">&quot;status&quot;</span>
                          : &quot;ok&quot;,
                          <br />
                          {"  "}
                          <span className="code-green">
                            &quot;builtWith&quot;
                          </span>
                          : &quot;Spring Boot&quot;
                          <br />
                          {"}"}
                        </code>
                        <span className="response-code">
                          <i className="status-dot" /> 200 OK
                        </span>
                      </div>
                    ) : project.kind === "site" ? (
                      <div className="site-visual">
                        <div className="mini-nav">
                          <strong>
                            milano<span>seguros.</span>
                          </strong>
                          <span>PROTEÇÃO PARA VOCÊ ↗</span>
                        </div>
                        <div className="mini-site-body">
                          <span>SEU FUTURO, MAIS TRANQUILO.</span>
                          <strong>
                            O que importa
                            <br />
                            merece cuidado.
                          </strong>
                          <span className="mini-button">
                            Conheça as soluções ↗
                          </span>
                        </div>
                        <div className="mini-orbit" />
                      </div>
                    ) : (
                      <div className="puzzle-visual">
                        {[1, 2, 3, 4, 5, 6, 7, 8, null].map((n, i) => (
                          <span
                            key={i}
                            className={n === null ? "empty-tile" : ""}
                          >
                            {n ?? <ArrowRight size={22} />}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <Github size={15} />
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      Ver repositório <ArrowUpRight size={15} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Visitar site <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
          </div>
          <a
            className="all-projects text-link"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            Mais código, experimentos e ideias no GitHub{" "}
            <ArrowUpRight size={18} />
          </a>
        </section>
        <section className="section contact" id="contato">
          <SectionLabel number="04">PRÓXIMA CONEXÃO</SectionLabel>
          <div className="contact-layout">
            <div>
              <p className="eyebrow">UMA IDEIA, UM PROJETO OU UM BOM PAPO?</p>
              <h2>
                Vamos construir
                <br />
                <span className="accent">algo juntos.</span>
                <ArrowUpRight className="contact-arrow" />
              </h2>
              <p>
                Gosto de trocar ideias sobre tecnologia e conhecer novos
                desafios.
                <br />
                Minha caixa de entrada está aberta.
              </p>
              <a href={`mailto:${email}`} className="button primary">
                Vamos conversar <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="contact-details">
              <span className="eyebrow">ME ENCONTRE POR AQUI</span>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={19} />
                <span>LinkedIn</span>
                <ArrowUpRight size={18} />
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <Github size={19} />
                <span>GitHub</span>
                <ArrowUpRight size={18} />
              </a>
              <div className="email-line">
                <a href={`mailto:${email}`}>{email}</a>
                <button
                  className="icon-button"
                  aria-label="Copiar endereço de e-mail"
                  onClick={copyEmail}
                >
                  {copied ? <Check size={17} /> : <Copy size={17} />}
                </button>
              </div>
              <span className="copy-status" role="status">
                {copied
                  ? "E-mail copiado!"
                  : copyError
                    ? "Selecione o endereço acima para copiar."
                    : "Recife, Pernambuco · Brasil"}
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a className="wordmark" href="#inicio">
          lucca<span>milano</span>
          <i />
        </a>
        <span>© {new Date().getFullYear()} Lucca Milano</span>
        <a href="#inicio">
          De volta ao topo <ArrowUpRight size={15} />
        </a>
      </footer>
    </>
  );
}
