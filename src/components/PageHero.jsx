import SafeImage from './SafeImage'

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  objectPosition,
  className = '',
}) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <div className="page-hero__media" aria-hidden="true">
        <SafeImage src={image} alt="" priority objectPosition={objectPosition} />
      </div>
      <div className="container page-hero__content">
        {eyebrow ? <p className="eyebrow" style={{ color: 'var(--gold-soft)' }}>{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </section>
  )
}
