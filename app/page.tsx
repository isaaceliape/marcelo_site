import CarouselClient from "./CarouselClient";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <a href="#hero" className="logo">
            <img src="/logo.jpg" alt="Dr. Marcelo Gonçalves" height={72} />
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
            <p className="hero-kicker">Dr. Marcelo Gonçalves</p>
            <p className="hero-subtitle">
              Cirurgião-Dentista | Especialista em Ortodontia
              <br />
              Odontologia com propósito
            </p>
            <h1 className="hero-title">
              Cuidado individualizado.<br />
              Resultados naturais.
            </h1>
            <p className="hero-lead">
              Clínica geral, dentística e ortodontia em Santo Amaro, São Paulo.
            </p>
            <p className="hero-lead">
              Um atendimento próximo, tranquilo e personalizado, com planejamento cuidadoso e integração entre diferentes especialidades da odontologia.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Agendar consulta
              </a>
              <a href="#tratamentos" className="btn-ghost">
                Conheça nossos tratamentos
              </a>
            </div>
            <div className="hero-meta">
              <span>Desde 2014</span>
              <span>Santo Amaro, São Paulo</span>
              <span className="meta-accent">CROSP 99907</span>
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
                <h3>Clínica Geral</h3>
                <p>Cuidados preventivos e tratamentos para manter sua saúde bucal em dia. Consultas, avaliações e acompanhamento individualizado. Prevenir continua sendo a melhor forma de cuidar.</p>
              </article>
              <article className="service reveal">
                <h3>Dentística</h3>
                <p>Restaurações, clareamento e procedimentos estéticos planejados para valorizar o sorriso de forma natural, respeitando as características do rosto, a personalidade e os objetivos de cada paciente.</p>
              </article>
              <article className="service reveal">
                <h3>Ortodontia</h3>
                <p>Tratamentos com aparelhos fixos e alinhadores transparentes para crianças, adolescentes e adultos. Cada caso é avaliado individualmente para definir o planejamento mais adequado.</p>
              </article>
              <article className="service reveal">
                <h3>Endodontia</h3>
                <p>Tratamento de canal realizado com planejamento e atenção aos detalhes, buscando preservar o dente e devolver conforto e função.</p>
              </article>
              <article className="service reveal">
                <h3>Cirurgia</h3>
                <p>Procedimentos cirúrgicos realizados com planejamento, segurança e acompanhamento individualizado.</p>
              </article>
              <article className="service reveal">
                <h3>Prótese</h3>
                <p>Reabilitação de dentes comprometidos ou ausentes, buscando recuperar função, conforto e estética.</p>
              </article>
              <article className="service reveal">
                <h3>Implantodontia</h3>
                <p>Implantes e reabilitações sobre implantes para substituir dentes perdidos e devolver função e harmonia ao sorriso.</p>
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
                  <strong>Uma odontologia próxima, cuidadosa e baseada em conhecimento</strong>
                </p>
                <p>
                  Desde 2014, o Dr. Marcelo Gonçalves atua na odontologia unindo experiência clínica,
                  atualização constante e uma abordagem individualizada.
                </p>
                <p>
                  Especialista em Ortodontia e graduado pela Universidade de São Paulo (USP), construiu sua
                  trajetória profissional com formação em diferentes áreas da odontologia e experiência na
                  integração entre ortodontia, estética e reabilitação oral.
                </p>
                <p>
                  Em seu consultório, cada tratamento começa pela escuta. O objetivo é compreender as necessidades
                  e expectativas de cada paciente para, então, construir um plano de tratamento claro,
                  individualizado e baseado em evidências científicas.
                </p>
                <p>
                  A atuação em conjunto com profissionais de diferentes especialidades permite oferecer uma
                  abordagem integrada, especialmente nos casos que exigem mais de uma área da odontologia.
                </p>
              </div>
              <figure className="about-image reveal" aria-hidden="true">
                <img src="/perfil.png" alt="Interior de consultório odontológico moderno" loading="lazy" />
              </figure>
              <div className="about-values reveal">
                <p>
                  <strong>O que guia nosso trabalho</strong>
                </p>
                <div className="value">
                  <span className="value-number">01</span>
                  <strong>Transparência</strong>
                  <p>Explicamos o diagnóstico, as possibilidades de tratamento e os custos de maneira clara, para que você possa tomar suas decisões com segurança.</p>
                </div>
                <div className="value">
                  <span className="value-number">02</span>
                  <strong>Precisão</strong>
                  <p>Planejamento cuidadoso, atenção aos detalhes e utilização de técnicas fundamentadas em conhecimento científico.</p>
                </div>
                <div className="value">
                  <span className="value-number">03</span>
                  <strong>Conforto</strong>
                  <p>Um atendimento tranquilo, próximo e respeitoso, com tempo para ouvir, explicar e esclarecer suas dúvidas.</p>
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
                <p className="cred-desc">Formação acadêmica com base em clínica odontológica, saúde bucal, prevenção e reabilitação.</p>
              </article>
              <article className="cred reveal">
                <h3>Formação em Cirurgia e Prótese sobre Implantes</h3>
                <p className="cred-school">FUNDECTO</p>
                <p className="cred-year">2011</p>
                <p className="cred-desc">Extensão universitária com ênfase em procedimentos cirúrgicos e reabilitação protética sobre implantes.</p>
              </article>
              <article className="cred reveal">
                <h3>Especialização em Ortodontia</h3>
                <p className="cred-school">Faculdade do Centro Oeste Paulista (FACOP)</p>
                <p className="cred-year">2021</p>
                <p className="cred-desc">Especialização em Ortodontia, com aprofundamento em mecânicas ortodônticas, utilização de mini-implantes e integração com a cirurgia ortognática.</p>
              </article>
              <article className="cred reveal">
                <h3>Imersão em Mini-Implantes</h3>
                <p className="cred-school">CEAO ACIEPE</p>
                <p className="cred-year">2022</p>
                <p className="cred-desc">Aprofundamento em técnicas de ancoragem esquelética e utilização de mini-implantes em tratamentos ortodônticos.</p>
              </article>
              <article className="cred reveal">
                <h3>Preparo Ortodôntico para Cirurgia Ortognática</h3>
                <p className="cred-school">Suzuki Ortodontia</p>
                <p className="cred-year">2022</p>
                <p className="cred-desc">Aprimoramento do planejamento e da condução ortodôntica de pacientes com indicação de cirurgia ortognática.</p>
              </article>
              <article className="cred reveal">
                <h3>Clínica de Alinhadores Estéticos</h3>
                <p className="cred-school">Suzuki Ortodontia</p>
                <p className="cred-year">Desde 2021</p>
                <p className="cred-desc">Atuação como professor assistente na clínica de alinhadores estéticos, acompanhando o planejamento e a condução de tratamentos ortodônticos com alinhadores.</p>
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
                  Será um prazer receber você
                </p>
                <p className="contact-lead">
                  Todos são bem-vindos. Entre em contato para tirar suas dúvidas ou agendar uma consulta.
                </p>
                <div className="contact-block">
                  <span className="contact-label">Telefone / WhatsApp</span>
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
                    R. Benedito Fernandes, 545 · Sala 406
                    <br />
                    Santo Amaro · São Paulo, SP
                    <br />
                    04746-110 · Brasil
                  </address>
                </div>
                <div className="contact-block">
                  <span className="contact-label">Horários</span>
                  <p>
                    Segunda a sexta · 09h–18h
                    <br />
                    Sábado · 09h–13h
                  </p>
                </div>
                <div className="contact-block">
                  <span className="contact-label">WhatsApp</span>
                  <a href="https://api.whatsapp.com/send?phone=5511969918002" target="_blank" rel="noopener noreferrer">
                    Enviar mensagem
                  </a>
                </div>
                <div className="contact-block">
                  <span className="contact-label">Instagram</span>
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
                  <textarea name="message" rows={4} required />
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
          <span>© <span id="year" /> Dr. Marcelo Gonçalves</span>
          <span>Odontologia com propósito.</span>
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
