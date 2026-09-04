export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  as: Heading = 'h2',
}) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading>{title}</Heading>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
    </header>
  )
}
