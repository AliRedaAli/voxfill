export default function Legal({ t, page }) {
  const doc = t[page]
  return (
    <div className="container legal">
      <a href="#/" className="legal-back">{t.back}</a>
      <h1>{doc.title}</h1>
      <p className="legal-updated">{t.updated}</p>
      {doc.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          <p>{s.p}</p>
        </section>
      ))}
    </div>
  )
}
