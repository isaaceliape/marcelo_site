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
              Especialista em Ortodontia. Odontologia com propósito
            </p>
            <h1 className="hero-title">
              Cuidado individualizado,<br />
              resultado preciso.
            </h1>
            <p className="hero-lead">
              Odontologia geral, ortodontia, dentística e mais especialidades em Santo Amaro, São Paulo. Ambiente acolhedor e moderno.
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
              <span>Fundado em 2014</span>
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
                <p>Check-ups e cuidados preventivos para manter a saúde em dia. A prevenção é o melhor tratamento.</p>
              </article>
              <article className="service reveal">
                <h3>Dentística</h3>
                <p>Restaurações, clareamento e estética dental e design do sorriso alinhados ao seu rosto, personalidade e objetivo.</p>
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
                  Marcelo Goncalves e seus colaboradores combinam mais de uma década de experiência clínica a
                  uma abordagem calma e individualizada para cada paciente, integrando diversas especialidades
                  odontológicas. Cada atendimento começa ouvindo. Depois, um plano claro, explicado de forma simples.
                </p>
                <p>
                  Formado pela <strong>USP</strong> e especialista em ortodontia, ele une fundamentos sólidos em
                  diversas áreas da odontologia. Atende em <strong>Santo Amaro, Zona Sul de São Paulo</strong>,
                  com foco em resultados naturais e conforto durante todo o tratamento.
                </p>
              </div>
              <figure className="about-image reveal" aria-hidden="true">
                <img src="/perfil.png" alt="Interior de consultório odontológico moderno" loading="lazy" />
              </figure>
              <div className="about-values reveal">
                <div className="value">
                  <span className="value-number">01</span>
                  <strong>Transparência</strong>
                  <p>Explicações, opções e custos, sempre claros desde o início.</p>
                </div>
                <div className="value">
                  <span className="value-number">02</span>
                  <strong>Precisão</strong>
                  <p>Técnicas baseadas em evidências científicas e atenção cuidadosa aos detalhes.</p>
                </div>
                <div className="value">
                  <span className="value-number">03</span>
                  <strong>Conforto</strong>
                  <p>Ambiente tranquilo, atendimento cuidadoso e tempo para esclarecimento de dúvidas.</p>
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
                <p className="cred-school">Universidade de São Paulo (USP)</p>
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
              <article className="cred reveal">
                <h3>Preparo ortodôntico para cirurgia ortognática</h3>
                <p className="cred-school">SUZUKI ORTODONTIA</p>
                <p className="cred-year">2022</p>
                <p className="cred-desc">Formação em preparo ortodôntico integrado à cirurgia ortognática.</p>
              </article>
              <article className="cred reveal">
                <h3>Clínica de alinhadores estéticos</h3>
                <p className="cred-school">SUZUKI ORTODONTIA</p>
                <p className="cred-year">desde 2021</p>
                <p className="cred-desc">Atuação como professor assistente na clínica de alinhadores estéticos.</p>
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
                <span className="fact-label">Formado em Odontologia, USP</span>
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
                  Todos são bem-vindos. Entre em contato para agendar uma consulta.
                </p>
                <div className="contact-block">
                  <span className="contact-label">Clínica</span>
                  <a href="tel:+5511969918002">+55 11 96991-8002</a>
                </div>
                <div className="contact-block">
                  <span className="contact-block-label">Registro</span>
                  <span>CROSP 99907</span>
                </div>
                <div className="contact-block">
                  <span className="contact-label">E-mail</span>
                  <a href="mailto:marcelogoncalvesodontologia@gmail.com">marcelogoncalvesodontologia@gmail.com</a>
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
                    Seg–Sex 09:00–18:00
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

      <a
        href="https://api.whatsapp.com/send?phone=5511969918002"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Fale pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28">
          <path d="M16 2C8.3 2 2 8.3 2 16c0 2.8.9 5.5 2.5 7.7L2 30l6.5-2.5C10.8 29.1 13.4 30 16 30c7.7 0 14-6.3 14-14S23.7 2 16 2zm0 26c-2.4 0-4.7-.7-6.7-2l-.5-.3-4 1.5 1.5-3.9-.3-.5C5.7 21.7 5 19.4 5 17 5 10.9 9.9 6 16 6s11 4.9 11 11-4.9 11-11 11zm6.1-8.4c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2s-.9 1.1-1.1 1.3c-.2.2-.4.2-.7.1-1.5-.8-2.6-1.4-3.6-2.8-.3-.4-.3-.6-.2-.9.1-.2.3-.2.4-.3s.3-.3.4-.5.2-.3.1-.6c-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.8.4-.6.6-1.5 1.6-1.5 3.9s1.5 4.5 1.7 4.8c.2.3 3 4.5 7.2 5.5 4.2 1 4.2-.7 4.2-.7.4-1.2 1.9-2.4 2.2-2.7.3-.3.4-.3.7-.1.3.1 1.7.9 2 1.1.3.2.5.2.6.1.1-.1.1-.4 0-.6-.1-.3-.8-1.7-1.1-2.2-.3-.5-.6-.5-.9-.6z"/>
        </svg>
      </a>

      <CarouselClient />
    </>
  );
}
