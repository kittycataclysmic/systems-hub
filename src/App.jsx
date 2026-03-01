import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// GLOBAL STYLES
// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #fff; }

  .app {
    font-family: 'Libre Baskerville', Georgia, serif;
    background: #fff;
    color: #0a0a0a;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* ── HEADER ── */
  .hdr {
    border-bottom: 2px solid #0a0a0a;
    padding: 14px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 200;
  }
  .brand {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #0a0a0a;
  }
  .tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #aaa;
  }

  /* ── MAIN ── */
  .main {
    flex: 1;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    padding: 60px 40px 100px;
  }

  /* ── FOOTER ── */
  .ftr {
    background: #0a0a0a;
    padding: 16px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ftr-l { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase; color: #fff; }
  .ftr-r { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase; color: #555; }

  /* ── TRIFECTA CARDS ── */
  .card {
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: stretch;
    border: 1.5px solid #0a0a0a;
    margin-bottom: 2px;
    cursor: default;
  }
  .card-num {
    background: #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 48px;
    color: #fff;
    line-height: 1;
    padding: 24px 16px;
  }
  .card-body {
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }
  .card-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #aaa;
    display: block;
    margin-bottom: 8px;
  }
  .card-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(28px, 4vw, 38px);
    color: #0a0a0a;
    line-height: 1;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }
  .card-desc {
    font-size: 13.5px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px;
  }
  .card-tools {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .card-tool-badge {
    font-family: 'DM Mono', monospace;
    font-size: 7.5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #888;
    border: 1px solid #ddd;
    padding: 5px 10px;
  }
  .card-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #0a0a0a;
    color: #fff;
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 14px 24px;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    align-self: flex-start;
  }
  .card-cta:hover { background: #333; }

  /* ── JOURNEY CONNECTOR ── */
  .connector {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 6px 80px;
    margin: 0;
  }
  .connector-line { flex: 1; height: 1px; background: #ddd; }
  .connector-label {
    font-family: 'DM Mono', monospace;
    font-size: 7.5px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ccc;
    white-space: nowrap;
  }

  /* ── MODAL OVERLAY ── */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(10,10,10,0.75);
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .modal {
    background: #fff;
    max-width: 520px;
    width: 100%;
    padding: 44px 48px 48px;
    position: relative;
    animation: fadeUp 0.3s ease forwards;
  }
  .modal-close {
    position: absolute;
    top: 16px;
    right: 20px;
    background: none;
    border: none;
    font-family: 'DM Mono', monospace;
    font-size: 18px;
    color: #aaa;
    cursor: pointer;
    line-height: 1;
    padding: 4px;
  }
  .modal-close:hover { color: #0a0a0a; }
  .modal-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #aaa;
    display: block;
    margin-bottom: 16px;
  }
  .modal-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(32px, 6vw, 48px);
    line-height: 0.95;
    color: #0a0a0a;
    margin-bottom: 8px;
  }
  .modal-outline {
    -webkit-text-stroke: 2px #0a0a0a;
    color: transparent;
  }
  .modal-divider { width: 36px; height: 3px; background: #0a0a0a; margin: 20px 0; }
  .modal-body {
    font-size: 13.5px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 28px;
  }

  /* ── RADIO OPTIONS ── */
  .radio-group { display: flex; flex-direction: column; gap: 2px; margin-bottom: 24px; }
  .radio-opt {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 18px;
    border: 1.5px solid #e0e0e0;
    cursor: pointer;
    transition: all 0.15s;
    background: #fff;
    text-align: left;
    width: 100%;
  }
  .radio-opt:hover { border-color: #0a0a0a; background: #fafafa; }
  .radio-opt.selected { border-color: #0a0a0a; background: #0a0a0a; }
  .radio-dot {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    border: 1.5px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
  }
  .radio-opt.selected .radio-dot {
    border-color: #fff;
    background: #fff;
  }
  .radio-dot-inner {
    width: 7px;
    height: 7px;
    background: #0a0a0a;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .radio-opt.selected .radio-dot-inner { opacity: 1; }
  .radio-text {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    line-height: 1.5;
    color: #333;
    transition: color 0.15s;
  }
  .radio-opt.selected .radio-text { color: #fff; }

  /* ── EMAIL FORM ── */
  .email-wrap { position: relative; margin-bottom: 10px; }
  .email-input {
    border: 1.5px solid #0a0a0a;
    padding: 14px 18px;
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
    color: #0a0a0a;
    background: #fff;
    outline: none;
    width: 100%;
  }
  .email-input::placeholder { color: #bbb; }
  .email-input:focus { box-shadow: 3px 3px 0 #0a0a0a; }

  .submit-btn {
    width: 100%;
    background: #0a0a0a;
    color: #fff;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding: 16px 24px;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .submit-btn:hover { background: #333; }
  .submit-btn:disabled { opacity: 0.4; cursor: default; }

  .form-note {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #bbb;
    text-align: center;
    margin-top: 14px;
  }

  /* ── SUCCESS STATE ── */
  .success-wrap {
    text-align: center;
    padding: 20px 0;
    animation: fadeUp 0.4s ease forwards;
  }
  .success-check {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 64px;
    color: #0a0a0a;
    display: block;
    line-height: 1;
    margin-bottom: 16px;
  }
  .success-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 32px;
    color: #0a0a0a;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
  }
  .success-body {
    font-size: 13.5px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 28px;
  }
  .success-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #0a0a0a;
    color: #fff;
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 14px 24px;
    text-decoration: none;
    transition: background 0.2s;
  }
  .success-link:hover { background: #333; }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.4s ease forwards; }

  /* ── BOTTOM STRIP ── */
  .strip {
    background: #0a0a0a;
    padding: 36px 40px;
    margin-top: 72px;
  }
  .strip-inner {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 40px;
  }
  .strip-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #555;
    display: block;
    margin-bottom: 10px;
  }
  .strip-text {
    font-size: 14px;
    line-height: 1.75;
    color: #aaa;
  }
  .strip-text strong { color: #fff; }

  @media (max-width: 640px) {
    .hdr { padding: 12px 20px; }
    .main { padding: 40px 20px 80px; }
    .ftr { padding: 14px 20px; }
    .card { grid-template-columns: 56px 1fr; }
    .card-num { font-size: 36px; padding: 20px 12px; }
    .card-body { padding: 20px 20px; }
    .connector { padding: 6px 56px; }
    .modal { padding: 36px 28px 40px; }
    .strip-inner { grid-template-columns: 1fr; }
    .strip { padding: 28px 20px; }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const TRIFECTAS = [
  {
    id: "starter",
    number: "01",
    stage: "Stage 01 · No Client Yet",
    title: "STARTER",
    titleOutline: "TRIFECTA",
    desc: "You're applying but not landing. Three tools to diagnose exactly what's blocking you, fix your pitch, and build your full launch kit — so your next application is the one that works.",
    tools: ["Application Killer Audit", "First Client Blueprint", "VA Launch Kit Builder"],
    radioLabel: "I'm still looking for my first client",
    url: "https://starter.marginmomentum.co",
  },
  {
    id: "first90",
    number: "02",
    stage: "Stage 02 · Just Got Your First Client",
    title: "FIRST 90",
    titleOutline: "DAYS",
    desc: "You landed a client. Now keep them. Three tools to professionalise your first week, make your value visible, and have the conversation that turns a project into a retainer.",
    tools: ["First Client Readiness Audit", "First 90 Days Blueprint", "Client Success System Builder"],
    radioLabel: "I just landed my first client",
    url: "https://first90.marginmomentum.co",
  },
  {
    id: "lean",
    number: "03",
    stage: "Stage 03 · Ready for Stable Income",
    title: "LEAN",
    titleOutline: "TRIFECTA",
    desc: "You have clients but income is unpredictable. Three tools to audit your retainer readiness, follow the blueprint, and build the system that keeps clients paying month after month.",
    tools: ["Retainer Readiness Audit", "The Retainer Blueprint", "Stable Income System Builder"],
    radioLabel: "I have clients but income isn't stable yet",
    url: "https://lean.marginmomentum.co",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EMAIL GATE MODAL
// ─────────────────────────────────────────────────────────────────────────────
function EmailGate({ selected, onClose }) {
  const [stage, setStage]     = useState("form");   // "form" | "success"
  const [choice, setChoice]   = useState(selected?.id ?? null);
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);

  const chosenTrifecta = TRIFECTAS.find(t => t.id === choice);
  const canSubmit = choice && email.includes("@") && email.includes(".");

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setLoading(true);

    // ─────────────────────────────────────────────────────────────────────
    // KIT INTEGRATION — Replace the URL below with your Kit form action URL
    // Format: https://app.kit.com/forms/YOUR_FORM_ID/subscriptions
    // Add a custom field called "trifecta" to capture the radio selection
    // ─────────────────────────────────────────────────────────────────────
    try {
      await fetch("https://app.kit.com/forms/0f05a65571/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email_address: email,
          fields: { trifecta: chosenTrifecta?.id ?? "" },
        }),
      });
    } catch (_) {
      // Silent fail — still show success so UX isn't blocked
    }

    setLoading(false);
    setStage("success");
  };

  return (
    <div className="overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>×</button>

        {stage === "form" && (
          <div className="fade-up">
            <span className="modal-eyebrow">Free Access · No Credit Card</span>
            <h2 className="modal-title">
              GET YOUR<br />
              <span className="modal-outline">FREE SYSTEM</span>
            </h2>
            <div className="modal-divider" />
            <p className="modal-body">
              Pick your stage, drop your email — and we'll send you straight to the right trifecta.
            </p>

            {/* Radio selection */}
            <div className="radio-group">
              {TRIFECTAS.map(t => (
                <button
                  key={t.id}
                  className={`radio-opt${choice === t.id ? " selected" : ""}`}
                  onClick={() => setChoice(t.id)}
                >
                  <div className="radio-dot">
                    <div className="radio-dot-inner" />
                  </div>
                  <span className="radio-text">{t.radioLabel}</span>
                </button>
              ))}
            </div>

            {/* Email field */}
            <div className="email-wrap">
              <input
                className="email-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleSubmit(); }}
              />
            </div>

            <button className="submit-btn" onClick={handleSubmit} disabled={!canSubmit || loading}>
              {loading ? "Sending..." : `Get the ${chosenTrifecta?.title ?? "System"} →`}
            </button>

            <p className="form-note">No spam. Unsubscribe anytime.</p>
          </div>
        )}

        {stage === "success" && (
          <div className="success-wrap">
            <span className="success-check">✓</span>
            <h3 className="success-title">You're In</h3>
            <p className="success-body">
              Check your inbox — your access link is on its way.<br />
              Can't wait? Go straight to your trifecta now.
            </p>
            {chosenTrifecta && (
              <a className="success-link" href={chosenTrifecta.url}>
                Open {chosenTrifecta.title} {chosenTrifecta.titleOutline} →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TRIFECTA CARD
// ─────────────────────────────────────────────────────────────────────────────
function TrifectaCard({ trifecta, onAccess }) {
  return (
    <div className="card">
      <div className="card-num">{trifecta.number}</div>
      <div className="card-body">
        <div>
          <span className="card-eyebrow">{trifecta.stage}</span>
          <div className="card-title">
            {trifecta.title}{" "}
            <span style={{ WebkitTextStroke: "2px #0a0a0a", color: "transparent" }}>
              {trifecta.titleOutline}
            </span>
          </div>
          <p className="card-desc">{trifecta.desc}</p>
          <div className="card-tools">
            {trifecta.tools.map((tool, i) => (
              <span key={i} className="card-tool-badge">
                {String(i + 1).padStart(2, "0")} {tool}
              </span>
            ))}
          </div>
        </div>
        <button className="card-cta" onClick={() => onAccess(trifecta)}>
          Access {trifecta.title} {trifecta.titleOutline} →
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT APP
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [modal, setModal] = useState(null); // null | trifecta object

  return (
    <div className="app">
      <style>{CSS}</style>

      {/* HEADER */}
      <header className="hdr">
        <span className="brand">Margin &amp; Momentum™</span>
        <span className="tag">Systems Over Hustle™</span>
      </header>

      {/* MAIN */}
      <main className="main fade-up">

        {/* HERO */}
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", display: "block", marginBottom: 20 }}>
          Margin &amp; Momentum™ · Systems Library
        </span>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 9vw, 88px)", lineHeight: 0.9, color: "#0a0a0a", marginBottom: 28, letterSpacing: 1 }}>
          YOUR FREE<br />
          <span style={{ WebkitTextStroke: "2.5px #0a0a0a", color: "transparent" }}>SYSTEMS LIBRARY</span>
        </h1>
        <div style={{ width: 48, height: 3, background: "#0a0a0a", marginBottom: 28 }} />
        <p style={{ fontSize: 15, lineHeight: 1.85, color: "#444", marginBottom: 20, maxWidth: 580 }}>
          Three free tool sets for Filipino VAs — built for every stage of your journey.
          Each trifecta has one outcome: move you forward, faster.
        </p>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 56 }}>
          Pick your stage below →
        </p>

        {/* TRIFECTA CARDS + CONNECTORS */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {TRIFECTAS.map((t, i) => (
            <div key={t.id}>
              <TrifectaCard trifecta={t} onAccess={trifecta => setModal(trifecta)} />
              {i < TRIFECTAS.length - 1 && (
                <div className="connector">
                  <div className="connector-line" />
                  <span className="connector-label">then when you're ready</span>
                  <div className="connector-line" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BOTTOM STRIP */}
        <div className="strip">
          <div className="strip-inner">
            <div>
              <span className="strip-label">Why Free?</span>
              <p className="strip-text">
                These tools exist because every Filipino VA deserves a system — not just a hustle.{" "}
                <strong>All three trifectas are completely free.</strong>{" "}
                No upsells. No paywalls. Just the system that moves you forward.
              </p>
            </div>
            <button
              className="card-cta"
              style={{ whiteSpace: "nowrap" }}
              onClick={() => setModal(TRIFECTAS[0])}
            >
              Start Here →
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="ftr">
        <span className="ftr-l">Margin &amp; Momentum™</span>
        <span className="ftr-r">Systems Over Hustle™</span>
      </footer>

      {/* EMAIL GATE MODAL */}
      {modal && (
        <EmailGate
          selected={modal}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
