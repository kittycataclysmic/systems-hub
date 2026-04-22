import { useEffect, useState } from 'react'
import './App.css'

const trifectas = [
  {
    number: '01',
    stage: 'Stage 01 — Starting from Zero',
    title: 'Starter Trifecta',
    desc: 'No clients, no portfolio, no idea where to start. Three tools to find your niche, build your first application, and launch your VA career with a system behind it.',
    tools: ['Application Killer Audit', 'First Client Blueprint', 'VA Launch Kit Builder'],
    href: 'https://starter.marginmomentum.co/',
    cta: 'Access Starter Trifecta',
  },
  {
    number: '02',
    stage: 'Stage 02 — Just Got Your First Client',
    title: 'First 90 Days',
    desc: 'You landed a client. Now keep them. Three tools to professionalise your first week, make your value visible, and have the conversation that turns a project into a retainer.',
    tools: ['First Client Readiness Audit', 'First 90 Days Blueprint', 'Client Success System Builder'],
    href: 'https://first90.marginmomentum.co/',
    cta: 'Access First 90 Days',
  },
  {
    number: '03',
    stage: 'Stage 03 — Ready for Stable Income',
    title: 'Lean Trifecta',
    desc: 'You have clients but income is unpredictable. Three tools to audit your retainer readiness, follow the blueprint, and build the system that keeps clients paying month after month.',
    tools: ['Retainer Readiness Audit', 'The Retainer Blueprint', 'Stable Income System Builder'],
    href: 'https://lean.marginmomentum.co/',
    cta: 'Access Lean Trifecta',
  },
]

