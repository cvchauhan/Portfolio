import { useState } from 'react';

const upworkUrl = 'https://www.upwork.com/freelancers/~0127565d4749e1d305';

const services = [
  {
    number: '01',
    title: 'Angular applications',
    description: 'Build new features, improve responsive interfaces, resolve difficult bugs, and modernize existing applications.',
    tags: ['Angular 21', 'TypeScript', 'Signals'],
    className: 'service-angular',
  },
  {
    number: '02',
    title: 'Backend & APIs',
    description: 'Create maintainable REST APIs, integrate external services, and implement secure authentication and permissions.',
    tags: ['Node.js', 'Express', 'REST / SOAP'],
    className: 'service-backend',
  },
  {
    number: '03',
    title: 'Data & performance',
    description: 'Find the cause of slow queries, improve stored procedures, and make database work faster without changing business rules.',
    tags: ['SQL Server', 'Stored procedures', 'Optimization'],
    className: 'service-data',
  },
];

const technologies = [
  { category: 'Frontend', items: 'Angular · TypeScript · JavaScript · HTML · CSS' },
  { category: 'Backend', items: 'Node.js · Express · REST APIs · .NET middleware' },
  { category: 'Databases', items: 'SQL Server · MySQL · MongoDB' },
  { category: 'Delivery', items: 'Docker · AWS · CI/CD · Jest' },
];

function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page">
        <div className="header-wrap" id="top">
          <header className="header container">
            <a className="logo" href="#top" onClick={closeMenu} aria-label="Chirag Chauhan, back to top">
              <span className="logo-symbol">C<span>.</span></span>
              <span className="logo-name">Chirag Chauhan</span>
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
            </button>
            <nav id="main-navigation" className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
              <a href="#expertise" onClick={closeMenu}>Expertise</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
              <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <Arrow diagonal /></a>
            </nav>
          </header>
        </div>

        <main id="main">
          <div className="hero-wrap">
            <section className="hero container" aria-labelledby="hero-title">
              <div className="hero-content">
                <p className="eyebrow"><span className="eyebrow-rule" /> Full-stack developer <span className="eyebrow-separator">/</span> India</p>
                <h1 id="hero-title">Thoughtful code for <span>complex ideas.</span></h1>
                <p className="hero-summary">I’m Chirag, a developer working across Angular, Node.js, and SQL. I build useful features, improve existing systems, and make hard technical problems easier to solve.</p>
                <div className="hero-actions">
                  <a className="primary-button" href={upworkUrl} target="_blank" rel="noopener noreferrer">Work with me <Arrow diagonal /></a>
                  <a className="secondary-link" href="#expertise">See what I do <Arrow /></a>
                </div>
                <div className="hero-footnote"><span className="accent-line" /> 8+ years building web applications and APIs</div>
              </div>

              <div className="hero-visual" aria-label="Areas of work">
                <div className="visual-corner visual-corner-top" />
                <div className="visual-corner visual-corner-bottom" />
                <div className="visual-label">FULL-STACK / 001</div>
                <div className="visual-title">From interface<br />to infrastructure<span>.</span></div>
                <div className="visual-list">
                  <div><span>01</span><strong>Product interfaces</strong><small>Angular · TypeScript</small></div>
                  <div><span>02</span><strong>Backend services</strong><small>Node.js · Express</small></div>
                  <div><span>03</span><strong>Reliable data</strong><small>SQL Server · MongoDB</small></div>
                </div>
                <div className="visual-bottom"><span>BUILD / IMPROVE / MAINTAIN</span><span aria-hidden="true">✳</span></div>
              </div>
            </section>
          </div>

        <section className="expertise section container" id="expertise" aria-labelledby="expertise-title">
          <div className="section-intro">
            <div><p className="section-label">01 / EXPERTISE</p><h2 id="expertise-title">Where I bring<br /><em>the most value.</em></h2></div>
            <p>Practical development support for products that need to move forward without losing what already works.</p>
          </div>
          <div className="services">
            {services.map((service) => (
              <article className={`service-card ${service.className}`} key={service.number}>
                <div className="service-top"><span>{service.number} / SERVICE</span><span className="service-cross" aria-hidden="true">✳</span></div>
                <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
                <div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach" aria-labelledby="approach-title">
          <div className="container approach-inner">
            <div className="approach-heading"><p className="section-label">02 / HOW I WORK</p><h2 id="approach-title">Good work starts with understanding the problem.</h2></div>
            <div className="approach-copy">
              <p>I’m comfortable joining an existing codebase, tracing how a feature actually works, and making a focused change. That might be an Angular upgrade, an API integration, or a stored procedure that needs to run faster.</p>
              <p>My aim is straightforward: software that solves the requirement and stays understandable for the people who maintain it.</p>
              <a href="#contact" className="inline-link">Let’s discuss your project <Arrow diagonal /></a>
            </div>
          </div>
        </section>

        <section className="about section container" id="about" aria-labelledby="about-title">
          <div className="about-heading"><p className="section-label">03 / ABOUT ME</p><h2 id="about-title">Experience across the stack.<br /><em>Attention to the details.</em></h2></div>
          <div className="about-grid">
            <div className="experience-tile"><span className="tile-label">PROFESSIONAL EXPERIENCE</span><strong>8<span>+</span></strong><p>years building and improving software</p></div>
            <div className="about-text"><p>Over the past 8+ years, I’ve worked on enterprise applications in financial services, business process automation, and service management. My work spans responsive frontends, secure APIs, and database-backed systems.</p><p>I’m especially at home when a product needs both new development and careful improvement of an existing application.</p></div>
          </div>
        </section>

        <section className="toolkit section" id="toolkit" aria-labelledby="toolkit-title">
          <div className="container toolkit-inner">
            <div><p className="section-label">04 / TOOLKIT</p><h2 id="toolkit-title">The tools behind<br />the work.</h2></div>
            <div className="technology-list">
              {technologies.map(({ category, items }) => <div className="technology-row" key={category}><span>{category}</span><p>{items}</p></div>)}
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div><p className="section-label">05 / CONTACT</p><h2 id="contact-title">Let’s make your next<br />project work better.</h2><p>Have an Angular feature, a Node.js API, or a slow database query to solve? Tell me about it.</p></div>
            <a className="contact-button" href={upworkUrl} target="_blank" rel="noopener noreferrer">Contact me on Upwork <Arrow diagonal /></a>
          </div>
        </section>
        </main>
        <footer className="footer container"><span>© {new Date().getFullYear()} Chirag Chauhan</span><a href="#top">Back to top ↑</a></footer>
      </div>
    </>
  );
}

export default App;
