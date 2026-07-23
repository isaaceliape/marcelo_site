import CarouselClient from "./CarouselClient";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <a href="#hero" className="logo">
            <img src="/logo.jpg" alt="Dr. Marcelo Goncalves" height={72} />
          </a>
          <a href="#contact" className="btn-primary header-cta">
            Agendamento online
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="container">
            <div className="accent-bar" />
            <p className="hero-kicker">Dr. Marcelo Goncalves</p>
            <p className="hero-subtitle">
              Especialista em Ortodontia — Odontologia com propósito
            </p>
            <h1 className="hero-title">
              Cuidado calmo,<br />
              resultado preciso.
            </h1>
            <p className="hero-lead">
              Odontologia geral, estética e implantes em um ambiente acolhedor e
              moderno. Um médico, uma atenção: você.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Agendar consulta
              </a>
              <a href="#tratamentos" className="btn-ghost">
                Nossos serviços
              </a>
            </div>
            <div className="hero-meta">
              <span>Fundado em 2018</span>
              <span>Santo Amaro / São Paulo</span>
              <span className="meta-accent">Registro CROSP 99907</span>
            </div>
          </div>
          <div className="hero-carousel" aria-label="Galeria do consultório">
            <div className="hero-slides">
              <div className="hero-slide active" aria-hidden="false">
                <img
                  src="/clinic.jpeg"
                  alt="Consultório odontológico moderno e iluminado"
                  loading="eager"
                />
              </div>
              <div className="hero-slide" aria-hidden="true">
                <img src="/clinic_02.jpeg" alt="Interior da clínica" loading="lazy" />
              </div>
            </div>
            <div className="hero-carousel-controls">
              <button className="hero-carousel-btn" id="hero-prev" aria-label="Anterior">
                ‹
              </button>
              <div className="hero-carousel-dots">
                <button className="hero-carousel-dot active" data-index="0" aria-label="Slide 1" />
                <button className="hero-carousel-dot" data-index="1" aria-label="Slide 2" />
              </div>
              <button className="hero-carousel-btn" id="hero-next" aria-label="Próximo">
                ›
              </button>
            </div>
          </div>
        </section>

        <section id="tratamentos" className="services">
          <div className="container">
            <div className="section-header reveal">
              <h2>Tratamentos</h2>
              <span className="section-number">01</span>
            </div>
            <div className="service-grid">
              <article className="service reveal">
                <h3>Odontologia geral</h3>
                <p>Check-ups, limpezas, restaurações e cuidados preventivos para manter o sorriso saudável.</p>
              </article>
              <article className="service reveal">
                <h3>Odontologia estética</h3>
                <p>Facetas, clareamento e design do sorriso alinhados ao seu rosto, personalidade e objetivo.</p>
              </article>
              <article className="service reveal">
                <h3>Ortodontia</h3>
                <p>Alinhadores invisíveis e aparelhos fixos para todas as idades, com acompanhamento personalizado.</p>
              </article>
              <article className="service reveal">
                <h3>Emergências</h3>
                <p>Atendimento no mesmo dia para dor, trauma e urgências odontológicas. Sem longas esperas.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="sobre" className="about">
          <div className="container">
            <div className="section-header reveal">
              <h2>Sobre</h2>
              <span className="section-number">02</span>
            </div>
            <div className="about-grid">
              <div className="about-copy reveal">
                <p>
                  O Dr. Marcelo Goncalves combina mais de uma década de experiência clínica a
                  uma abordagem calma e centrada no paciente. Cada atendimento começa ouvindo —
                  depois um plano claro, explicado de forma simples.
                </p>
                <p>
                  Formado no Brasil e com experiência na Europa, ele une fundamentos sólidos em
                  prótese, implantologia e odontologia estética. Sua prática parte de um princípio:
                  odontologia de qualidade não precisa ser um fardo.
                </p>
              </div>
              <figure className="about-image reveal" aria-hidden="true">
                <img src="/perfil.png" alt="Interior de consultório odontológico moderno" loading="lazy" />
              </figure>
              <div className="about-values reveal">
                <div className="value">
                  <span className="value-number">01</span>
                  <strong>Transparência</strong>
                  <p>Explicações, opções e custos — sempre claros desde o início.</p>
                </div>
                <div className="value">
                  <span className="value-number">02</span>
                  <strong>Precisão</strong>
                  <p>Técnicas modernas e atenção cuidadosa aos detalhes.</p>
                </div>
                <div className="value">
                  <span className="value-number">03</span>
                  <strong>Conforto</strong>
                  <p>Ambiente tranquilo, atendimento cuidadoso e tempo para perguntas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="formacao" className="credentials">
          <div className="container">
            <div className="section-header reveal">
              <h2>Formação</h2>
              <span className="section-number">03</span>
            </div>
            <div className="cred-grid">
              <article className="cred reveal">
                <h3>Graduação em Odontologia</h3>
                <p className="cred-school">Universidade de São Paulo — USP</p>
                <p className="cred-year">2010</p>
                <p className="cred-desc">Formação acadêmica sólida em clínica geral, com base em saúde bucal, prevenção e reabilitação.</p>
              </article>
              <article className="cred reveal">
                <h3>Formação em Cirurgia e Prótese sobre Implantes</h3>
                <p className="cred-school">FUNDECTO</p>
                <p className="cred-year">2011</p>
                <p className="cred-desc">Extensão universitária com foco em procedimentos cirúrgicos e reabilitação protéica.</p>
              </article>
              <article className="cred reveal">
                <h3>Especialização em Ortodontia</h3>
                <p className="cred-school">Faculdade do Centro Oeste Paulista (FACOP)</p>
                <p className="cred-year">2021</p>
                <p className="cred-desc">Especialização voltada à correção ortodôntica com foco em mini implantes e integração com cirurgia ortognática.</p>
              </article>
              <article className="cred reveal">
                <h3>Imersão em Mini Implantes</h3>
                <p className="cred-school">CEAO ACIEPE</p>
                <p className="cred-year">2022</p>
                <p className="cred-desc">Aprofundamento em fixação com mini implantes para procedimentos ortodônticos e de suporte clínico.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="dados" className="about-facts">
          <div className="container">
            <div className="fact-grid">
              <div className="fact reveal">
                <span className="fact-number" data-experience-start="2010">14+</span>
                <span className="fact-label">Anos de experiência</span>
              </div>
              <div className="fact reveal">
                <span className="fact-number">2010</span>
                <span className="fact-label">Formado em Odontologia — USP</span>
              </div>
              <div className="fact reveal">
                <span className="fact-number">1.2k+</span>
                <span className="fact-label">Pacientes atendidos</span>
              </div>
              <div className="fact reveal">
                <span className="fact-number">CROSP</span>
                <span className="fact-label">Registro 99907</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-header reveal">
              <h2>Contato</h2>
              <span className="section-number">04</span>
            </div>
            <div className="contact-grid">
              <div className="contact-info reveal">
                <p className="contact-lead">
                  Novos pacientes são bem-vindos. Ligue ou envie uma mensagem para agendar.
                </p>
                <div className="contact-block">
                  <span className="contact-label">Clínica</span>
                  <a href="tel:+551134983481">+55 11 3498-3481</a>
                </div>
                <div className="contact-block">
                  <span className="contact-block-label">Registro</span>
                  <span>CROSP 99907</span>
                </div>
                <div className="contact-block">
                  <span className="contact-label">E-mail</span>
                  <a href="mailto:contato@marcelogoncalves.com">contato@marcelogoncalves.com</a>
                </div>
                <div className="contact-block">
                  <span className="contact-label">Endereço</span>
                  <address>
                    R. Benedito Fernandes, 545 - Sl 406 - Santo Amaro, São Paulo - SP, 04746-110 -
                    Brasil
                  </address>
                </div>
                <div className="contact-block">
                  <span className="contact-label">Horários</span>
                  <p>
                    Seg–Sex 8:00–18:00
                    <br />
                    Sáb 9:00–13:00
                  </p>
                </div>
                <div className="contact-block">
                  <span className="contact-label">WhatsApp</span>
                  <a href="https://api.whatsapp.com/send?phone=5511969918002" target="_blank" rel="noopener noreferrer">
                    Enviar mensagem
                  </a>
                </div>
                <div className="contact-block">
                  <span className="contact-label">Social</span>
                  <a href="https://www.instagram.com/marcelogoncalvesodontologia/" target="_blank" rel="noopener noreferrer">
                    @marcelogoncalvesodontologia
                  </a>
                </div>
              </div>
              <form className="contact-form reveal" id="contact-form">
                <label>
                  <span>Nome completo</span>
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  <span>E-mail</span>
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                  <span>Telefone</span>
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>
                <label>
                  <span>Mensagem</span>
                  <textarea name="message" rows={4} />
                </label>
                <button className="btn-primary" type="submit" id="contact-submit">
                  Enviar mensagem
                </button>
                <p className="form-status" id="form-status" aria-live="polite" />
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer-inner">
          <span>© <span id="year" /> Dr. Marcelo Goncalves</span>
          <span>Odontologia calma e precisa.</span>
        </div>
      </footer>

      <CarouselClient />
    </>
  );
}
