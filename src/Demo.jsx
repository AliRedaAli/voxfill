import { useEffect, useRef, useState } from 'react'

const EMPTY = { fullName: '', workEmail: '', company: '', teamSize: '', phone: '' }

export default function Demo({ t }) {
  const [phase, setPhase] = useState('idle') // idle | listening | processing | filling | done
  const [typed, setTyped] = useState('')
  const [values, setValues] = useState(EMPTY)
  const [flash, setFlash] = useState({})
  const [phoneMissing, setPhoneMissing] = useState(false)
  const [status, setStatus] = useState('')
  const timers = useRef([])

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms))
  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const reset = () => {
    clearTimers()
    setPhase('idle')
    setTyped('')
    setValues(EMPTY)
    setFlash({})
    setPhoneMissing(false)
    setStatus('')
  }

  useEffect(() => reset, []) // clear timers on unmount
  useEffect(reset, [t]) // restart cleanly on language switch

  const play = () => {
    if (phase !== 'idle' && phase !== 'done') return
    reset()
    setPhase('listening')
    setStatus(t.listening)
    const words = t.transcript.split(' ')
    words.forEach((w, i) => {
      later(() => setTyped((prev) => (prev ? prev + ' ' + w : w)), 120 * i)
    })
    const typeDone = 120 * words.length + 300
    later(() => {
      setPhase('processing')
      setStatus(t.processing)
    }, typeDone)
    const fillStart = typeDone + 1100
    t.fills.forEach((f, i) => {
      later(() => {
        setPhase('filling')
        setValues((v) => ({ ...v, [f.key]: f.value }))
        setFlash((fl) => ({ ...fl, [f.key]: true }))
        setStatus(t.filling(i + 1, t.fills.length))
        later(() => setFlash((fl) => ({ ...fl, [f.key]: false })), 1100)
      }, fillStart + i * 480)
    })
    later(() => {
      setPhase('done')
      setPhoneMissing(true)
      setStatus(t.done)
    }, fillStart + t.fills.length * 480 + 400)
  }

  const onField = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  const fieldStyle = (key) => {
    if (flash[key]) {
      return {
        borderColor: 'var(--color-accent)',
        boxShadow: '0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent)',
        transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
      }
    }
    if (key === 'phone' && phoneMissing) {
      return {
        borderColor: 'var(--color-accent)',
        borderStyle: 'dashed',
        background: 'color-mix(in srgb, var(--color-accent-900) 55%, var(--color-surface))',
      }
    }
    return { transition: 'box-shadow 0.5s ease, border-color 0.5s ease' }
  }

  const busy = phase === 'listening' || phase === 'processing' || phase === 'filling'
  const playLabel = phase === 'done' ? t.playAgain : busy ? t.playing : t.play

  return (
    <div className="demo-grid">
      <div className="card elev-md demo-form">
        <span className="card-kicker">{t.formKicker}</span>
        <div className="field">
          <label>{t.fullName}</label>
          <input className="input" value={values.fullName} onChange={onField('fullName')} style={fieldStyle('fullName')} />
        </div>
        <div className="field">
          <label>{t.workEmail}</label>
          <input className="input" value={values.workEmail} onChange={onField('workEmail')} style={fieldStyle('workEmail')} />
        </div>
        <div className="field">
          <label>{t.company}</label>
          <input className="input" value={values.company} onChange={onField('company')} style={fieldStyle('company')} />
        </div>
        <div className="demo-2col">
          <div className="field">
            <label>{t.teamSize}</label>
            <select className="input" value={values.teamSize} onChange={onField('teamSize')} style={fieldStyle('teamSize')}>
              <option value="">{t.select}</option>
              <option value="1–10">1–10</option>
              <option value="11–50">11–50</option>
              <option value="51–200">51–200</option>
              <option value="200+">200+</option>
            </select>
          </div>
          <div className="field">
            <label>{t.phone}</label>
            <input className="input" value={values.phone} onChange={onField('phone')} style={fieldStyle('phone')} />
          </div>
        </div>
        {phoneMissing && <p className="demo-note">{t.phoneNote}</p>}
        <button type="button" className="btn btn-secondary" disabled>
          {t.submit}
        </button>
      </div>

      <div className="mic-panel">
        <div className="mic-controls">
          <button
            type="button"
            className="btn btn-primary"
            onClick={play}
            disabled={busy}
            style={{ padding: '10px 18px', fontSize: 14 }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" style={{ transform: 'scaleX(var(--play-dir, 1))' }}>
              <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
            </svg>
            {playLabel}
          </button>
          <button type="button" className="btn btn-ghost" onClick={reset} style={{ fontSize: 13 }}>
            {t.reset}
          </button>
          {phase === 'listening' && (
            <div className="eq" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
          )}
        </div>
        {typed.length > 0 && (
          <div className="transcript-box">
            <p className="transcript-label">{t.transcriptLabel}</p>
            <p className="transcript-text">“{typed}”</p>
          </div>
        )}
        {status.length > 0 && <p className="demo-status">{status}</p>}
        <p className="demo-disclaimer">{t.disclaimer}</p>
      </div>
    </div>
  )
}
