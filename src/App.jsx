import { useEffect } from 'react'
import './App.css'

const trifectas = [
  {
    number: '01',
    stage: 'Stage 01 — Starting from Zero',
    title: 'Starter Trifecta',
    desc: 'No clients, no portfolio, no idea where to start. Three tools to find your niche, build your first application, and launch your VA career with a system behind it.',
    tools: ['Application Killer Audit', 'First Client Blueprint', 'VA Launch Kit Builder'],
    href: 'https://app.marginmomentum.co',
    cta: 'Access Starter Trifecta',
  },
  {
    number: '02',
    stage: 'Stage 02 — Just Got Your First Client',
    title: 'First 90 Days',
    desc: 'You landed a client. Now keep them. Three tools to professionalise your first week, make your value visible, and have the conversation that turns a project into a retainer.',
    tools: ['First Client Readiness Audit', 'First 90 Days Blueprint', 'Client Success System Builder'],
    href: 'https://app.marginmomentum.co',
    cta: 'Access First 90 Days',
  },
  {
    number: '03',
    stage: 'Stage 03 — Ready for Stable Income',
    title: 'Lean Trifecta',
    desc: 'You have clients but income is unpredictable. Three tools to audit your retainer readiness, follow the blueprint, and build the system that keeps clients paying month after month.',
    tools: ['Retainer Readiness Audit', 'The Retainer Blueprint', 'Stable Income System Builder'],
    href: 'https://app.marginmomentum.co',
    cta: 'Access Lean Trifecta',
  },
]

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="https://marginmomentum.co" className="nav-wordmark">
          Margin &amp; Momentum™ <span>Systems Over Hustle™</span>
        </a>
        <ul className="nav-links">
          <li><a href="https://app.marginmomentum.co">VA Launch System Portal</a></li>
          <li><a href="https://valibrary.marginmomentum.co">Mainframe VA Library</a></li>
          <li><a href="https://systems.marginmomentum.co" className="active">VA Systems Library</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-bg-text">SYS</div>
        <div className="hero-label">Margin &amp; Momentum™ — Free Resource</div>
        <h1 className="hero-title">
          VA Systems<br /><em>Library.</em>
        </h1>
        <p className="hero-sub">
          Three free tool sets for Filipino VAs — built for every stage of your VA career.
          Each trifecta has one outcome: move you forward, faster.
        </p>
        <div className="hero-bottom-rule" />
      </section>

      {/* NICHE FINDER */}
      <section className="niche-finder">
        <div className="section-inner">
          <div className="niche-finder-left reveal">
            <div className="section-tag">Start Here — Before You Pick a Stage</div>
            <h2>Not Sure What Niche You're In?</h2>
            <p>
              12 questions. A specific niche match from 12 high-demand VA specializations.
              An AI-written brand statement ready to paste into your resume and proposals.
              Find your VA niche in 5 minutes — then come back and pick your stage.
            </p>
            <a href="https://app.marginmomentum.co" className="btn-primary">
              Find My Niche →
            </a>
          </div>
          <div className="niche-stat-block reveal">
            <div className="niche-stat">
              <div className="niche-stat-num">12</div>
              <div className="niche-stat-label">Questions to a specific niche match from high-demand VA specializations.</div>
            </div>
            <div className="niche-stat-divider" />
            <div className="niche-stat">
              <div className="niche-stat-num">1</div>
              <div className="niche-stat-label">AI-written brand statement ready to paste into your resume and proposals.</div>
            </div>
            <div className="niche-stat-divider" />
            <div className="niche-stat">
              <div className="niche-stat-num">5</div>
              <div className="niche-stat-label">Minutes to find your niche. Zero cost. No account required.</div>
            </div>
          </div>
        </div>
      </section>

      {/* STAGE DIVIDER */}
      <div className="stage-divider">
        <div className="section-inner">
          <div className="stage-divider-line" />
          <div className="stage-divider-text">Already know your niche? Pick your stage below.</div>
          <div className="stage-divider-line" />
        </div>
      </div>

      {/* TRIFECTAS */}
      <div className="trifectas">
        {trifectas.map((t, i) => (
          <div key={i} className="trifecta-card reveal">
            <div className="trifecta-number">{t.number}</div>
            <div className="trifecta-content">
              <div className="trifecta-stage">{t.stage}</div>
              <div className="trifecta-title">{t.title}</div>
              <p className="trifecta-desc">{t.desc}</p>
              <div className="trifecta-tools">
                {t.tools.map((tool, j) => (
                  <span key={j} className="trifecta-tool">
                    {String(j + 1).padStart(2, '0')} {tool}
                  </span>
                ))}
              </div>
              <a href={t.href} className="btn-primary">{t.cta} →</a>
            </div>
          </div>
        ))}
      </div>

      {/* WHY FREE */}
      <section className="why-free">
        <div className="section-inner">
          <div className="why-free-left reveal">
            <div className="section-tag">Why Free</div>
            <h2>A System That Works Should Not Be a Luxury.</h2>
            <p>
              These tools exist because every Filipino VA deserves a system — not just a hustle.
            </p>
            <p>
              <strong>All three trifectas are completely free.</strong> No paywalls. No upsells.
              Just the system that moves you forward.
            </p>
          </div>
          <div className="why-free-stat reveal">
            <span className="why-free-stat-num">3</span>
            <span className="why-free-stat-label">Trifectas.<br />Free access.<br />No exceptions.</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="site-footer">
          <div className="footer-bottom">
            <div>
              <div className="footer-wordmark">Margin &amp; Momentum™</div>
              <div className="footer-tagline">Systems Over Hustle™</div>
              <div className="footer-copy">© 2025 Margin &amp; Momentum™. All rights reserved.</div>
              <div className="footer-legal">
                <a href="https://marginmomentum.co/terms">Terms</a>
                <a href="https://marginmomentum.co/privacy">Privacy</a>
              </div>
            </div>
            <ul className="footer-nav">
              <li><a href="https://app.marginmomentum.co">VA Launch System Portal</a></li>
              <li><a href="https://valibrary.marginmomentum.co">Mainframe VA Library</a></li>
              <li><a href="https://marginmomentum.co">Main Hub</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