// ─── LEGAL PAGE WRAPPER ───────────────────────────────────────────────────────
function LegalPage({ title, lastUpdated, children, onBack, setPage }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
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

      <div className="legal-page">
        <div className="legal-tag">Legal</div>
        <h1 className="legal-title">{title}</h1>
        <div className="legal-meta">Last Updated: {lastUpdated} · Margin &amp; Momentum™</div>
        <div className="legal-rule" />
        <div className="legal-body">{children}</div>
        <div className="legal-back">
          <button className="legal-back-btn" onClick={onBack}>← Back to VA Systems Library</button>
        </div>
      </div>

      <footer>
        <div className="site-footer">
          <div className="footer-bottom">
            <div>
              <div className="footer-wordmark">Margin &amp; Momentum™</div>
              <div className="footer-tagline">Systems Over Hustle™</div>
              <div className="footer-copy">© 2026 Margin &amp; Momentum™. All rights reserved.</div>
              <div className="footer-legal">
                <a href="#" onClick={e => { e.preventDefault(); setPage('terms') }}>Terms</a>
                <a href="#" onClick={e => { e.preventDefault(); setPage('privacy') }}>Privacy</a>
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

// ─── TERMS PAGE ───────────────────────────────────────────────────────────────
function TermsPage({ onBack, setPage }) {
  return (
    <LegalPage title="Terms &amp; Conditions" lastUpdated="March 2026" onBack={onBack} setPage={setPage}>
      <p className="legal-lead">
        By accessing or using any product, resource, portal, or content provided by Margin &amp; Momentum™ ("the System"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the System.
      </p>
      <p>These terms apply to all users of marginmomentum.co, the VA Launch System portal, the VA Systems Library, the Mainframe VA Library, the POL Framework™, and any related properties operated under the Margin &amp; Momentum™ brand.</p>

      <h2 className="legal-h2">1. Acceptance of Terms</h2>
      <p>By accessing or using any part of the Margin &amp; Momentum™ ecosystem — including but not limited to the VA Launch System portal, the VA Systems Library, the Mainframe VA Library, and any downloadable resources — you confirm that you have read, understood, and agreed to these terms.</p>

      <h2 className="legal-h2">2. Use of the System</h2>
      <p>The tools, frameworks, and resources provided by Margin &amp; Momentum™ are for personal, professional development use only. You may not reproduce, redistribute, resell, or repurpose any content from the Margin &amp; Momentum™ ecosystem for commercial gain without explicit written permission from the Systems Architect.</p>
      <p>You agree not to use the System to:</p>
      <ul className="legal-list">
        <li>Violate any applicable law or regulation</li>
        <li>Misrepresent your identity or qualifications to clients or prospective employers</li>
        <li>Share access credentials with third parties</li>
        <li>Reverse-engineer, copy, or replicate the architecture of any tool or framework within the ecosystem</li>
      </ul>

      <h2 className="legal-h2">3. Free Access and Operator Slots</h2>
      <p>The VA Launch System is offered free of charge for the first 1,000 operators. Free access is non-transferable. Margin &amp; Momentum™ reserves the right to modify access terms, introduce paid tiers, or limit capacity at any time with reasonable notice.</p>

      <h2 className="legal-h2">4. Intellectual Property</h2>
      <p>All content within the Margin &amp; Momentum™ ecosystem — including the POL Framework™, the Systems Over Hustle™ methodology, written content, PDF workbooks, lab structures, trifecta tools, and AI tool configurations — is the intellectual property of Margin &amp; Momentum™ and its Systems Architect.</p>
      <p>You are granted a limited, non-exclusive, non-transferable license to use these materials for your own professional development. This license does not include the right to redistribute, modify, or commercialize any content.</p>

      <h2 className="legal-h2">5. Disclaimer of Warranties</h2>
      <p>Margin &amp; Momentum™ provides its systems and resources on an "as is" basis. While every effort is made to ensure accuracy and utility, no warranties are made regarding outcomes, income results, or client acquisition timelines. The 20% human variable — your consistency and execution — remains outside our control and outside our responsibility.</p>
      <p>Results vary. The system removes structural barriers. It does not remove the requirement to show up.</p>

      <h2 className="legal-h2">6. Limitation of Liability</h2>
      <p>To the fullest extent permitted by applicable law, Margin &amp; Momentum™ and its Systems Architect shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the System — including but not limited to lost income, lost clients, or professional setbacks.</p>

      <h2 className="legal-h2">7. Third-Party Platforms and Tools</h2>
      <p>The System may reference or recommend third-party platforms, tools, and courses (including but not limited to Coursera, HubSpot Academy, Google, Canva, and Notion). These references are informational. Margin &amp; Momentum™ does not endorse, guarantee, or take responsibility for third-party content, pricing changes, or platform availability.</p>

      <h2 className="legal-h2">8. Cohort Participation</h2>
      <p>Participation in any Margin &amp; Momentum™ cohort is subject to enrollment terms communicated at the time of registration. Cohort access is personal and non-transferable. Margin &amp; Momentum™ reserves the right to remove any operator from a cohort for conduct that disrupts the learning environment or violates these terms.</p>

      <h2 className="legal-h2">9. Modifications</h2>
      <p>Margin &amp; Momentum™ reserves the right to update these Terms and Conditions at any time. Continued use of the System following any modification constitutes your acceptance of the revised terms. Material changes will be communicated through the portal or via email where applicable.</p>

      <h2 className="legal-h2">10. Governing Law</h2>
      <p>These terms are governed by the laws of the Republic of the Philippines. Any disputes arising from the use of the Margin &amp; Momentum™ System shall be subject to the exclusive jurisdiction of the appropriate courts of the Philippines.</p>

      <h2 className="legal-h2">11. Contact</h2>
      <p>For questions regarding these Terms and Conditions, contact the Systems Architect through the official Margin &amp; Momentum™ channels. Margin &amp; Momentum™ operates as a faceless brand. Correspondence is handled by the Systems Architect and their designated team.</p>
    </LegalPage>
  )
}

// ─── PRIVACY PAGE ─────────────────────────────────────────────────────────────
function PrivacyPage({ onBack, setPage }) {
  return (
    <LegalPage title="Privacy Notice" lastUpdated="March 2026" onBack={onBack} setPage={setPage}>
      <p className="legal-lead">
        This notice explains what data we collect, why we collect it, and how we handle it. We collect the minimum necessary. We do not sell your data. We do not share it with advertisers.
      </p>

      <h2 className="legal-h2">1. Who We Are</h2>
      <p>Margin &amp; Momentum™ is operated by its Founder and Systems Architect. We provide free educational resources, tools, and operational systems for Filipino virtual assistants and solopreneurs globally. Our primary properties include marginmomentum.co, app.marginmomentum.co, valibrary.marginmomentum.co, and systems.marginmomentum.co.</p>

      <h2 className="legal-h2">2. What We Collect</h2>
      <p>We collect only what is necessary to operate the System and communicate with operators.</p>
      <ul className="legal-list">
        <li><strong>Registration data:</strong> First name and email address, collected when you register for a cohort, access the VA Launch System portal, or subscribe to any Margin &amp; Momentum™ resource.</li>
        <li><strong>Progress data:</strong> Lab completion status, feedback responses, and portal activity — collected through the VLS portal to track operator progress and improve the system.</li>
        <li><strong>Communication data:</strong> Any information you voluntarily share when contacting us, submitting feedback, or participating in cohort activities.</li>
        <li><strong>Technical data:</strong> Standard web analytics including page views, session duration, and referral source. We do not use invasive tracking or cross-site behavioral profiling.</li>
      </ul>

      <h2 className="legal-h2">3. How We Use Your Data</h2>
      <p>Your data is used exclusively to:</p>
      <ul className="legal-list">
        <li>Deliver access to the VA Launch System and related resources</li>
        <li>Send operational communications — cohort updates, lab reminders, completion certificates</li>
        <li>Improve the system based on operator feedback and usage patterns</li>
        <li>Contact you about new cohort openings, product launches, or relevant updates — only if you have subscribed or registered</li>
      </ul>
      <p>We do not use your data for advertising, profiling, or sale to third parties under any circumstances.</p>

      <h2 className="legal-h2">4. Email Communications</h2>
      <p>If you register for a cohort or subscribe to any Margin &amp; Momentum™ resource, you will receive operational and product communications. You may unsubscribe at any time using the link in any email we send. Unsubscribing from marketing emails does not affect access to the portal if you are an enrolled operator.</p>
      <p>We use a third-party email service provider (ConvertKit) to manage communications. Your name and email are stored on their platform in accordance with their privacy policy.</p>

      <h2 className="legal-h2">5. Data Storage and Security</h2>
      <p>Operator data is stored on Firebase (Google) infrastructure. We use industry-standard authentication and security measures including magic link authentication for portal access. We do not store passwords.</p>
      <p>While we take reasonable precautions to protect your data, no system is entirely immune to security risks. We will notify affected operators promptly in the event of any data breach.</p>

      <h2 className="legal-h2">6. Third-Party Services</h2>
      <p>The following third-party services process data in connection with the Margin &amp; Momentum™ System:</p>
      <ul className="legal-list">
        <li><strong>Firebase / Google:</strong> Authentication and database infrastructure for the VLS portal</li>
        <li><strong>ConvertKit:</strong> Email list management and communication</li>
        <li><strong>Vercel / Netlify:</strong> Hosting for web properties</li>
        <li><strong>Anthropic (Claude API):</strong> Powers the POLAI discovery call simulator</li>
      </ul>
      <p>Each of these providers maintains their own privacy policies. We select providers with strong data protection standards and do not authorize them to use your data for their own purposes.</p>

      <h2 className="legal-h2">7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="legal-list">
        <li>Request access to the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data from our systems</li>
        <li>Withdraw consent for communications at any time</li>
      </ul>
      <p>To exercise any of these rights, contact the Systems Architect through the official Margin &amp; Momentum™ channels. We will respond within 30 days.</p>

      <h2 className="legal-h2">8. Data Retention</h2>
      <p>We retain operator data for as long as your account is active or as needed to provide the System. If you request deletion, we will remove your personal data from active systems within 30 days, subject to any legal obligations that require retention.</p>
      <p>Cohort completion records and certificate data may be retained for verification purposes even after account deletion, in anonymized or minimal form.</p>

      <h2 className="legal-h2">9. Children's Privacy</h2>
      <p>The Margin &amp; Momentum™ System is not directed at individuals under the age of 18. We do not knowingly collect data from minors. If you believe a minor has submitted data to our system, please contact us immediately.</p>

      <h2 className="legal-h2">10. Changes to This Notice</h2>
      <p>This Privacy Notice may be updated periodically to reflect changes in our practices or applicable law. The date at the top of this page reflects the most recent revision. Continued use of the System following any update constitutes acceptance of the revised notice.</p>

      <h2 className="legal-h2">11. Contact</h2>
      <p>For any privacy-related questions or requests, contact the Systems Architect through the official Margin &amp; Momentum™ channels. We take data privacy seriously and will respond to all legitimate inquiries promptly.</p>
    </LegalPage>
  )
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    if (page !== 'home') return
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
  }, [page])

  if (page === 'terms') return <TermsPage onBack={() => setPage('home')} setPage={setPage} />
  if (page === 'privacy') return <PrivacyPage onBack={() => setPage('home')} setPage={setPage} />

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
              <div className="footer-copy">© 2026 Margin &amp; Momentum™. All rights reserved.</div>
              <div className="footer-legal">
                <a href="#" onClick={e => { e.preventDefault(); setPage('terms') }}>Terms</a>
                <a href="#" onClick={e => { e.preventDefault(); setPage('privacy') }}>Privacy</a>
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
