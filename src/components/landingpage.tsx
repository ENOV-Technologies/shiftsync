import { useState, useEffect } from "react";
import "../landingpage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your email handling logic here
    alert("Obrigado! Entraremos em contacto em breve.");
    setEmail("");
  };

  const features = [
    {
      icon: "⚡",
      title: "Acesso Instantâneo",
      description: "Vê o teu horário em segundos, em qualquer lugar",
    },
    {
      icon: "🔄",
      title: "Atualizações Automáticas",
      description: "Sem trabalho manual. Recebe mudanças em tempo real",
    },
    {
      icon: "📱",
      title: "Sempre Contigo",
      description: "Funciona offline. O teu horário está sempre disponível",
    },
    {
      icon: "👥",
      title: "Partilha Fácil",
      description: "Coordena com família e colegas sem complicações",
    },
    {
      icon: "🔔",
      title: "Nunca Faltes",
      description: "Notificações inteligentes para mudanças de última hora",
    },
    {
      icon: "✨",
      title: "Zero Confusão",
      description: "Sempre a versão certa. Acabaram-se os screenshots perdidos",
    },
  ];

  const problems = [
    "Screenshots acumulados nas fotos",
    "Atualizar calendário manualmente",
    "Não saber qual é a versão certa",
    "Perder tempo a procurar o horário",
    "Família não sabe quando trabalhas",
  ];

  return (
    <div className="landing">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-content">
          <div className="logo">
            <div className="flex justify-center mb-6">
              <Link
                to="/"
                aria-label="ShiftSync home"
                className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-autisync-gold rounded-md"
              >
                <img
                  src="/logo_.png"
                  alt="ShiftSync logo"
                  width={480}
                  height={480}
                  className="h-16 w-auto"
                  loading="eager"
                  decoding="async"
                />
                <span className="sr-only">ShiftSync</span>
              </Link>
            </div>
          </div>
          <Link to="/" className="nav-cta">
            Acesso Antecipado
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot text-autisync-black"></span>
            Brevemente em Portugal
          </div>

          <h1 className="hero-title">
            O teu horário.
            <br />
            <span className="gradient-text">Sempre à mão.</span>
            <br />
            Zero stress.
          </h1>

          <p className="hero-subtitle">
            Acabaram-se os screenshots perdidos e calendários desatualizados.
            <br />
            ShiftSync sincroniza o teu horário de trabalho automaticamente.
          </p>

          <form onSubmit={handleSubmit} className="hero-form">
            <input
              type="email"
              placeholder="o-teu-email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button type="submit" className="cta-button">
              Quero Acesso Grátis
              <span className="arrow">→</span>
            </button>
          </form>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">2 min</div>
              <div className="stat-label">tempo poupado/dia</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">grátis na beta</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">screenshots necessários</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Descobre mais</span>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem">
        <div className="problem-content">
          <div className="section-tag">O Problema</div>
          <h2 className="section-title">
            Gerir horários não devia
            <br />
            ser um trabalho extra
          </h2>

          <div className="problem-grid">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="problem-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="problem-icon">😰</span>
                <span className="problem-text">{problem}</span>
              </div>
            ))}
          </div>

          <div className="problem-stat">
            <div className="problem-stat-number">73%</div>
            <div className="problem-stat-text">
              dos trabalhadores por turnos já perderam ou chegaram atrasados
              <br />
              por confusão com o horário
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution">
        <div className="solution-content">
          <div className="section-tag bright">A Solução</div>
          <h2 className="section-title light">
            Um só sítio.
            <br />
            Sempre atualizado.
            <br />
            Zero trabalho.
          </h2>

          <div className="phone-mockup">
            <div className="phone">
              <div className="phone-screen">
                <div className="screen-header">
                  <div className="screen-time">09:41</div>
                  <div className="screen-icons">
                    <div className="signal"></div>
                    <div className="wifi"></div>
                    <div className="battery"></div>
                  </div>
                </div>
                <div className="screen-content">
                  <div className="calendar-header">
                    <h3>Os Teus Turnos</h3>
                    <div className="calendar-date">Fevereiro 2026</div>
                  </div>
                  <div className="calendar-days">
                    <div className="day-card today">
                      <div className="day-label">Hoje</div>
                      <div className="day-date">15 Fev</div>
                      <div className="shift-time">14:00 - 22:00</div>
                      <div className="shift-badge">Turno Tarde</div>
                    </div>
                    <div className="day-card">
                      <div className="day-label">Amanhã</div>
                      <div className="day-date">16 Fev</div>
                      <div className="shift-time">Folga</div>
                      <div className="shift-badge free">Dia Livre</div>
                    </div>
                    <div className="day-card">
                      <div className="day-label">Dom</div>
                      <div className="day-date">17 Fev</div>
                      <div className="shift-time">10:00 - 18:00</div>
                      <div className="shift-badge">Turno Manhã</div>
                    </div>
                  </div>
                  <div className="notification-banner">
                    <span className="notif-icon">🔔</span>
                    <span>Turno de 18 Fev foi alterado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-content">
          <div className="section-tag">Funcionalidades</div>
          <h2 className="section-title">
            Criado para quem trabalha
            <br />
            por turnos
          </h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="proof-content">
          <div className="proof-badge">
            <span className="proof-dot"></span>
            Já em fase de testes
          </div>
          <h2 className="proof-title">Junta-te aos primeiros utilizadores</h2>
          <div className="proof-stats">
            <div className="proof-stat">
              <div className="proof-number">200+</div>
              <div className="proof-label">na lista de espera</div>
            </div>
            <div className="proof-stat">
              <div className="proof-number">5★</div>
              <div className="proof-label">feedback dos testers</div>
            </div>
            <div className="proof-stat">
              <div className="proof-number">100%</div>
              <div className="proof-label">grátis durante beta</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="early-access">
        <div className="cta-content">
          <div className="cta-badge">
            <span className="cta-badge-icon">🚀</span>
            Acesso Antecipado Grátis
          </div>

          <h2 className="cta-title">
            Experimenta o ShiftSync
            <br />
            antes de toda a gente
          </h2>

          <p className="cta-subtitle">
            Acesso grátis vitalício para os primeiros 500 utilizadores.
            <br />
            Sem cartão de crédito. Sem truques.
          </p>

          <form onSubmit={handleSubmit} className="cta-form">
            <input
              type="email"
              placeholder="o-teu-email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="cta-input"
            />
            <button type="submit" className="cta-submit">
              Quero Entrar
              <span className="submit-arrow">→</span>
            </button>
          </form>

          <div className="cta-note">✨ Lançamento previsto para Março 2026</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">ShiftSync</span>
            </div>
            <p className="footer-tagline">
              Gestão de horários sem complicações
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Produto</h4>
              <a href="#features">Funcionalidades</a>
              <a href="#early-access">Acesso Antecipado</a>
              <a href="#pricing">Preços</a>
            </div>
            <div className="footer-column">
              <h4>Suporte</h4>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contacto</a>
              <a href="#help">Centro de Ajuda</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#privacy">Privacidade</a>
              <a href="#terms">Termos</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ShiftSync. Feito em Portugal 🇵🇹</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
