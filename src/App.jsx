import { useEffect, useState } from 'react'
import { translations } from './i18n'
import Demo from './Demo.jsx'
import Legal from './Legal.jsx'

const getRoute = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(2) : '')

function Logo({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" aria-hidden="true">
      <rect x="8" y="14" width="52" height="12" rx="6" fill="var(--color-accent)" />
      <rect x="8" y="32" width="72" height="12" rx="6" fill="var(--color-accent)" />
      <rect x="8" y="50" width="36" height="12" rx="6" fill="var(--color-accent)" />
      <rect x="8" y="68" width="60" height="12" rx="6" fill="var(--color-accent)" opacity="0.35" />
    </svg>
  )
}

const code = (text) => <span key={text} className="inline-code">{text}</span>

function Kicker({ children }) {
  return <span className="kicker">{children}</span>
}

function CodeSample() {
  return (
    <pre className="code-block">
      <code>
        {'<script src="https://cdn.voxfill.dev/voxfill.global.js"></script>\n<script>\n  '}
        <span className="code-comment">{'// point at the hosted backend, or your own'}</span>
        {'\n  const vf = VoxFill.init({\n    apiBaseUrl: '}
        <span className="code-string">"https://api.voxfill.dev"</span>
        {',\n    apiKey:     '}
        <span className="code-string">"vf_live_…"</span>
        {',  '}
        <span className="code-comment">{'// issued for your origin'}</span>
        {'\n    root: document.getElementById('}
        <span className="code-string">"signup-form"</span>
        {'),\n  });\n\n  micBtn.onclick = async () => {\n    if (!vf.isRecording()) return vf.startRecording();\n    const { outcome } = await vf.stopRecordingAndFill();\n    '}
        <span className="code-comment">{'// outcome.filled, outcome.missing — highlight and go'}</span>
        {'\n  };\n</script>'}
      </code>
    </pre>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const [route, setRoute] = useState(getRoute)
  useEffect(() => {
    const onHash = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const legalPage = route === 'terms' || route === 'privacy' ? route : null

  useEffect(() => {
    if (legalPage) window.scrollTo(0, 0)
    else if (window.location.hash && !window.location.hash.startsWith('#/')) {
      document.querySelector(window.location.hash)?.scrollIntoView()
    }
  }, [legalPage])

  return (
    <>
      <nav className="nav">
        <span className="nav-brand">
          <Logo size={22} />
          <span>
            vox<span style={{ color: 'var(--color-accent)' }}>Fill</span>
          </span>
        </span>
        <a href="#demo">{t.nav.demo}</a>
        <a href="#what">{t.nav.how}</a>
        <a href="#features">{t.nav.features}</a>
        <a href="#integrate">{t.nav.integrate}</a>
        <a href="#pricing">{t.nav.pricing}</a>
        <a href="#faq">{t.nav.faq}</a>
        <a href="#contact">{t.nav.contact}</a>
        <a className="btn btn-primary" href="#integrate">
          {t.nav.cta}
        </a>
        <button type="button" className="btn btn-secondary" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
          {t.nav.langToggle}
        </button>
      </nav>

      {legalPage ? (
        <Legal t={t.legal} page={legalPage} />
      ) : (
      <>
      <div className="container">
        {/* hero (split variant — the design's configured default) */}
        <section className="hero">
          <div>
            <h1>
              <span>{t.hero.line1}</span>
              <span>{t.hero.line2}</span>
            </h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#demo" style={{ padding: '9px 18px', fontSize: 14 }}>
                {t.hero.tryDemo}
              </a>
              <a className="btn btn-ghost" href="#integrate" style={{ padding: '9px 12px', fontSize: 14 }}>
                {t.hero.guide}
              </a>
            </div>
          </div>
          <div className="hero-mark">
            <svg width="240" height="240" viewBox="0 0 88 88" aria-hidden="true">
              <rect x="8" y="14" width="52" height="12" rx="6" fill="var(--color-accent)" />
              <rect x="8" y="32" width="72" height="12" rx="6" fill="var(--color-accent)" />
              <rect x="8" y="50" width="36" height="12" rx="6" fill="var(--color-accent)" />
              <rect x="8" y="68" height="12" rx="6" fill="var(--color-accent)" opacity="0.45" style={{ animation: 'vf-row 2.8s ease-in-out infinite' }} />
            </svg>
          </div>
        </section>
      </div>

      {/* stat band (full bleed) */}
      <section className="stat-band">
        <div className="container stat-grid">
          {t.stats.map((s) => (
            <div key={s.label}>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        {/* what it does */}
        <section id="what" style={{ padding: '96px 0 56px' }}>
          <Kicker>{t.what.kicker}</Kicker>
          {t.what.steps.map((step, i) => (
            <div key={step.num}>
              {i > 0 && <div className="step-hairline" />}
              <div className="step-row">
                <p className="step-num">{step.num}</p>
                <h2 className="step-title">{step.title}</h2>
                <p className="step-body">{step.body(code)}</p>
              </div>
            </div>
          ))}
        </section>

        {/* demo */}
        <section id="demo" style={{ padding: '40px 0 96px' }}>
          <Kicker>{t.demo.kicker}</Kicker>
          <h2 className="section-title">{t.demo.title}</h2>
          <p className="section-lead">{t.demo.lead}</p>
          <Demo t={t.demo} />
        </section>

        <div className="hairline" />

        {/* features */}
        <section id="features" style={{ padding: '96px 0' }}>
          <Kicker>{t.features.kicker}</Kicker>
          <h2 className="section-title">{t.features.title}</h2>
          <div className="cards-3">
            {t.features.cards.map((c) => (
              <div key={c.title} className="card elev-sm">
                <span className="card-kicker">{c.kicker}</span>
                <span className="card-title">{c.title}</span>
                <p className="card-body">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="hairline" />

        {/* integrate */}
        <section id="integrate" className="integrate-grid" style={{ padding: '96px 0' }}>
          <div>
            <Kicker>{t.integrate.kicker}</Kicker>
            <h2 className="section-title">{t.integrate.title}</h2>
            <div className="integrate-steps">
              {t.integrate.steps.map((step, i) => (
                <div key={i} className="integrate-step">
                  <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{step(code)}</p>
                </div>
              ))}
            </div>
          </div>
          <CodeSample />
        </section>

        <div className="hairline" />

        {/* case studies (placeholders) */}
        <section id="cases" style={{ padding: '96px 0' }}>
          <Kicker>{t.cases.kicker}</Kicker>
          <h2 className="section-title">{t.cases.title}</h2>
          <div className="cards-3">
            {t.cases.cards.map((c) => (
              <div key={c.kicker} className="card elev-sm" style={{ gap: 14 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    border: '1px dashed var(--color-divider)',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 10,
                    color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                  }}
                >
                  {t.cases.logo}
                </div>
                <span className="card-kicker">{c.kicker}</span>
                <span className="card-title">{t.cases.placeholder}</span>
                <p className="card-body">{c.body}</p>
                <span className="card-meta">{t.cases.soon}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="hairline" />

        {/* pricing */}
        <section id="pricing" style={{ padding: '96px 0' }}>
          <Kicker>{t.pricing.kicker}</Kicker>
          <h2 className="section-title">{t.pricing.title}</h2>
          <div className="cards-3" style={{ alignItems: 'stretch' }}>
            {t.pricing.tiers.map((tier, i) => {
              const pro = i === 1
              return (
                <div
                  key={tier.kicker}
                  className={`card pricing-card ${pro ? 'elev-md' : 'elev-sm'}`}
                  style={pro ? { border: '1px solid var(--color-accent)' } : undefined}
                >
                  {pro ? (
                    <div className="pricing-head">
                      <span className="card-kicker">{tier.kicker}</span>
                      <span className="tag tag-accent">{t.pricing.popular}</span>
                    </div>
                  ) : (
                    <span className="card-kicker">{tier.kicker}</span>
                  )}
                  <p className="pricing-price num">
                    {tier.price}
                    {tier.per && <span className="pricing-per">{tier.per}</span>}
                  </p>
                  <p className="card-body" style={{ flex: 'none' }}>
                    {tier.blurb}
                  </p>
                  <div className="pricing-features">
                    {tier.features.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                  <button type="button" className={`btn ${pro ? 'btn-primary' : 'btn-secondary'} btn-block`}>
                    {tier.cta}
                  </button>
                </div>
              )
            })}
          </div>
        </section>

        <div className="hairline" />

        {/* FAQ */}
        <section id="faq" className="faq-grid" style={{ padding: '96px 0' }}>
          <div>
            <Kicker>{t.faq.kicker}</Kicker>
            <h2 className="section-title">{t.faq.title}</h2>
          </div>
          <div className="faq-list">
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="hairline" />

        {/* contact */}
        <section id="contact" style={{ padding: '84px 0 64px' }}>
          <Kicker>{t.contact.kicker}</Kicker>
          <h3 className="section-title" style={{ fontSize: 24 }}>
            {t.contact.title}
          </h3>
          <p className="section-lead">{t.contact.lead}</p>
          <div className="contact-links">
            <div className="contact-item">
              <span className="contact-label">{t.contact.email}</span>
              <a href="mailto:hello@voxfill.dev">hello@voxfill.dev</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">{t.contact.source}</span>
              <a href="#contact">github.com/voxfill</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">{t.contact.book}</span>
              <a href="#contact">cal.com/voxfill</a>
            </div>
          </div>
          <div className="newsletter">
            <input className="input" type="email" placeholder={t.contact.newsletterPlaceholder} aria-label={t.contact.newsletterAria} />
            <button type="button" className="btn btn-primary">
              {t.contact.newsletterCta}
            </button>
          </div>
        </section>

      </div>
      </>
      )}

      <div className="container">
        <footer className="footer">
          <Logo size={14} />
          <span>{t.footer}</span>
          <span className="footer-links">
            <a href="#/terms">{t.legal.termsLink}</a>
            <a href="#/privacy">{t.legal.privacyLink}</a>
          </span>
        </footer>
      </div>
    </>
  )
}
